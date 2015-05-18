'use strict';

function makeLessVar(name, value) {
  if(typeof value !== 'string' || typeof value !== 'number') {
    // hmm..
  }
  return '@' + name + ':' + value + ';\n';
}

modules.exports = function createPlugin(varsToInject) {
  return {
    install : function(less, pluginManager) {
      pluginManager.addPreProcessor({
        process : function(src, extra) {
          var ignored = extra.imports.contentsIgnoredChars
          ,   filename = extra.fileInfo.filename;

          var injected = Object.keys(this._vars).reduce((out, key) => {
            return out + makeLessVar(key, varsToInject[key]);
          }, '');

          // update offset
          ignored[filename] = (ignored[filename] || 0) + injected.length;

          return injected + src;
        }
      })
    }
  }
};
