(function () {
    'use strict';
    angular
        .module('app')
        .service('tabsViewService', tabsViewService);

    tabsViewService.$inject = [
        'wikiModeEnum',
        'commentsTabsEnum'
    ];

    function tabsViewService(wikiModeEnum, commentsTabsEnum) {
        this.setTabsVisibility = setTabsVisibility;
        this.setShowWiki = setShowWiki;
        this.setShowFaq = setShowFaq;

        function setTabsVisibility(tabsModel, faqListModel, wikiModel) {
            tabsModel.showFaq = faqListModel.list.length !== 0;
            tabsModel.showWiki = wikiModel.viewMode !== wikiModeEnum.none;
            if ((!tabsModel.showFaq && tabsModel.active === commentsTabsEnum.faq) || (!tabsModel.showWiki && tabsModel.active === commentsTabsEnum.wiki)) {
                tabsModel.active = commentsTabsEnum.discussion;
            }
        }

        function setShowWiki(tabsModel) {
            tabsModel.active = commentsTabsEnum.wiki;
            tabsModel.showWiki = true;
        }

        function setShowFaq(tabsModel) {
            tabsModel.active = commentsTabsEnum.faq;
            tabsModel.showFaq = true;
        }
    }
})();