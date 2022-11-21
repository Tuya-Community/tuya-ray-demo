(function(win, __appCode__, PAGE_PATH, PAGE_CSS){ 
 /* sourceFile: pages/my/index */
PAGE_PATH = "pages/my/index";
PAGE_CSS = __appCode__[PAGE_PATH + '.css'];
PAGE_CSS({ prefix: '', host: 'pages/my/index' });
win.ast = __appCode__[PAGE_PATH + '.xml'];
win.astNamespace = '';
win.astConfigPath = PAGE_PATH + '.json';
})(window, __appCode__);