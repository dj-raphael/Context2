var sharedConfigModule = sharedConfig(),
    configModule = config(sharedConfigModule),
    browserExtensionModule = browserExtension(configModule, window),
    commonModule = common(configModule, navigator, window),
    analyzerModule = analyzer(configModule, commonModule),
    panelSharedModule = panelShared(configModule, localStorage, document),
    panelResizerModule = panelResizer(configModule, commonModule, panelSharedModule, document, window),
    dataLoaderModule = dataLoader(configModule, commonModule, localStorage),
    frameLoaderModule = frameLoader(configModule, commonModule, dataLoaderModule, analyzerModule, document, navigator, window),
    panelModule = panel(configModule, commonModule, panelSharedModule, panelResizerModule, dataLoaderModule, frameLoaderModule, document),
    embeddedModule = embedded(configModule, commonModule, frameLoaderModule, document),
    appLoaderModule = appLoader(configModule, panelModule, embeddedModule, browserExtensionModule);

init(configModule, commonModule, appLoaderModule, window);

function init(config, common, appLoader, window) {
    if (window.top !== window.self || window.CONTEXT_PANEL) return;
    window.CONTEXT_PANEL = true;
    if (typeof window.initContext2 === 'function') {
        var initOptions = window.initContext2();
        config.theme = initOptions.theme || config.theme;
        config.container = initOptions.container || config.container;
        config.method = initOptions.method || config.method;
        config.height = initOptions.height || config.height;
        config.language = initOptions.language || config.language;
        config.position = initOptions.position || config.position;
        config.marginTop = initOptions.marginTop || config.marginTop;
        config.marginBottom = initOptions.marginBottom || config.marginBottom;
        config.content = initOptions.content || config.content;
        config.mobilePosition = initOptions.mobilePosition || config.mobilePosition;
        config.mobileMarginTop = initOptions.mobileMarginTop || config.mobileMarginTop;
        config.mobileMarginBottom = initOptions.mobileMarginBottom || config.mobileMarginBottom;
        config.mobileContent = initOptions.mobileContent || config.mobileContent;
    }
    appLoader.init();
}