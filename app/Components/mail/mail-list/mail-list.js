import tmpl from './mail-list.html';
import mailJob from '../mail.service/mail.api';
import angular from 'angular';

export class controller {

    constructor(mailJob, $stateParams) {
        let [status, unread] = [false, false];

        this.da = function(letter) {
            letter.status != letter.status;
        };
        this._mailJob = mailJob;
        console.log(this._mailJob)
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

        this.del = UID => this._mailJob.RESTdelete(UID)
            // console.log(...arguments)
        
    }

    // this.unreadCounter = this.mails.filter(x=>x.inBox == this.active);
}

// console.dir(controller)

let MailList = {
    template: tmpl,
    bindings: {
        active: '=',
        sent: '&',
        mails: '='
    },
    controller: controller
}


export default angular.module('component.mail', [])
    .component('mailList', MailList)
    .name
