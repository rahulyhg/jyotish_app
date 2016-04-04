import mailtmpl from './Components/mail/mail.html';
import advicetmpl from './Components/advice/advice.html';
import authtmpl from './Components/auth/auth.html'
import usertmpl from './Components/users/users-list/users-list.html'

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $urlRouterProvider.otherwise('/mail/letters');

    $stateProvider
        .state('mail', {
            url: '/mail',
            template: mailtmpl           
        })
        .state('advice', {
            url: '/advice',
            template: advicetmpl
        })
        .state('auth', {
            url: '/auth',
            template: authtmpl
        })
        .state('natalChart', {
            url: '/chart',
            template: authtmpl
        })        
        .state('profile', {
            url: '/profile',
            template: authtmpl
        })
        .state('users', {
            url: '/users',
            template: usertmpl
        })        

    }
        
// }

    //     // .state('box', {
    //     //   parent: 'mail',
    //     //   url: '/:boxId',
    //     //   template: '<mail-list box-id="$ctrl.boxId"></mail-list>',
    //     //   controller: function($stateParams) {
    //     //     this.boxId = $stateParams.boxId;
    //     //   },
    //     //   controllerAs: '$ctrl'
    //     // })
    //     .state('users', {
    //         url: '/users',
    //         template: '<user-cards></user-cards>'
    //     });


// var states = {

// }
