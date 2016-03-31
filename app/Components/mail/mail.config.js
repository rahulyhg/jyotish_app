routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/letters');
    $stateProvider
        .state('letters', {
            parent: 'mail',
            url: '/letters',
            template: '<mail-list></mail-list>',
            controllerAs: '$ctrl'
        })
        .state('letterOpen', {
            parent: 'mail',
            url: '/letter:id',
            template: '<mail-list box-id="$ctrl.boxId"></mail-list>',
            controller: function($stateParams) {
                this.boxId = $stateParams.boxId;
            },
            controllerAs: '$ctrl'
        })
}

// var states = {

// }
