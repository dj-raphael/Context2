function panelShared(config, localStorage, document) {
    "use striuct";
    return {
        savePanelWrapperWidth: savePanelWrapperWidth,
        getPanelWrapperWidth: getPanelWrapperWidth,
        checkPanelMaxSize: checkPanelMaxSize
    };

    function savePanelWrapperWidth(panelWrapper) {
        localStorage[config.panelWidthLocalStorageKey] = panelWrapper.offsetWidth / document.documentElement.clientWidth;
    }

    function getPanelWrapperWidth() {
        var storedWidth = localStorage.getItem(config.panelWidthLocalStorageKey);
        return (storedWidth == null ? config.defaultPanelWidth : storedWidth) * document.documentElement.clientWidth;
    }

    function checkPanelMaxSize(panelWrapper) {
        var panelWidth = panelWrapper.offsetWidth;
        if (panelWidth > document.documentElement.clientWidth - config.openPanelButtonWidth) {
            panelWrapper.style.width = document.documentElement.clientWidth - config.openPanelButtonWidth + 'px';
            panelWidth = panelWrapper.offsetWidth;
        }
        panelWrapper.style.right = (-panelWidth - config.panelBorderWidth) + 'px';
    }
}