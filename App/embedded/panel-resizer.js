function panelResizer(config, common, panelShared, document, window) {
    "use strict";
    var panelDragData = null,
        panelWrapper = null;

    return {
        init: init
    };

    function init() {
        panelWrapper = document.getElementById(config.panelWrapperId);
        addWindowOnResizeEvent();
        addPanelDragAndDropEvents();
        preventPanelToggleLabelDrag();
    }

    function preventPanelToggleLabelDrag() {
        document.getElementById(config.panelToggleLabelId).onmousedown = function (e) {
            if (!e) e = event || window.event;
            e.cancelBubble = true;
        };
    }

    function addWindowOnResizeEvent() {
        window.onresize = function () {
            common.addClass(panelWrapper, config.panelResizedClass);
            panelSharedModule.checkPanelMaxSize(panelWrapper);
            common.removeClass(panelWrapper, config.panelResizedClass);
        };
    }

    function prepareForDrag(isDrag) {
        if (isDrag) {
            common.addClass(panelWrapper, config.panelDraggedClass);

            var outerShutter = document.createElement('div');
            outerShutter.id = config.outerShutterId;
            outerShutter.setAttribute('class', config.cleanClass);
            document.body.insertBefore(outerShutter, panelWrapper);

            var innerShutter = document.createElement('div');
            innerShutter.id = config.innerShutterId;
            panelWrapper.appendChild(innerShutter);

            common.setSelectable(document.body, false);
        } else {
            common.removeClass(panelWrapper, config.panelDraggedClass);

            document.getElementById(config.outerShutterId).remove();
            document.getElementById(config.innerShutterId).remove();

            common.setSelectable(document.body, true);
        }
    }

    function panelStartDrag(e) {
        var panelWidth = panelWrapper.offsetWidth;
        if (!panelDragData) {
            e = e || event;
            panelDragData = {
                x: e.clientX,
                startwidth: panelWidth
            };

            prepareForDrag(true);
        };
    }

    function panelDrag(e) {
        if (panelDragData) {
            e = e || event;
            panelWrapper.style.width = panelDragData.startwidth - (e.clientX - panelDragData.x) - config.panelBorderWidth + 'px';
            panelSharedModule.checkPanelMaxSize(panelWrapper);
        }
    }

    function panelStopDrag(e) {
        if (panelDragData) {
            e = e || event;
            panelWrapper.style.width = panelDragData.startwidth - (e.clientX - panelDragData.x) - config.panelBorderWidth + 'px';
            panelSharedModule.checkPanelMaxSize(panelWrapper);
            panelDragData = null;

            prepareForDrag(false);

            panelShared.savePanelWrapperWidth(panelWrapper);
        }
    }

    function addPanelDragAndDropEvents() {
        panelWrapper.addEventListener('mousedown', panelStartDrag, false);
        panelWrapper.addEventListener('mouseup', panelStopDrag, false);
        panelWrapper.addEventListener('mousemove', panelDrag, false);

        document.body.addEventListener('mousemove', panelDrag, false);
        document.body.addEventListener('mouseup', panelStopDrag, false);
    }
}