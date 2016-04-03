import tmpl from './mail-list.html';
import mailJob from '../mail.service/mail.api';
import angular from 'angular';

export class controller {

    constructor(mailJob) {
        let [status, unread] = [false, false];

        this._mailJob = mailJob;
        this._mailJob.RESTget().then((response) => {

            this.resBody = response.data;
            this.mails = this.updResponse(this.resBody);

        }).catch(e => console.log(e));       

        this.da = function(letter) {
            letter.status != letter.status;
        };
        this.createFilter = function() {
            if (unread) {
                unread = false;
                this.mails = this.mails;
            } else {
                this.mails = this.mails.filter(a => a.status);
                unread = true;
            }
        };
        this.filter = (status) => status = 'All' ? '' : status;
    }


    updResponse (query) {
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
    // this.unreadCounter = this.mails.filter(x=>x.inBox == this.active);
}

console.dir(controller)

var MailList = {
    template: tmpl,
    bindings: {
        active: '=',
        sent: '&'
    },
    controller: controller
}


export default angular.module('component.mail', [])
    .component('mailList', MailList)
    .name
