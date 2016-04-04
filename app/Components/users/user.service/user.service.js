// MailJob.$inject = ['$http'];

import angular from 'angular';

class UserService {
	

    constructor($http) {
		this._http = $http;
	}

	RESTpost() {

    };

	RESTget() {
		return this._http.get('https://jyotish.gift/auth/login/register/')
	}

	updResponse (query) {
        // let month = ['January', 'February', 'March', 'April',
        //     'May', 'June', 'July', 'August',
        //     'September', 'October', 'November', 'December'
        // ];

        return query
        //     .map(x => Object.keys(x)
        //         .reduce((a, b) => {

        //             if (b == 'textLetter' && b.length) {
        //                 a[b] = x[b].slice(0, 5) + '...'
        //             } else if (b == 'created') {
        //                 a[b] = month[1 + +x[b].slice(5, 7)] + ' ' + x[b].slice(8, 10)
        //             } else {
        //                 a[b] = x[b]
        //             }
        //             return a
        //         }, {})
        //     )
    }
    
}

export default angular.module('services.users', [])
	.service('mailJob', UserService)
	.name 