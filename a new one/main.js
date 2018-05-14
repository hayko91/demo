'use strict';

var script = document.createElement('script');  
script.src = 'http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
document.body.appendChild(script);

document.write('hello');

