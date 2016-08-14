function panel(config, common, panelShared, panelResizer, dataLoader, frameLoader, document) {
    "use strict";
    return {
        init: init
    }

    function init() {
        dataLoader.getThreadsCount(function (threadCount) {            
            var panelWrapper = document.createElement('div'),
            panelToggleCheckBox = document.createElement('input'),
            panelToggleLabel = document.createElement('label'),
            panelTitleSpan = document.createElement('span'),
            panelArrowDiv = document.createElement('div'),
            panelIcon = document.createElement('i'),
            isMobile = common.mobileAndTabletcheck(),
            labelTitle = isMobile ? config.mobileContent : config.content,
            hasTitle = labelTitle != null && labelTitle != '',
            container = !!config.container ? document.querySelector(config.container) : document.body;

            if (isMobile) {
                panelToggleLabel.style.top = config.mobilePosition === 'top' ? '0' : config.mobilePosition === 'middle' ? '40%' : 'auto';
                panelToggleLabel.style.bottom = config.mobilePosition === 'bottom' ? '0' : 'auto';
                panelToggleLabel.style.marginTop = config.mobileMarginTop;
                panelToggleLabel.style.marginBottom = config.mobileMarginBottom;
            } else {
                panelToggleLabel.style.top = config.position === 'top' ? '0' : config.position === 'middle' ? '40%' : 'auto';
                panelToggleLabel.style.bottom = config.position === 'bottom' ? '0' : 'auto';
                panelToggleLabel.style.marginTop = config.marginTop;
                panelToggleLabel.style.marginBottom = config.marginBottom;
            }

            panelWrapper.id = config.panelWrapperId;
            setPanelWrapperPosition(panelWrapper);

            panelToggleCheckBox.id = config.panelToggleCheckBoxId;
            panelToggleCheckBox.type = 'checkbox';

            panelToggleLabel.id = config.panelToggleLabelId;
            panelToggleLabel.setAttribute('for', config.panelToggleCheckBoxId);

            panelArrowDiv.innerHTML = '&#9668';

            panelIcon.style.backgroundImage = 'url("' + config.context2Url + 'app/images/icon.png")';
            if (threadCount != null) {
                var panelThreadCount = document.createElement('b');
                panelThreadCount.innerHTML = '+' + threadCount;
                panelToggleLabel.appendChild(panelThreadCount);
            }

            panelToggleLabel.appendChild(panelIcon);

            if (hasTitle) {
                panelTitleSpan.innerHTML = labelTitle;
                panelToggleLabel.appendChild(panelTitleSpan);
            }
            
            panelToggleLabel.appendChild(panelArrowDiv);            

            panelWrapper.appendChild(panelToggleLabel);
            container.appendChild(panelToggleCheckBox);
            container.appendChild(panelWrapper);
            common.addClass(panelWrapper, config.cleanClass);

            if (hasTitle) {
                panelTitleSpan.style.marginTop = (panelTitleSpan.scrollWidth - 16) + 'px';
            }
            if (!isMobile) {
                panelResizer.init();
            }
            panelToggleLabel.addEventListener('click', function () {
                var isFirstTimeOpen = !panelToggleCheckBox.checked && document.getElementById(config.frameId) == null;
                if (isFirstTimeOpen) {
                    var frame = document.createElement('iframe');
                    frameLoader.loadFrame(frame, panelWrapper, isMobile, function () {
                    }, function () {                                                
                        panelToggleCheckBox.checked = false;
                        setPanelWrapperPosition(panelWrapper);
                    });
                }

                if (isMobile) {
                    panelWrapper.style.width = '100%';
                }
            });
        });
    }

    function setPanelWrapperPosition(panelWrapper) {
        var panelWidth = panelShared.getPanelWrapperWidth();
        panelWrapper.style.width = panelWidth + 'px';
        panelWrapper.style.right = (-panelWidth - config.panelBorderWidth) + 'px';

    }
}