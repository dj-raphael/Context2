var require = {
    baseUrl: 'scripts',
    paths: {
        'jquery': 'lib/jquery.min',
        'jquery-ui': 'lib/jquery-ui.min',
        'combobox': 'lib/combobox',
        'validate': 'lib/jquery.validate',
        'showPassword': 'lib/hide-show-password',
        'angular': 'lib/angular.min',
        'angular-route': 'lib/angular-route',
        'select2': 'lib/select2',
        'angular-ui-select2': 'lib/angular-ui-select2',
        'ui-bootstrap': 'lib/ui-bootstrap-tpls-0.9.0.min',
        'ui-tinymce': 'lib/tinymce',
        'tinymce': 'lib/tinymce/tinymce.min',
        'app':'frame/app',
        'tabs': 'frame/tabs',
        'infinite-scroll': 'lib/ng-infinite-scroll.min'
    },
    shim: {
        'jquery-ui': {
            deps: ['jquery']
        },
        'combobox': {
            deps: ['jquery-ui']
        },
        'validate': {
            deps: ['jquery']
        },
        'showPassword': {
            deps: ['jquery']
        },
        'select2': {
            deps: ['jquery']
        },
        'angular-ui-select2': {
            deps: ['select2','angular']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route':
        {
            deps: ['angular']
        },
        'ui-bootstrap':
        {
            deps: ['angular']
        },
        'app':
        {
            deps: ['ui-bootstrap']
        },
        'tabs':
        {
            deps: ['app']
        },
        'ui-tinymce': {
            deps: ['tinymce']
        },
        'infinite-scroll': {
            deps: ['jquery']
        }
    }
};