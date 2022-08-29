<script setup>
import { ref } from 'vue'
import { useCommonStore } from 'stores/common-store'

const props = defineProps({
  label: { type: String, default: 'Upload media' },
  meta: { type: Object, default: () => ({}) },
  apiEndPoint: { type: String, required: true },
  attachmentGroup: { type: String, default: '' },
  fieldName: { type: String, default: 'file' },
  files: { type: Array, default: () => [] }
})

const isOpenLightBox = ref(false),
  lightBoxHeader = ref(''),
  lightBoxMedia = ref(null),
  mediaUploader = ref(null)

const emit = defineEmits(['delete-attachment', 'uploaded-attachments'])

const commonStore = useCommonStore()
const handledeleteFile = (file) => {
  commonStore.renderAlertDialog({
    title: '⚠️ Warning !!!',
    message: `You are about to delete an uploaded file named <b>${file.file_name}</b>.`,
    confirm: {
      label: 'Delete',
      color: 'negative',
      flat: true,
      handler: () => emit('delete-attachment', file)
    },
    cancel: true
  })
}

const handleDownloadFile = (url) => {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const openLightBox = (file) => {
  isOpenLightBox.value = true
  lightBoxHeader.value = file.file_name
  lightBoxMedia.value = file.full_url
}

const handleCloseLightBox = () => {
  lightBoxHeader.value = ''
  lightBoxMedia.value = null
}

const factoryFn = async () => {
  return new Promise((resolve, reject) => {
    if ((props.meta && props.meta.multiple) || !(props.files && props.files.length)) {
      resolve({
        url: props.apiEndPoint,
        fieldName: props.fieldName,
        formFields: [{ name: 'attachment_group', value: props.attachmentGroup }]
      })
    } else reject()
  })
}

const handleUploaded = ({ files, xhr }) => {
  // TODO: need to check this remove func
  mediaUploader.value.removeFile(files[0])
  emit('uploaded-attachments', JSON.parse(xhr.response))
}

// const readableFileSize = (bytes) => {
//   if (bytes === 0) return '0.00 B'
//   const e = Math.floor(Math.log(bytes) / Math.log(1024))
//   return (bytes / Math.pow(1024, e)).toFixed(1) + ' ' + ' KMGTP'.charAt(e) + 'B'
// }

const isImage = (mime) => {
  return mime.split('/')[0] === 'image'
}

const getFileExtension = (name) => {
  return name.split('.').pop()
}

const getFileIconName = (file) => {
  const extension = getFileExtension(file)
  /* eslint-disable eqeqeq */
  if (['txt', 'ini'].some(ext => ext == extension)) return 'alt'
  if (['ppt', 'pptm', 'pptx'].some(ext => ext == extension)) return 'powerpoint'
  if (['zip', 'rar', '7z', 'tar'].some(ext => ext == extension)) return 'archive'
  if (['mp3', 'wav', 'aac', 'wma', 'aiff', 'flac'].some(ext => ext == extension)) return 'audio'
  if (['docx', 'docm', 'doc', 'dotm', 'dotx', 'wbk'].some(ext => ext == extension)) return 'word'
  if (['xltm', 'xltx', 'xlsm', 'xlsx', 'ooxml', 'xlm', 'xlt', 'xlt', 'xls'].some(ext => ext == extension)) return 'excel'
  if ([
    'mp4',
    'mpeg4',
    'avi',
    'flv',
    'mkv',
    'webm',
    'mov',
    'wmv',
    'swf',
    'avchd',
    '3gp',
    '3gpp'
  ].some(ext => ext == extension)) return 'video'
  if ([
    'asp',
    'aspx',
    'axd',
    'asx',
    'asmx',
    'ashx',
    'css',
    'cfm',
    'yaws',
    'swf',
    'html',
    'htm',
    'xhtml',
    'jhtml',
    'shtml',
    'xml',
    'rss',
    'rb',
    'rhtml',
    'jsp',
    'jspx',
    'wss',
    'do',
    'action',
    'js',
    'pl',
    'php',
    'php4',
    'php3',
    'phtml',
    'py',
    'cgi',
    'dll',
    'bat',
    'dat'
  ].some(ext => ext == extension)) return 'code'
  /* eslint-enable eqeqeq */
  return extension
}
</script>

<template>
  <q-uploader
    ref="mediaUploader"
    :label="label"
    :factory="factoryFn"
    auto-upload
    style="width: 100%"
    v-bind="meta"
    @uploaded="handleUploaded"
  >
    <template #header="scope">
      <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
        <q-spinner
          v-if="scope.isUploading"
          class="q-uploader__spinner"
        />
        <div class="col">
          <div class="q-uploader__title">
            {{ label }}
            <span v-if="!(meta && meta.multiple)">(Single Upload)</span>
          </div>
          <div class="q-uploader__subtitle">
            {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
          </div>
        </div>
        <q-btn
          v-if="meta && meta.multiple || !(files && files.length)"
          type="a"
          icon="o_add_box"
          round
          dense
          flat
        >
          <q-uploader-add-trigger />
          <q-tooltip>Pick Files</q-tooltip>
        </q-btn>
        <q-btn
          v-if="scope.isUploading"
          icon="o_clear"
          @click="scope.abort"
          round
          dense
          flat
        >
          <q-tooltip>Abort Upload</q-tooltip>
        </q-btn>
      </div>
    </template>

    <template #list="scope">
      <div class="row items-start q-gutter-sm">
        <q-card
          v-for="file in files"
          :key="file.id"
          style="width: 150px"
        >
          <q-card-actions
            class="absolute-top q-py-none"
            style="background-color: rgba(255, 255, 255, 0.5); z-index: 1;"
          >
            <q-btn
              flat
              round
              icon="o_download"
              size="sm"
              @click="handleDownloadFile(file.full_url)"
            />
            <q-space />
            <q-btn
              flat
              round
              color="negative"
              icon="o_delete"
              size="sm"
              @click="handledeleteFile(file)"
            />
          </q-card-actions>
          <q-img
            v-if="isImage(file.mime_type)"
            :src="file.full_url"
            spinner-color="white"
            style="height: 140px; max-width: 150px; cursor: pointer;"
            @click="openLightBox(file)"
          />
          <q-icon
            v-else
            size="120px"
            :name="'fas fa-file-' + getFileIconName(file.file_name)"
            color="grey"
            style="display: block; margin: 0 auto; padding: 10px 0;"
          />
          <q-card-section
            class="q-pa-sm"
            :class="'bg-light-green-2'"
          >
            <div
              class="text-subtitle2 ellipsis"
              :title="file.file_name"
            >
              {{ file.file_name }}
            </div>
            <div class="text-caption">
              Status: Uploaded
            </div>
            <div class="text-caption">
              Size: {{ file.size_human_readable }}
            </div>
          </q-card-section>
        </q-card>

        <q-card
          v-for="file in scope.files"
          :key="file.name"
          style="width: 150px"
        >
          <q-card-actions
            class="absolute-top q-py-none"
            style="background-color: rgba(255, 255, 255, 0.5); z-index: 1;"
          >
            <q-space />
            <q-btn
              flat
              round
              color="negative"
              icon="o_delete"
              size="sm"
              @click="scope.removeFile(file)"
            />
          </q-card-actions>
          <q-img
            v-if="file.__img"
            :src="file.__img.src"
            spinner-color="white"
            style="height: 140px; max-width: 100%"
          />
          <q-icon
            v-else
            size="120px"
            :name="'fas fa-file-' + getFileIconName(file.name)"
            color="grey"
            style="display: block; margin: 0 auto; padding: 10px 0;"
          />
          <q-card-section
            class="q-pa-sm"
            :class="{'bg-red-2' : file.__status === 'failed'}"
          >
            <div
              class="text-subtitle2 ellipsis"
              :title="file.name"
            >
              {{ file.name }}
            </div>
            <div class="text-caption">
              Status: {{ file.__status }}
            </div>
            <div class="text-caption">
              {{ file.__sizeLabel }} / {{ file.__progressLabel }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <light-box
        v-model:show="isOpenLightBox"
        :header="lightBoxHeader"
        :media="lightBoxMedia"
        @on-close="handleCloseLightBox"
      />
    </template>
  </q-uploader>
</template>
