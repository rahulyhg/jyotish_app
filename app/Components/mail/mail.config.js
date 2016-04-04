routing.$inject = ['$stateProvider', '$urlRouterProvider'];
import mailJob from './mail.service/mail.api';

export default function routing($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/letters');
    $stateProvider
        .state('letters', {
            parent: 'mail',
            url: '/letters',
            template: '<mail-list mails = "$ctrl.mails"></mail-list>',
            controllerAs: '$ctrl',
            resolve: {
                updateMails: function(mailJob) {

                    return mailJob.RESTget()
                        .then(response => mailJob.updResponse(response.data)
                        )
                        .catch(e => {
                            console.log(e);
                            return []
                        });
                }
            },
            controller: function(updateMails) {

                this.mails = updateMails;
                // $stateParams.mails = this.mails;
                // console.log('privet', $stateParams,this.mails);
            }
        })
        .state('letterOpen', {
            parent: 'mail',
            url: '/letters/:id',
            template: '<letter></letter>',
            controller: function($stateParams) {
                this.boxId = $stateParams.boxId;
            },
            controllerAs: '$ctrl'
        })
}

// var states = {

// }
