(function(win, __appCode__, PAGE_PATH, PAGE_CSS){ 
 /* sourceFile: pages/home/index */
PAGE_PATH = "pages/home/index";
PAGE_CSS = __appCode__[PAGE_PATH + '.css'];
PAGE_CSS({ prefix: '', host: 'pages/home/index' });
win.ast = __appCode__[PAGE_PATH + '.xml'];
win.astNamespace = '';
win.astConfigPath = PAGE_PATH + '.json';
})(window, __appCode__);