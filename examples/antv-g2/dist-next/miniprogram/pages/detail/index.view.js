(function(win, __appCode__, PAGE_PATH, PAGE_CSS){ 
 /* sourceFile: pages/detail/index */
PAGE_PATH = "pages/detail/index";
PAGE_CSS = __appCode__[PAGE_PATH + '.css'];
PAGE_CSS({ prefix: '', host: 'pages/detail/index' });
win.ast = __appCode__[PAGE_PATH + '.xml'];
win.astNamespace = '';
win.astConfigPath = PAGE_PATH + '.json';
})(window, __appCode__);