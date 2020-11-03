/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/js/index.js":
/*!********************************!*\
  !*** ./app/static/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import 'core-js/features/promise';\nwindow.addEventListener('load', function () {\n  var listsWithNested = document.querySelectorAll('[data-nested]');\n\n  function toggleActiveClass(el) {\n    el.classList.toggle('active');\n  }\n\n  function swipeMenu() {\n    if (window.innerWidth <= 768) {\n      var initialPoint;\n      var finalPoint;\n      document.addEventListener('touchstart', function (e) {\n        initialPoint = e.changedTouches[0];\n      }, false);\n      document.addEventListener('touchend', function (e) {\n        finalPoint = e.changedTouches[0];\n        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);\n        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);\n\n        if ((xAbs > 20 || yAbs > 20) && xAbs > yAbs) {\n          toggleActiveClass(document.querySelector('.aside'));\n        }\n      }, false);\n    }\n  }\n\n  swipeMenu();\n  listsWithNested.forEach(function (list) {\n    list.addEventListener('click', function (e) {\n      var target = e.target;\n\n      if (target.tagName == 'LI') {\n        var title = list.querySelector('[data-title]');\n\n        if (title.tagName == 'INPUT') {\n          title.value = target.textContent;\n        } else {\n          title.innerHTML = target.textContent;\n        }\n      }\n\n      if (list.hasAttribute('data-nested')) {\n        toggleActiveClass(list);\n      }\n    });\n  });\n  var modals = document.querySelectorAll('.modal');\n  modals.forEach(function (modal) {\n    modal.addEventListener('click', function (e) {\n      var target = e.target;\n\n      if (target.classList.contains('modal__close')) {\n        toggleActiveClass(modal);\n      }\n    });\n    modal.addEventListener('submit', function (e) {\n      e.preventDefault();\n      var validateEls = modal.querySelectorAll('[data-validate]');\n      validateEls.forEach(function (el) {\n        var inputBlock = el.closest('.input');\n        var error = false;\n\n        if (el.value === '') {\n          inputBlock.classList.add('error');\n          eror = true;\n        } else {\n          if (inputBlock.classList.contains('error')) {\n            inputBlock.classList.remove('error');\n          }\n        }\n\n        if (!error) {\n          toggleActiveClass(modal);\n          setTimeout(function () {\n            alert('Thank');\n          }, 100);\n        }\n      });\n    });\n  });\n  window.addEventListener('resize', swipeMenu);\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n    var btn = target.closest('[data-modal]');\n\n    if (btn) {\n      if (btn.dataset.modal == 'modal_add') {\n        toggleActiveClass(document.querySelector('.modal_add'));\n      } else if (btn.dataset.modal == 'modal_edit') {\n        toggleActiveClass(document.querySelector('.modal_edit'));\n      }\n    }\n\n    if (target.classList.contains('todo-task__title')) {\n      document.querySelector('.task').style.display = 'grid';\n      document.querySelector('.todo').style.display = 'none';\n    } else if (target.closest('.task__back')) {\n      document.querySelector('.task').style.display = 'none';\n      document.querySelector('.todo').style.display = 'block';\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzL2luZGV4LmpzP2MwM2MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RzV2l0aE5lc3RlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUFjdGl2ZUNsYXNzIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzd2lwZU1lbnUiLCJpbm5lcldpZHRoIiwiaW5pdGlhbFBvaW50IiwiZmluYWxQb2ludCIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInhBYnMiLCJNYXRoIiwiYWJzIiwicGFnZVgiLCJ5QWJzIiwicGFnZVkiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImxpc3QiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidGl0bGUiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiaGFzQXR0cmlidXRlIiwibW9kYWxzIiwibW9kYWwiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVFbHMiLCJpbnB1dEJsb2NrIiwiY2xvc2VzdCIsImVycm9yIiwiYWRkIiwiZXJvciIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJhbGVydCIsImJ0biIsImRhdGFzZXQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBVztBQUN2QyxNQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBeEI7O0FBRUEsV0FBU0MsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzNCQSxNQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixRQUFwQjtBQUNIOztBQUVELFdBQVNDLFNBQVQsR0FBcUI7QUFDakIsUUFBR1QsTUFBTSxDQUFDVSxVQUFQLElBQXFCLEdBQXhCLEVBQTZCO0FBRXpCLFVBQUlDLFlBQUo7QUFDQSxVQUFJQyxV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O0FBQzlDOUIsY0FBUSxDQUFDa0IsYUFBVCxDQUF1QixPQUF2QixFQUFnQ3lCLEtBQWhDLENBQXNDQyxPQUF0QyxHQUFnRCxNQUFoRDtBQUNBNUMsY0FBUSxDQUFDa0IsYUFBVCxDQUF1QixPQUF2QixFQUFnQ3lCLEtBQWhDLENBQXNDQyxPQUF0QyxHQUFnRCxNQUFoRDtBQUNILEtBSEQsTUFJSyxJQUFJdkIsTUFBTSxDQUFDYSxPQUFQLENBQWUsYUFBZixDQUFKLEVBQWtDO0FBQ25DbEMsY0FBUSxDQUFDa0IsYUFBVCxDQUF1QixPQUF2QixFQUFnQ3lCLEtBQWhDLENBQXNDQyxPQUF0QyxHQUFnRCxNQUFoRDtBQUNBNUMsY0FBUSxDQUFDa0IsYUFBVCxDQUF1QixPQUF2QixFQUFnQ3lCLEtBQWhDLENBQXNDQyxPQUF0QyxHQUFnRCxPQUFoRDtBQUNIO0FBQ0osR0FwQkQ7QUF1QkgsQ0F2SEQiLCJmaWxlIjoiLi9hcHAvc3RhdGljL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxpc3RzV2l0aE5lc3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5lc3RlZF0nKVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlQ2xhc3MoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpcGVNZW51KCkge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcblxuICAgICAgICAgICAgbGV0IGluaXRpYWxQb2ludDtcbiAgICAgICAgICAgIGxldCBmaW5hbFBvaW50O1xuICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUG9pbnQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZmluYWxQb2ludCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IHhBYnMgPSBNYXRoLmFicyhpbml0aWFsUG9pbnQucGFnZVggLSBmaW5hbFBvaW50LnBhZ2VYKTtcbiAgICAgICAgICAgICAgICBsZXQgeUFicyA9IE1hdGguYWJzKGluaXRpYWxQb2ludC5wYWdlWSAtIGZpbmFsUG9pbnQucGFnZVkpO1xuICAgICAgICAgICAgICAgIGlmICgoeEFicyA+IDIwIHx8IHlBYnMgPiAyMCkgJiYgKHhBYnMgPiB5QWJzKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXBlTWVudSgpO1xuXG4gICAgbGlzdHNXaXRoTmVzdGVkLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICBpZih0YXJnZXQudGFnTmFtZSA9PSAnTEknKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpdGxlXScpO1xuICAgICAgICAgICAgICAgIGlmKHRpdGxlLnRhZ05hbWUgPT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGxpc3QuaGFzQXR0cmlidXRlKCdkYXRhLW5lc3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlQ2xhc3MobGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJyk7XG5cbiAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2Nsb3NlJykpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmVDbGFzcyhtb2RhbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVscyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRlXScpO1xuXG5cbiAgICAgICAgICAgIHZhbGlkYXRlRWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dEJsb2NrID0gZWwuY2xvc2VzdCgnLmlucHV0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZWwudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0QmxvY2suY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgZXJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihpbnB1dEJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZUNsYXNzKG1vZGFsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGFuaycpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlTWVudSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgYnRuID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1vZGFsXScpO1xuICAgICAgICBpZihidG4pIHtcbiAgICAgICAgICAgIGlmKGJ0bi5kYXRhc2V0Lm1vZGFsID09ICdtb2RhbF9hZGQnKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX2FkZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYnRuLmRhdGFzZXQubW9kYWwgPT0gJ21vZGFsX2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX2VkaXQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLXRhc2tfX3RpdGxlJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJykuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLnRhc2tfX2JhY2snKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiBcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/static/js/index.js\n");

/***/ })

/******/ });