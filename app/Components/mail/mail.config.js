routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('letter', {
            url: '/letter',
            template: '<mails active=$ctrl.active ng-click=$ctrl.sent()></mails>',
            controller: function($stateParams) {
                this.active = $stateParams.active;
            },
            controllerAs: '$ctrl'
        })
        .state('letterOpen', {
            parent: 'letter',
            url: '/:letterId',
            template: '<mail-list box-id="$ctrl.boxId"></mail-list>',
            controller: function($stateParams) {
                this.boxId = $stateParams.boxId;
            },
            controllerAs: '$ctrl'
        })
}

// var states = {

// }
