!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("PlyrAds",["exports"],e):e(t.PlyrAds={})}(this,function(t){"use strict";!function(){function t(t){this.value=t}function e(e){function n(o,i){try{var u=e[o](i),a=u.value;a instanceof t?Promise.resolve(a.value).then(function(t){n("next",t)},function(t){n("throw",t)}):r(u.done?"return":"normal",u.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(t,e){return new Promise(function(r,u){var a={key:t,arg:e,resolve:r,reject:u,next:null};i?i=i.next=a:(o=i=a,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}();var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n={getStartEvents:function(){var t=["click"];return(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i))&&(t=["touchstart","touchend","touchmove"]),t},mergeConfig:function(t,n){return e({},t,n)}};t.utils=n,Object.defineProperty(t,"__esModule",{value:!0})});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzIjpbInNyYy9qcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IHV0aWxzID0ge1xuXG4gICAgLy8gRXZlbnRzIGFyZSBkaWZmZXJlbnQgb24gdmFyaW91cyBkZXZpY2VzLiBXZSBkZXQgdGhlIGNvcnJlY3QgZXZlbnRzLCBiYXNlZCBvbiB1c2VyQWdlbnQuXG4gICAgZ2V0U3RhcnRFdmVudHM6ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXJ0RXZlbnRzID0gWydjbGljayddO1xuICAgICAgICBcbiAgICAgICAgLy8gRm9yIG1vYmlsZSB1c2VycyB0aGUgc3RhcnQgZXZlbnQgd2lsbCBiZSBvbmUgb2ZcbiAgICAgICAgLy8gdG91Y2hzdGFydCwgdG91Y2hlbmQgYW5kIHRvdWNobW92ZS5cbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fFxuICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fFxuICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSkge1xuICAgICAgICAgICAgc3RhcnRFdmVudHMgPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2hlbmQnLCAndG91Y2htb3ZlJ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZlbnRzO1xuICAgIH0sXG5cbiAgICAvLyBNZXJnZSBkZWZhdWx0cyBhbmQgb3B0aW9ucy5cbiAgICBtZXJnZUNvbmZpZzogKGRlZmF1bHRzLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uZGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuICAgIH1cbn07Il0sIm5hbWVzIjpbInV0aWxzIiwic3RhcnRFdmVudHMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImRlZmF1bHRzIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6InV3Q0FFYUEsa0JBR08sZUFDUkMsR0FBZSxnQkFJZkMsVUFBVUMsVUFBVUMsTUFBTSxZQUMxQkYsVUFBVUMsVUFBVUMsTUFBTSxVQUMxQkYsVUFBVUMsVUFBVUMsTUFBTSxrQkFDWCxhQUFjLFdBQVksY0FFdENILGVBSUUsU0FBQ0ksRUFBVUMsZUFDVEQsRUFBYUMifQ==