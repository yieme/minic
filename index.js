/** Minimal JSONIC
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     minic
 */
 (function() {
  'use strict';
  /** Minic
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */

   var jsonic    = require('jsonic');
   var minicKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'.split(''); // supported single character keys

  function parse(str) {
    if ('string' !== typeof str) {
      throw new Error('String expected in minic parse, but encountered ' + typeof str);
    }
    var fields = str.split(',');
    var changed = false;
    for (var i = fields.length - 1; i >= 0; i--) {
      var field = fields[i];
      if (field.indexOf(':') < 0) {
        fields[i] = field.substr(0,1) + ':' + field.substr(1);
        changed = true;
      }
    }
    if (changed) {
      str = fields.join(',');
    }
    return jsonic(str);
  }

  function stringify(obj) {
    var str = jsonic.stringify(obj);
    for (var i = minicKeys.length - 1; i >= 0; i--) {
      var replace = minicKeys[i];
      var search  = replace+':';
      str = str.replace(','+search, ','+replace).replace('{'+search, '{'+replace);
    }
    if (str.substr(0,1) == '{') {
      str = str.substr(1, str.length-2);
    }
    return str;
  }

  var minic = {
    parse:     parse,
    stringify: stringify
  }

  module.exports = minic
})();
