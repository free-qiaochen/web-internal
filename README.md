# vue-adapt

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 基于vue-cli3.x安装的vue2.x，结合vue-i18n,element-ui,开发pc。mobile适配的，国际化（中英文）支持的官网基础仓库！


```
vue-adapt                       //
├─ .babelrc                     //
├─ babel.config.js              //
├─ package.json                 //
├─ public                       //
│  ├─ favicon.ico               //
│  └─ index.html                //
├─ README.md                    //
├─ src                          //
│  ├─ App.vue                   //
│  ├─ assets                    //
│  │  └─ logo.png               //
│  ├─ components                //  共用组件(pc,mobile)
│  │  ├─ common                 //
│  │  │  └─ languageBtn.vue     //
│  │  ├─ HelloWorld.vue         //
│  │  ├─ mobile                 //  mobile组件
│  │  └─ pc                     //  pc组件
│  ├─ config                    //
│  │  └─ index.js               //
│  ├─ lang                      //  语言库文件
│  │  ├─ en                     //  英文
│  │  │  ├─ about.js            //  about页面模块
│  │  │  └─ home.js             //
│  │  ├─ en.js                  //
│  │  ├─ zh                     //  中文
│  │  │  ├─ about.js            //
│  │  │  └─ home.js             //
│  │  └─ zh.js                  //
│  ├─ main.js                   //  入口
│  ├─ store                     //
│  │  └─ index.js               //
│  ├─ utils                     //
│  │  ├─ i18n.js                //
│  │  ├─ index.js               //
│  │  └─ uiComponent.js         //
│  └─ views                     //
├─ vue.config.js                //
└─ yarn.lock                    //

```