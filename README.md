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

## Directory structure
```bash
.
├── public/                  # pure static assets (directly copied)
├── src/
│   ├── assets/              # dynamic assets (processed by Vite)
│   ├── components/          # .vue common components used in pages & layouts
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
|   |   ├── index.js         # Pinia initialization
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
├── jsconfig.json            # Editor config (if not using Typescript)
├── package.json             # npm scripts and dependencies
└── README.md                # readme for your website/App
```

Directories can be accessed directly without relative paths: `app`, `src`, `assets`, `components`, `layouts`, `modules`, `pages`, `boot`, `services`, `stores`, `utilities`
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

## Boot files
### auth.js
- Handles private/public routing
- Intercepts every routing
### i18n.js
TBD
### notify-defaults.js
Default configurations of Quasar `Notify` plugin
