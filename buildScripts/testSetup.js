//this file isn't transpiled, so must use CommonJS and ES5.

//Register babel to transpile before our tests run.
require('@babel/register')();

//Disable webpack features that Mocha doesn't understand. The css we imported in index.js
require.extensions['.css'] = function(){};
