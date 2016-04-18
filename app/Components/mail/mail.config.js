routing.$inject = ['$stateProvider', '$urlRouterProvider'];
import mailJob from './mail.service/mail.api';
// import ApiGenerator from '../service/ObjectApi';

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
                      .then(response => mailJob.updResponse(response.data))
                      .catch(e => {
                          console.log(e);
                          return [];
                        });
                }
            },
          controller: function(updateMails) {
              this.mails = updateMails;
              // sessionStorage.mails = JSON.stringify(this.mails);
            }
        })
      .state('letterOpen', {
          parent: 'mail',
          url: '/letters/:idLetter',
          template: '<letter ng-model=$ctrl.params></letter>',
          resolve: {
              upd: function(mailJob, $stateParams) {
                  console.log($stateParams);
                  if ($stateParams) {
                    return mailJob.RESTgetOne($stateParams.idLetter)
                        .then(response => res)
                        .catch(e => {
                            //TODO
                            console.log('Not Found!', e);
                            return {};
                          });
                  }
                  return {};
                }
            },
          controller: function(upd) {
              this.ngModel = upd;
            },
          controllerAs: '$ctrl'
        });
}
