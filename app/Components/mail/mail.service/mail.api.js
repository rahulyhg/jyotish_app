import angular from 'angular';

class MailJob {
    
    constructor($http) {
        this._http = $http;      
    }

    RESTpost(params) {      
        let req = {
            method: 'POST',
            url: 'https://jyotish.gift/api/mail/create/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: JSON.stringify(params)
        };

        return this._http.post(req.url,req.data)
    }

    RESTget() {
        return this._http.get('https://jyotish.gift/api/mail/show/')
    }

    RESTgetOne(UID) {
        return this._http.get('https://jyotish.gift/api/mail/'+UID)
    }

    RESTdelete(UID) {
        return this._http.delete('https://jyotish.gift/api/mail/del/'+UID)
    }

    updRequest(params, options) {
       //To, Subject, textLetter
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
