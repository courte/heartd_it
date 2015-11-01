/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    css: {
      vendor: [
        "vendor/css/normalize.css",
        "vendor/css/foundation.css",
        "vendor/css/**/*.css"
      ]
    },
    js: {
      vendor: [
        "vendor/js/underscore.js",
        "vendor/js/modernizr.js",
        "vendor/js/jquery.js",
        "vendor/js/jquery.cookie.js",
        "vendor/js/fastclick.js",
        "vendor/js/foundation.js",
        "vendor/js/**/*.js"
      ]
    }
  };
};
