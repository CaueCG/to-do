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

/***/ "./google.js":
/*!*******************!*\
  !*** ./google.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./todo.js\");\n\r\n\r\nfunction renderButtonGoogleApi() {\r\n  gapi.signin2.render(fullContent);\r\n  console.log(\"Não logou!\");\r\n}\r\nfunction renderContent(googleAuth) {\r\n  const googleUser = googleAuth.currentUser.get();\r\n  const idToken = googleUser.getAuthResponse();\r\n  //objeto idToken com a propriedade do objeto que seria o ID do token\r\n  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(idToken.id_token);\r\n  console.log(\"logou\");\r\n}\r\n\r\nfunction verificationLogin(userLogado, googleAuth) {\r\n  if (userLogado) {\r\n    renderContent(googleAuth);\r\n  } else {\r\n    renderButtonGoogleApi();\r\n  }\r\n}\r\n\r\nwindow.startApp = function () {\r\n  gapi.load(\"auth2\", function () {\r\n    let config = {\r\n      client_id:\r\n        \"1052846594787-eeitv1eunmcu1e84h2u23rmu4uv3p39e.apps.googleusercontent.com\",\r\n    };\r\n    gapi.auth2.init(config).then(function (googleAuth) {\r\n      console.log(\"Google auth inicializado!\");\r\n      const userLogado = googleAuth.isSignedIn.get();\r\n      googleAuth.isSignedIn.listen((indicativo) =>\r\n        verificationLogin(indicativo, googleAuth)\r\n      );\r\n      verificationLogin(userLogado, googleAuth);\r\n    });\r\n  });\r\n\r\n  console.log(\"startei o role\");\r\n};\r\n\n\n//# sourceURL=webpack://to-do/./google.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google */ \"./google.js\");\n\r\n\n\n//# sourceURL=webpack://to-do/./index.js?");

/***/ }),

/***/ "./todo.js":
/*!*****************!*\
  !*** ./todo.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\nconst contentAll = document.getElementById(\"fullContent\");\r\nlet todo = [];\r\n\r\nasync function fetchTodos(idToken) {\r\n  const url = `https://caue-todo.herokuapp.com/todos?idToken=${idToken}`;\r\n  const response = await fetch(url);\r\n  const todos = (await response.json()) || [];\r\n\r\n  return todos;\r\n}\r\n\r\nasync function renderTodos(idToken) {\r\n  const todos = (await fetchTodos(idToken)) || [];\r\n  contentAll.innerHTML = `<header>\r\n    <div class=\"containerHeader\">\r\n      <i class=\"fas fa-tasks fa-5x\"></i>\r\n      <p>TODO</p>\r\n    </div>\r\n  </header>\r\n  <main>\r\n    <div class=\"containerMain\">\r\n      <form id=\"addTodo\">\r\n        <input id=\"inputAdd\" type=\"text\" placeholder=\"Add a new task\" />\r\n        <button><i class=\"fas fa-check fa-lg\"></i></button>\r\n      </form>\r\n      <div id=\"listTodo\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer>\r\n    <div class=\"containerFooter\">\r\n      <div class=\"projectStudy\">\r\n        <p>Project developed<br />by Caue CG</p>\r\n      </div>\r\n      <div class=\"palleteColors\">\r\n        <i class=\"fas fa-palette fa-lg\"></i>\r\n        <p>Light Theme</p>\r\n      </div>\r\n      <div class=\"iconSocialNetworks\">\r\n        <a href=\"https://github.com/CaueCG\" target=\"_blank\"\r\n          ><i class=\"fab fa-github fa-lg\"></i>\r\n          <p>GitHub</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </footer>`;\r\n\r\n  setupListener();\r\n  rechargeTodo(todos);\r\n}\r\n\r\nfunction setupListener() {\r\n  const formTodo = document.getElementById(\"addTodo\");\r\n\r\n  formTodo.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    const inputTodo = document.getElementById(\"inputAdd\");\r\n    let value = inputTodo.value.trim();\r\n\r\n    if (value) {\r\n      todo.push({\r\n        name: inputTodo.value,\r\n        isDone: false,\r\n      });\r\n      rechargeTodo(todo);\r\n      inputTodo.value = \"\";\r\n    } else {\r\n      alert(\"Empty field, type something!\");\r\n    }\r\n  });\r\n}\r\n\r\nfunction rechargeTodo(todos) {\r\n  let currentTodo = \"\";\r\n  const listTodo = document.getElementById(\"listTodo\");\r\n\r\n  todos.forEach((element, index) => {\r\n    currentTodo += `   <div id=\"itemTodo${index}\" class=\"itemTodo\">\r\n      <input type=\"text\" value=\"${element.name}\" readonly />\r\n      <div class=\"buttonsTodo\">\r\n        <button class=\"btnEdit\" id=\"btnEdit${index}\"><i class=\"fas fa-edit fa-lg\"></i></button>\r\n        <button class=\"btnDelete\" id=\"btnDelete${index}\"><i class=\"fas fa-trash-alt fa-lg\"></i></button>\r\n      </div>\r\n    </div>`;\r\n  });\r\n  listTodo.innerHTML = currentTodo;\r\n  deleteTodo(todos);\r\n  EditTodo(todos);\r\n}\r\n\r\nfunction deleteTodo(todos) {\r\n  todos.forEach((element, index) => {\r\n    const bDelete = document.getElementById(`btnDelete${index}`);\r\n    bDelete.addEventListener(\"click\", () => {\r\n      let answer = confirm(\"Do you really want to delete the task?\");\r\n\r\n      if (answer == true) {\r\n        todo.splice(index, 1);\r\n        rechargeTodo(todo);\r\n      } else {\r\n        return;\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction EditTodo(todos) {\r\n  todos.forEach((element, index) => {\r\n    const bEdit = document.getElementById(`btnEdit${index}`);\r\n    bEdit.addEventListener(\"click\", () => {\r\n      let newName = prompt(\"Enter a new task, please.\");\r\n      todo[index].name = newName;\r\n      rechargeTodo(todo);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://to-do/./todo.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;