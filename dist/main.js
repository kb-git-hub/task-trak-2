/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/checkmark.png */ \"./src/images/checkmark.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS Reset */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n    box-sizing: border-box;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    font-family: 'Alata', sans-serif;\\r\\n    font-size: 16px;\\r\\n\\r\\n    --bgColor1: #15202b;\\r\\n    --bgColor2: #192734;\\r\\n    --bgColor3: #22303c;\\r\\n    --bgColorPopUp: #273746;\\r\\n    --textColor: #eaebec;\\r\\n    --accent: #2abd67;\\r\\n    --accentDark:#1f8d4d;\\r\\n}\\r\\n\\r\\nhtml{\\r\\n    width: 100%;\\r\\n    height:100%;\\r\\n    margin:0;\\r\\n    padding: 0;\\r\\n    \\r\\n}\\r\\nbody{\\r\\n    font-family: 'Alata';\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    height: 100%;\\r\\n}\\r\\n/* css when light mode is turned on */\\r\\nbody.light{\\r\\n    --bgColor2:#ececec;\\r\\n    --bgColor3: #f2f3f5;\\r\\n    --bgColor1:#fefcfe;\\r\\n    --bgColorPopUp: #f3f1f3;\\r\\n    --textColor: #374958;\\r\\n    --accentDark: #2abd67;\\r\\n}\\r\\n/* css for header area(logo) */\\r\\n.logoArea{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    background-color: var(--bgColor3);\\r\\n    font-size:2.5rem;\\r\\n    padding:10px 20px;\\r\\n    font-weight: 900;\\r\\n    border-bottom: solid 2px var(--accentDark);\\r\\n}\\r\\n.hiddenMenu{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n        \\r\\n    padding:10px;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n.hiddenMenu:active{\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n.hiddenMenu .material-icons-round{\\r\\n    color: var(--textColor);\\r\\n    transform:scale(1.3);\\r\\n\\r\\n    pointer-events: none;\\r\\n}\\r\\n.hiddenMenu:hover{\\r\\n    background-color: rgba(128, 128, 128, 0.267);\\r\\n}\\r\\n.logoLeft{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: var(--accent);\\r\\n}\\r\\n.logoLeft img{\\r\\n    width: 2.5rem;\\r\\n    height: 2.5rem;\\r\\n    padding-right:5px;\\r\\n}\\r\\n.logoLeft span{\\r\\n    color:var(--textColor);\\r\\n}\\r\\n.theme{\\r\\n    margin-right:0px;\\r\\n    user-select: none;\\r\\n}\\r\\n.label{\\r\\n    background-color: var(--bgColor1);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding:10px;\\r\\n    border-radius: 50px;\\r\\n    height:40px;\\r\\n    width: 80px;\\r\\n    box-sizing: border-box;\\r\\n    position: relative;\\r\\n    transform:scale(0.8);\\r\\n    transition: background-color 0.2s ease-in;\\r\\n    border: solid 3px var(--accentDark);\\r\\n    cursor: pointer;\\r\\n}\\r\\n.checkbox{\\r\\n    opacity: 0;\\r\\n    position: absolute;\\r\\n}\\r\\n.sun{\\r\\n    transform: scale(1.3);\\r\\n    width:24.7px;\\r\\n}\\r\\n.moon{\\r\\n    color:rgb(86, 152, 163);\\r\\n    transform: scale(1.3);\\r\\n}\\r\\n.ball{\\r\\n    position: absolute;\\r\\n    width:32px;\\r\\n    height:32px;\\r\\n    left: 3px;\\r\\n    background-color: var(--accentDark);\\r\\n    border:solid 4px var(--bgColor1);\\r\\n    border-radius: 50%;\\r\\n    transition: transform 0.2s linear;\\r\\n}\\r\\n\\r\\n/* plus meaning target the node after it */\\r\\n.checkbox:checked + .label .ball{            \\r\\n    transform: translate(37px);\\r\\n    background-color: var(--accentDark);\\r\\n    border:solid 4px var(--bgColor3);\\r\\n}\\r\\n.checkbox:checked + label{\\r\\n    background-color: var(--bgColor3);\\r\\n}\\r\\n\\r\\n/* css for content below logo */\\r\\n.content{\\r\\n    display:flex;\\r\\n    flex-direction: row;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* css for .leftPanel */\\r\\n.leftPanel{\\r\\n    box-sizing: border-box;\\r\\n    background-color: var(--bgColor1);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    color:var(--textColor);\\r\\n    padding:20px;\\r\\n    width:350px;\\r\\n    user-select: none;\\r\\n}\\r\\n.leftPanel h2{\\r\\n    margin-top: 0;\\r\\n    padding-bottom:5px;\\r\\n    border-bottom: solid 2px var(--textColor);\\r\\n}\\r\\n.leftPanel .material-icons-round{\\r\\n    margin-right: 5px;\\r\\n    margin-left:10px;\\r\\n}\\r\\n.leftPanel img{\\r\\n    width: 27px;\\r\\n    height: 27px;\\r\\n    margin-right: 5px;\\r\\n    margin-left:10px;\\r\\n}\\r\\n\\r\\n.home{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.project{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin-top: 15px;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\nbutton, li, form, .tile{\\r\\n    font-family: 'Alata', sans-serif;\\r\\n    margin: 3px 0;\\r\\n    height: auto;\\r\\n    padding-top: 20px;\\r\\n    font-size: 1.125rem;\\r\\n    color: var(--textColor);\\r\\n    background: transparent;\\r\\n    padding:5px;\\r\\n    display:flex;\\r\\n    align-items: flex-start;\\r\\n    border-radius: 4px;\\r\\n    border: solid 2px transparent;\\r\\n    box-sizing: border-box;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.leftPanel .tile:hover, \\r\\nbutton:hover,\\r\\nform:hover{\\r\\n    background-color: var(--bgColor2);\\r\\n}\\r\\n\\r\\n.projectInfo{\\r\\n    display: flex;\\r\\n    flex:1;\\r\\n}\\r\\n\\r\\n.selected{\\r\\n    border-bottom-left-radius: 0px;\\r\\n    border-top-left-radius: 0px;\\r\\n    border-left: solid 3px var(--accent) !important;\\r\\n    background-color: #2abd6770;\\r\\n}\\r\\n.selected:hover{\\r\\n    background-color: #1f8d4d7a !important;\\r\\n}\\r\\n\\r\\n\\r\\n/* css for editProject part */\\r\\n.editContainer{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-left:auto;\\r\\n    position: relative;             \\r\\n}\\r\\n.editContainer.active .option{\\r\\n    opacity: 1 !important; \\r\\n    pointer-events: auto;\\r\\n    transform: translateY(0);\\r\\n}\\r\\n.option{\\r\\n    pointer-events: none;\\r\\n    display: flex;\\r\\n    opacity: 0;\\r\\n    flex-direction: column;\\r\\n    background: var(--textColor);\\r\\n    bottom:30px;\\r\\n    right:10px;\\r\\n    z-index: 2;\\r\\n    border-radius:3px;\\r\\n    background-color: var(--bgColorPopUp);\\r\\n    padding:4px;\\r\\n    box-shadow: 0 2px 5px rgba(0,0,0, 0.4);\\r\\n    transform: translateY(+10px) ;\\r\\n    transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;\\r\\n    position:absolute;\\r\\n}\\r\\n.option > button{\\r\\n    color:var(--textColor);\\r\\n    margin:0;\\r\\n}\\r\\n\\r\\n.project #projectForm, \\r\\n.project #renameForm,\\r\\n#listForm,\\r\\n#editListForm{\\r\\n    display:flex;\\r\\n    flex:1;\\r\\n    align-items:flex-start;\\r\\n    opacity: 1;\\r\\n    pointer-events: auto;\\r\\n    position: relative;\\r\\n    transition-delay: 1s;\\r\\n    max-height: 500px;\\r\\n    transition: max-height 0.8s ease-out, opacity 300ms ease-in-out;\\r\\n}\\r\\n\\r\\n.hidden{\\r\\n    top:0;\\r\\n    left:0;\\r\\n    pointer-events: none !important;\\r\\n    position: absolute !important;\\r\\n    max-height:0 !important;\\r\\n\\r\\n    /* do nth but avoid opacity transition when position absolute */\\r\\n    transition: max-height 1s ease-out !important;    \\r\\n    opacity: 0 !important;\\r\\n}\\r\\n\\r\\n.projectIcon{\\r\\n    margin-top: 3px;\\r\\n}\\r\\n\\r\\n.formInput{\\r\\n    display:flex;\\r\\n}\\r\\n.inputField{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex: 1;\\r\\n    box-sizing: content-box;\\r\\n}\\r\\ninput[type=text],\\r\\ntextarea,\\r\\ninput[type=date]{\\r\\n    width:100%;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Alata';\\r\\n    font-size:1rem;\\r\\n    background-color: white;\\r\\n    border: solid 2px #273746;\\r\\n    border-radius: 3px;\\r\\n    padding:5px;\\r\\n    resize: none;\\r\\n}\\r\\n.formButtons{\\r\\n    margin-top:5px;\\r\\n    display: flex;\\r\\n    justify-content:center;\\r\\n    width: 100%;\\r\\n}\\r\\n.projectSubmitBtn,\\r\\n.projectCancelBtn,\\r\\n.rename-renameBtn,\\r\\n.rename-cancelBtn,\\r\\n.listSubmitBtn,\\r\\n.listCancelBtn,\\r\\n.editTaskSubmitBtn,\\r\\n.editTaskCancelBtn{\\r\\n    font-family:'Alata';\\r\\n    width:70px;\\r\\n    margin:5px;\\r\\n    border: none;\\r\\n    border-radius: 3px;\\r\\n    color: white;\\r\\n    cursor: pointer;\\r\\n    padding:5px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.projectSubmitBtn,\\r\\n.rename-renameBtn,\\r\\n.listSubmitBtn,\\r\\n.editTaskSubmitBtn{\\r\\n    background-color: var(--accentDark);\\r\\n}\\r\\n.projectCancelBtn,\\r\\n.rename-cancelBtn,\\r\\n.listCancelBtn,\\r\\n.editTaskCancelBtn{\\r\\n    background-color: rgb(190, 4, 4);\\r\\n}\\r\\n\\r\\nbutton:hover, \\r\\ninput[type=\\\"button\\\"]:hover,\\r\\ninput[type=\\\"submit\\\"]:hover{\\r\\n    opacity: 0.9;\\r\\n}\\r\\n\\r\\n/* css for drag and drop event */\\r\\n.dragging{\\r\\n    opacity: 0.5;\\r\\n}\\r\\n\\r\\n\\r\\n/* css for right panel */\\r\\n.rightPanel{\\r\\n    background-color: var(--bgColor2);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 30px 50px;\\r\\n    flex: 1;\\r\\n    min-height: 90vh;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n.title{\\r\\n    background-color: var(--accentDark);\\r\\n    height: 100px;\\r\\n    padding: 20px;\\r\\n    font-size:2.3rem;\\r\\n    color: #f7f5f5;\\r\\n    border-radius: 3px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\nul{\\r\\n    padding:0;\\r\\n    list-style-type:none;\\r\\n    color:var(--textColor);\\r\\n}\\r\\n\\r\\n.list-todo{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\nli{\\r\\n    display: flex;\\r\\n    align-items: flex-start;\\r\\n    height: auto;\\r\\n    padding: 0;\\r\\n    padding-left: 5px;\\r\\n    margin-bottom: 5px;\\r\\n    border: solid 1.5px var(--textColor);\\r\\n    transition: transform 100ms ease-in-out;\\r\\n}\\r\\n\\r\\n.checkmark{\\r\\n    padding-top:3px;\\r\\n    display: block;\\r\\n}\\r\\nul .material-icons-round{\\r\\n    transform:scale(0.8);\\r\\n    margin-right: 8px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n/* checkmark button */\\r\\n.unchecked{\\r\\n    width: 13px;\\r\\n    height: 13px;\\r\\n    border: solid 2px var(--textColor) ;\\r\\n    border-radius: 50%;\\r\\n    margin-right:8px;\\r\\n    margin-top:10px;\\r\\n    flex-shrink: 0;\\r\\n}\\r\\n.checked{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size:100%;\\r\\n    background-repeat: no-repeat;\\r\\n    background-origin:border-box;\\r\\n    background-color: white;\\r\\n    border-color: var(--accent);\\r\\n}\\r\\n.lineThrough{\\r\\n    text-decoration:line-through;\\r\\n}\\r\\n.fade{\\r\\n    opacity: 0.7;\\r\\n}\\r\\n.listHidden{\\r\\n    opacity: 0;\\r\\n    position: absolute;\\r\\n}\\r\\n.important{\\r\\n    pointer-events: none;\\r\\n    color: #fec810;\\r\\n}\\r\\n.cancel{\\r\\n    color: red;\\r\\n    background: white;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n/* edit form css */\\r\\n#editListForm{\\r\\n    background-color: transparent;\\r\\n}\\r\\n.list-details{\\r\\n    flex:1;\\r\\n    margin-top:5px;\\r\\n}\\r\\n.taskTitle{\\r\\n    min-height: 25px;\\r\\n}\\r\\n\\r\\n.taskDetails{\\r\\n    font-size: 0.875rem;\\r\\n    white-space: pre-wrap;\\r\\n    overflow-wrap:normal;\\r\\n}\\r\\n\\r\\n.list-right{\\r\\n    display:flex;\\r\\n    padding:5px;\\r\\n    position: relative;\\r\\n}\\r\\n.list-right .material-icons-round{\\r\\n    padding:1px;\\r\\n    margin:2px;\\r\\n    transform:scale(1.05);\\r\\n    border-radius: 3px;\\r\\n}\\r\\n.list-right .material-icons-round:hover{\\r\\n    background-color:var(--bgColorPopUp);\\r\\n    \\r\\n}\\r\\n.date{\\r\\n    font-size: 0.875rem;\\r\\n    padding:3px 6px;\\r\\n    margin: 6px 5px;\\r\\n    border:solid 1.5px var(--textColor);\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.list-details span{\\r\\n    display: inline-block;\\r\\n}\\r\\n.notes{\\r\\n    display: flex;\\r\\n    align-items: flex-start;\\r\\n    box-sizing: border-box;\\r\\n    align-content: space-around;\\r\\n}\\r\\n\\r\\n.list-todo form{\\r\\n    padding:10px 20px;\\r\\n    background-color: var(--bgColor1);\\r\\n}\\r\\n#addList{\\r\\n    padding-left:45px;\\r\\n}\\r\\n\\r\\n.list-todo button:hover,\\r\\nli:hover{\\r\\n    background-color: var(--bgColor1);\\r\\n}\\r\\n.list-todo button:active,\\r\\nli:active{\\r\\n    transform:scale(0.995);\\r\\n}\\r\\n\\r\\n.noTask{\\r\\n    text-align: center;\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n/* css for footer */\\r\\nfooter{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    margin-top:auto;\\r\\n    background-color: var(--bgColor3);\\r\\n    color:var(--textColor);\\r\\n    flex-shrink: 0;\\r\\n    height:35px;\\r\\n}\\r\\nfooter > *{\\r\\n    margin: auto 10px;\\r\\n    vertical-align: center;\\r\\n    /* height: 35px; */\\r\\n}\\r\\nfooter a{\\r\\n    color:var(--accent);\\r\\n}\\r\\nfooter img{\\r\\n    width: 23px;\\r\\n    height: 23px;\\r\\n    margin-top: 5px;\\r\\n    background-color: white;\\r\\n    border-radius: 50%;\\r\\n    border: solid 1px var(--textColor);\\r\\n}\\r\\nfooter img:hover{\\r\\n    background-color: var(--accent);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* media queries */\\r\\n@media (max-width:930px){\\r\\n    :root{\\r\\n        font-size: 16px;\\r\\n    }\\r\\n    .content{\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .leftPanel{\\r\\n        z-index: 3;\\r\\n        overflow:auto;\\r\\n        width:auto;\\r\\n    }\\r\\n    footer{\\r\\n        line-height: 35px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (max-width: 430px){\\r\\n    :root{\\r\\n        font-size: 13px;\\r\\n    }\\r\\n    .rightPanel{\\r\\n        padding:14px;\\r\\n    }\\r\\n    .title{\\r\\n        padding:8px;\\r\\n        text-align: center;\\r\\n        margin:0px;\\r\\n        height: auto;\\r\\n    }\\r\\n    .content .material-icons-round{\\r\\n        transform: scale(0.85);\\r\\n    }\\r\\n    .list-right{\\r\\n        padding:0px;\\r\\n        margin-top:3px;\\r\\n    }\\r\\n    .leftPanel img, \\r\\n    footer img{\\r\\n        width:20px;\\r\\n        height: 20px;\\r\\n    }\\r\\n    footer{\\r\\n        line-height: 35px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-trak-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://task-trak-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://task-trak-2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-trak-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task-trak-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task-trak-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils */ \"./src/modules/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// listEvents()\r\n(0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.createProjectListeners)()\r\n\r\n\r\n\r\n\r\n\r\n// SHOW / HIDE LEFT MENU\r\nconst menu = (0,_modules_utils__WEBPACK_IMPORTED_MODULE_2__.q)('.hiddenMenu')\r\nmenu.addEventListener('click', () => {\r\n    const leftPanel = (0,_modules_utils__WEBPACK_IMPORTED_MODULE_2__.q)('.leftPanel')\r\n    leftPanel.classList.toggle('hidden')\r\n})\r\n\r\n//STARTUP COLOR THEME -- ! put on darkmode for dev\r\nconst themeSelector = (0,_modules_utils__WEBPACK_IMPORTED_MODULE_2__.q)('.checkbox')\r\nif (!themeSelector.checked) document.body.classList.add('light')\r\nelse document.body.classList.remove('light')\r\n\r\n// LIGHT / DARK THEME SWITCH\r\nthemeSelector.addEventListener('change', () => document.body.classList.toggle('light'))\r\n\r\n\r\n\n\n//# sourceURL=webpack://task-trak-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"createProjectListeners\": () => (/* binding */ createProjectListeners)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\r\n\r\n// CREATE EVENT LISTENERS FOR NEW PROJECT FUNCTIONS\r\nconst createProjectListeners = () =>{\r\n    const projectSubmit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('.projectSubmitBtn')\r\n    projectSubmit.addEventListener('click', processProjectInput)\r\n    \r\n    const projectCancel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('.projectCancelBtn')\r\n    projectCancel.addEventListener('click', hideProjectCreationForm)\r\n    \r\n    const projectCreate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#addProject')\r\n    projectCreate.addEventListener('click', showProjectCreationForm)\r\n    \r\n    const leftPanel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('.leftPanel')\r\n    leftPanel.addEventListener('click', checkTile)    \r\n\r\n    displayProject(projectList)\r\n} \r\n\r\nfunction showProjectCreationForm(){\r\n    const projectForm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#projectForm')\r\n    projectForm.classList.remove('hidden')\r\n    ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#projectInput').focus()\r\n}\r\n\r\nfunction hideProjectCreationForm(){\r\n    const projectForm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#projectForm')\r\n    projectForm.classList.add('hidden')\r\n    ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#projectInput').value = ''\r\n}\r\n\r\n// RETRIEVE LOCAL STORAGE OBJECTS OR START WITH EMPTY PROJECT ARRAY\r\nlet defaultProjectList = []\r\nlet projectList = localStorage.getItem('myProjectList')\r\nprojectList = JSON.parse(projectList || JSON.stringify(defaultProjectList))\r\n\r\n\r\n\r\n\r\n\r\n// PROCESS PROJECT INPUT and CREATE NEW PROJECT\r\nfunction processProjectInput(e){\r\n    e.preventDefault()\r\n    let projectName = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.q)('#projectInput').value\r\n    let projectID = assignProjectID()\r\n    const newProject = new Project(projectName, projectID)\r\n\r\n\r\n    projectlist\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n// DETERMINE PROJECT ID BASED ON PROJECT LIST LENGTH\r\nfunction assignProjectID(){\r\n    const projects = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qA)('[data-project]')\r\n    const newProjectID = projects.length\r\n    return newProjectID\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction checkTile(){}\r\nfunction displayProject(input){}\r\n\r\n\r\n\r\n//PROJECT CLASS  - I dont know what that datathing is\r\nclass Project{\r\n    constructor(name, projectID){\r\n        this.name = name\r\n        this.taskList = []\r\n        this.taskCount = this.taskList.length\r\n        this.projectID\r\n    }\r\n}\n\n//# sourceURL=webpack://task-trak-2/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"q\": () => (/* binding */ q),\n/* harmony export */   \"qA\": () => (/* binding */ qA)\n/* harmony export */ });\nconst q = (query) => document.querySelector(query)\r\nconst qA = (query) => [...document.querySelectorAll(query)]\r\nconst create = (query) => document.createElement(query)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task-trak-2/./src/modules/utils.js?");

/***/ }),

/***/ "./src/images/checkmark.png":
/*!**********************************!*\
  !*** ./src/images/checkmark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72cb1220bcd0f3ae4479.png\";\n\n//# sourceURL=webpack://task-trak-2/./src/images/checkmark.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;