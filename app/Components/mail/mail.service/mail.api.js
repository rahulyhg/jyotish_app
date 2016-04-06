// MailJob.$inject = ['$http'];

import angular from 'angular';

class MailJob {
    
    constructor($http) {
        this._http = $http;
        // this.url = 
    }

    RESTpost(params) {
        let req = {
            method: 'POST',
            url: 'https://jyotish.gift/api/mail/create/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }

        return this._http(req)
    }

    RESTget() {
        return this._http.get('https://jyotish.gift/api/mail/show/')
    }

    RESTdelete(UID) {
        return this._http.delete('https://jyotish.gift/api/mail/del/'+UID)
    }

    updRequest(params, options) {
        // params.

        return params;
    }

    updResponse(query) {
        if(!query.length) return;
        let month = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        return query
            .map(x => Object.keys(x)
                .reduce((a, b) => {

                    if (b == 'textLetter' && b.length) {
                        a[b] = x[b].slice(0, 5) + '...'
                    } else if (b == 'created') {
                        a[b] = month[1 + +x[b].slice(5, 7)] + ' ' + x[b].slice(8, 10)
                    } else {
                        a[b] = x[b]
                    }
                    return a
                }, {})
            )
    }

}

export default angular.module('services.mail-job', [])
    .service('mailJob', MailJob)
    .name
