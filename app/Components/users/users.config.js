routing.$inject = ['$stateProvider', '$urlRouterProvider'];
import UserService from './user.service/user.service';

export default function routing($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/letters');
    $stateProvider
        .state('usersList', {
            // parent: 'mail',
            url: '/usersList',
            template: '<user-list users="$ctrl.users"></user-list>',
            controllerAs: '$ctrl',
            resolve: {
                updateUsers: function(UserService) {

                    return UserService.RESTget()
                        .then(response => UserService.updResponse(response.data))
                        .catch(e => {
                            console.log(e);
                            return {}
                        });

                }
            },
            controller: function(updateUsers) {
                console.log(updateUsers);
                this.users = updateUsers;
                // $stateParams.mails = this.mails;
                // console.log('privet', $stateParams,this.mails);
            }
        })
        .state('userOpen', {
            // parent: 'mail',
            url: '/userList:id',
            template: '<mail-list box-id="$ctrl.boxId"></mail-list>',
            controller: function($stateParams) {
                this.boxId = $stateParams.boxId;
            },
            controllerAs: '$ctrl'
        })
}

// var states = {

// }
