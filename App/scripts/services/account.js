define('services/account',
    ['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";

        function listExternalAccount() {
            var promize = transport.request('POST',
                configuration.urls.listExternalAccount
            );
            return promize;
        }

        function removeAccount(provider, providerUserId) {
            var promize = transport.request('POST',
                configuration.urls.removeAccount,
                {
                    provider: provider,
                    providerUserId: providerUserId
                }
            );
            return promize;
        }

        var service = {
            listExternalAccount: listExternalAccount,
            removeAccount: removeAccount
        };
        return service;
    }
);

