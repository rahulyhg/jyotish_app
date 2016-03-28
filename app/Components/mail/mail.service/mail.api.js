// MailJob.$inject = ['$http'];

import angular from 'angular';

class MailJob {
	constructor($http) {
		this._http = $http;
	}
	RESTpost() {}
	RESTget() {
		return this._http.get('https://jyotish.gift/mail/show/')
	}
}

export default angular.module('services.mail-job', [])
	.service('mailJob', MailJob)
	.name
  
