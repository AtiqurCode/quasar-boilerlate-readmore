# Quasar Boilerplate v2.0 (quasar-boilerplate-v2)

Quasar Boilerplate based on vue-3, quasar-v2, vite, pinia

## Prerequisites
#### This guide assumes that you have a good understanding with
- ES6 and later
- Vue 3.x
- Quasar 2.x
- Pinia
- Vue router 4.x
#### Also familiar with
- Vite
### Environment requirements
- Node - >=v14.19.0
- NPM - whichever comes with the required Node Installation
- Yarn - >= v1
- Quasar CLI - >= 1.0.0

## Commands
```bash
# Install the dependencies
yarn # or
npm install
# Start the app in development mode (hot-code reloading, error reporting, etc.)
quasar dev
# Lint the files
yarn lint # or
npm run lint
# Build the app for production
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# Developer's guide
## Points to be noted
- Always keep Quasar version up-to-date.
- Never use/import any `.env` variables in any file/code other than `consts.js`.
- Never manipulate pinia state directly from any component.

## Directory structure
```bash
.
├── public/                  # pure static assets (directly copied)
├── src/
│   ├── assets/              # dynamic assets (processed by Vite)
│   ├── components/          # .vue common components used in pages & layouts
│   ├── composables/         # vue composables
|   |   ├── backButton.js    # backButton composable for showing back-button in layout header/toolbar
│   ├── css/                 # CSS/Sass/... files for your app
|   |   ├── app.sass
|   │   └── quasar.variables.sass # Quasar Sass variables for you to tweak
│   ├── layouts/             # layout .vue files
│   ├── modules/             # App modules
|   │   ├── <module 1>
|   |   |       ├── components # Module .vue local components
|   |   |       ├── pages      # Module .vue local pages
|   |   |       ├── index.js   # Module definition
|   |   |       ├── routes.js  # Module routes definition
|   │   └── <module 2>...
│   ├── pages/               # common page .vue files
│   ├── boot/                # boot files (app initialization code)
│   ├── router/              # Vue Router
|   |   ├── index.js         # Vue Router definition
|   │   └── routes.js        # Module Routes are imported here
│   ├── services/            # Back-End services(APIs)
|   |   ├── client.js        # API client(axios) initialization, default header, interceptor, default loading & notification configurations
|   │   └── service1.js      # APIs
│   ├── stores/              # Pinia Stores
|   |   ├── index.js
|   │   ├── <plugins>        # Pinia plugins
|   │   ├── <store>          # Pinia stores...
|   │   └── <store>...
│   ├── utilities/           # Holds various utilities
|   |   ├── methods.js       # utility functions
|   │   └── validators.js    # Validator functions e.g. email address validator
│   └── App.vue              # root Vue component of your App
├── index.html               # Template for index.html
├── src-capacitor/           # capacitor generated folder used to create Mobile Apps
├── dist/                    # where production builds go
│   ├── spa/                 # example when building SPA
│   └── ....
├── quasar.config.js         # Quasar App Config file
├── .gitignore               # GIT ignore paths
├── .editorconfig            # editor config
├── .eslintignore            # ESlint ignore paths
├── .eslintrc.js             # ESlint config
├── postcss.config.js        # PostCSS config
├── jsconfig.json            # Editor config for javascript
├── package.json             # npm scripts and dependencies
└── README.md                # readme for your website/App
```

Directories can be accessed directly without relative paths: `app`, `src`, `assets`, `composables`, `components`, `layouts`, `modules`, `pages`, `boot`, `services`, `stores`, `utilities`
<br />
e.g. `import {something} from 'utilities/methods'`
## Env Variables
```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode e.g. .env.stagging
.env.[mode].local   # only loaded in specified mode, ignored by git
```

- Only variables prefixed with `ITC` are exposed to this app. e.g. `ITC_DEFAULT_PAGE_TITLE=Quasar Boilerplate v2.0`.
- `ITC_DEFAULT_PAGE_TITLE` will be exposed as `import.meta.env.ITC_DEFAULT_PAGE_TITLE` to your client source code.
- JSON format is acceptable if only in one statement/line.
- App can consure multiple back-end services through `ITC_SERVICES={"default": {...}}` where `default` is the service name.

To know more on env variables see [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html).

## Assets
### navigation-links.js
List of navigation links that are meant to be shown in drawer component.
#### How to add a new item?
```bash
{
    label: 'Dashboard',   # To be displayed as navigation label.
    icon: 'o_home',       # [optional] If we want any icon to show at the start of the navigation item.
    hash: '/dashboard'    # Absolute path of the navigation item.
  }
```

## Boot files
### auth.js
- Handles private/public routing
- Intercepts every routing
### i18n.js
TBD
### notify-defaults.js
Default configurations of Quasar `Notify` plugin

## Composables
### backButton.js
It simply set back-button configs onMount hook and nullify onBeforeUnmount hook.
```bash
onMounted(() => commonStore.showBackButton({ show: true, routerParams })) # routerParams is vue-router params and can be String or Object.
onBeforeUnmount(() => commonStore.showBackButton(null))
```
To use it just call `useBackButton` in .vue component's `setup` scope.
```bash
import { useBackButton } from 'composables/backButton'

useBackButton() # will behave like default back routing. or
useBackButton('/dashboard') # or
useBackButton({name: 'dashboard', query, params})
```
## Services
Syntax:
```
functionName (arguments) {
  return client([service]).method('API_URL', payload, options)
}
```
Example:
```
login ({ data, service = undefined }) {
  return client(service).post('login', data, { requiresAuth: false, notifyOptions: { message: 'Logged in successfully' } })
}
```
- `data`: payload that needs to be passed to back-end
- `service[optional][default=default]`: name of the BE service we want to use. If we want to pass the name from anywhere other than API definition, set default value to `undefined`.
- `client`: API client wrapper.
- `method`: axios request method.
- `API_URL[String:any]`: API route/URL.
- `options[optional]`: options to be passed in `client` wrapper.
  - `requiresAuth`: API needs authentication or not.
  - `notifyOptions`: Quasar Notify options.
  - `showNotification[default: true]`: Show/hide API success notification.

## Stores
### common-store
#### states:
- `pageTitle`: PAGE TITLE can be used anywhere in the app.
- `backButton`: Decides whether to show back button or not.
- `localErrorHandling`: Do we want to handle error from any component or, store other than from client's handler.
- `headerAction[Node:any]`: Any component/node to show on page header.
- `reRenderKey[Number:any]`: Key to be used for rerendering the whole app.
- `loading`: POST/PUT api running state.
- `fetching`: GET api running state.
#### actions:
- `setPageTitle`: set `pageTitle` state.
- `showBackButton`: set `backButton` state. Payload example for showing back-button `{ show: true, routerParams }` and hiding it `null`.
- `setHeaderAction`: set `headerAction` state.
- `reRenderComponent`: set `reRenderKey` state and entry element's `key` in app.vue. Don't use this in any of the Vue Life-Cycle-Hook. Otherwise it will create an endless loop. This method is costly. So, don't use it unless you really need to re-render your visual components.
- `resetAllStores`: Reset all pinia stores.
- `renderAlertDialog`: Use Quasar alert-dialog with some predefined configs.
- `setLoading`: set `loading` state.
- `setFetching`: set `fetching` state.

## Utilities
### methods.js
Utility methods are defined here. Most of the methods are self-explanatory. However some of them need explanation how to use.
#### convertObjCasing - how to use it?
```
import {convertObjCasing, convertSnakeToCamel} from 'utilities/methods'

const camelCasedObject = convertObjCasing(objectToConvert, convertSnakeToCamel)
```

### validator.js
Meant to (but not limited to) be used in Quasar input validations. It can be used in any case where we want to test some certain validity. Validators will return Boolean.
#### How to use validators?
```
<script setup>
import { validateEmail } from 'utilities/validators'
</script>

<template>
  <q-input
    ...
    :rules="[
      val => validateEmail(val) || 'Type a valid Email'
    ]"
  >
</template>
```
