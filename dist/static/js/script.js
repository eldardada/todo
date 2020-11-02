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

eval("// import 'core-js/features/promise';\nwindow.addEventListener('load', function () {\n  function toggleActiveClass(el) {\n    el.classList.toggle('active');\n  }\n\n  var listsWithNested = document.querySelectorAll('[data-nested]');\n  listsWithNested.forEach(function (list) {\n    list.addEventListener('click', function (e) {\n      var target = e.target;\n\n      if (target.tagName == 'LI') {\n        var title = list.querySelector('[data-title]');\n        title.innerHTML = target.textContent;\n      }\n\n      if (list.hasAttribute('data-nested')) {\n        toggleActiveClass(list);\n      }\n    });\n  });\n\n  if (window.innerWidth <= 720) {\n    var initialPoint;\n    var finalPoint;\n    document.addEventListener('touchstart', function (e) {\n      initialPoint = e.changedTouches[0];\n    }, false);\n    document.addEventListener('touchend', function (e) {\n      finalPoint = e.changedTouches[0];\n      var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);\n      var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);\n\n      if ((xAbs > 20 || yAbs > 20) && xAbs > yAbs) {\n        toggleActiveClass(document.querySelector('.aside'));\n      }\n    }, false);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzL2luZGV4LmpzP2MwM2MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUFjdGl2ZUNsYXNzIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsaXN0c1dpdGhOZXN0ZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJoYXNBdHRyaWJ1dGUiLCJpbm5lcldpZHRoIiwiaW5pdGlhbFBvaW50IiwiZmluYWxQb2ludCIsImNoYW5nZWRUb3VjaGVzIiwieEFicyIsIk1hdGgiLCJhYnMiLCJwYWdlWCIsInlBYnMiLCJwYWdlWSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0FBRXZDLFdBQVNDLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQkEsTUFBRSxDQUFDQyxTQUFILENBQWFDLE1BQWIsQ0FBb0IsUUFBcEI7QUFDSDs7QUFFRCxNQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBeEI7QUFFQUYsaUJBQWUsQ0FBQ0csT0FBaEIsQ0FBd0IsVUFBQUMsSUFBSSxFQUFJO0FBQzVCQSxRQUFJLENBQUNULGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUFVLENBQUMsRUFBSTtBQUNoQyxVQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBakI7O0FBRUEsVUFBR0EsTUFBTSxDQUFDQyxPQUFQLElBQWtCLElBQXJCLEVBQTJCO0FBQ3ZCLFlBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxhQUFMLENBQW1CLGNBQW5CLENBQWQ7QUFDQUQsYUFBSyxDQUFDRSxTQUFOLEdBQWtCSixNQUFNLENBQUNLLFdBQXpCO0FBQ0g7O0FBRUQsVUFBR1AsSUFBSSxDQUFDUSxZQUFMLENBQWtCLGFBQWxCLENBQUgsRUFBcUM7QUFDakNoQix5QkFBaUIsQ0FBQ1EsSUFBRCxDQUFqQjtBQUNIO0FBR0osS0FiRDtBQWNILEdBZkQ7O0FBaUJBLE1BQUdWLE1BQU0sQ0FBQ21CLFVBQVAsSUFBcUIsR0FBeEIsRUFBNkI7QUFFekIsUUFBSUMsWUFBSjtBQUNBLFFBQUlDLFVBQUo7QUFFQWQsWUFBUSxDQUFDTixnQkFBVCxDQUEwQixZQUExQixFQUF3QyxVQUFBVSxDQUFDLEVBQUk7QUFDekNTLGtCQUFZLEdBQUdULENBQUMsQ0FBQ1csY0FBRixDQUFpQixDQUFqQixDQUFmO0FBQ0gsS0FGRCxFQUVHLEtBRkg7QUFJQWYsWUFBUSxDQUFDTixnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFBVSxDQUFDLEVBQUk7QUFDdkNVLGdCQUFVLEdBQUdWLENBQUMsQ0FBQ1csY0FBRixDQUFpQixDQUFqQixDQUFiO0FBQ0EsVUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsWUFBWSxDQUFDTSxLQUFiLEdBQXFCTCxVQUFVLENBQUNLLEtBQXpDLENBQVg7QUFDQSxVQUFJQyxJQUFJLEdBQUdILElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxZQUFZLENBQUNRLEtBQWIsR0FBcUJQLFVBQVUsQ0FBQ08sS0FBekMsQ0FBWDs7QUFDQSxVQUFJLENBQUNMLElBQUksR0FBRyxFQUFQLElBQWFJLElBQUksR0FBRyxFQUFyQixLQUE2QkosSUFBSSxHQUFHSSxJQUF4QyxFQUErQztBQUMzQ3pCLHlCQUFpQixDQUFDSyxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFqQjtBQUNIO0FBQ0osS0FQRCxFQU9HLEtBUEg7QUFRSDtBQUVKLENBNUNEIiwiZmlsZSI6Ii4vYXBwL3N0YXRpYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9wcm9taXNlJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZUNsYXNzKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RzV2l0aE5lc3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5lc3RlZF0nKVxuXG4gICAgbGlzdHNXaXRoTmVzdGVkLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICBpZih0YXJnZXQudGFnTmFtZSA9PSAnTEknKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRpdGxlXScpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbmVzdGVkJykpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmVDbGFzcyhsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3MjApIHtcblxuICAgICAgICBsZXQgaW5pdGlhbFBvaW50O1xuICAgICAgICBsZXQgZmluYWxQb2ludDtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGUgPT4ge1xuICAgICAgICAgICAgaW5pdGlhbFBvaW50ID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xuICAgICAgICAgICAgZmluYWxQb2ludCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBsZXQgeEFicyA9IE1hdGguYWJzKGluaXRpYWxQb2ludC5wYWdlWCAtIGZpbmFsUG9pbnQucGFnZVgpO1xuICAgICAgICAgICAgbGV0IHlBYnMgPSBNYXRoLmFicyhpbml0aWFsUG9pbnQucGFnZVkgLSBmaW5hbFBvaW50LnBhZ2VZKTtcbiAgICAgICAgICAgIGlmICgoeEFicyA+IDIwIHx8IHlBYnMgPiAyMCkgJiYgKHhBYnMgPiB5QWJzKSkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpOyBcbiAgICB9XG4gXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/static/js/index.js\n");

/***/ })

/******/ });