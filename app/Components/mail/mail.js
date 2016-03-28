import angular from 'angular';
import uirouter from 'angular-ui-router';

import mailJob from './mail.service/mail.api'
import routing from './mail.config';

import mailNav from './mail-nav/mail-nav';
import mailBars from './mail-groups/mail-groups';
import mailLists from './mail-list/mail-list';

// console.dir(uirouter);

export default angular.module('mail.home', [uirouter, mailJob])
	.config(routing)	
	// .component('mail', mailNav)
	.service(mailJob)
	.component('navSection', mailNav())
	.component('mailGroups', mailBars())
	.component('mailLists',  mailLists())
	.name;