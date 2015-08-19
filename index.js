/** Minimal JSONIC
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     minic
 */
 (function() {
  'use strict';
  var MinicError = require('make-error')('MinicError')

  /** Minic
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function minicClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = options
    return self
  }



  /** Minic
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function minic(options) {
    return new minicClass(options).value
  }


  module.exports = minic
})();
