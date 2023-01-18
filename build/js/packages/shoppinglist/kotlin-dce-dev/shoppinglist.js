(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'shoppinglist'.");
    }
    root.shoppinglist = factory(typeof shoppinglist === 'undefined' ? {} : shoppinglist, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main() {
    var tmp$;
    (tmp$ = document.getElementById('root')) != null ? (tmp$.innerHTML = 'Hello, Kotlin/JS!') : null;
  }
  _.main = main;
  main();
  Kotlin.defineModule('shoppinglist', _);
  return _;
}));

//# sourceMappingURL=shoppinglist.js.map
