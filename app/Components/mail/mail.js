import angular from 'angular';
import uirouter from 'angular-ui-router';

import mailJob from './mail.service/mail.api'
import routing from './mail.config';
import letterConstructor from './mail.service/letter.constructor'

import mailNav from './mail-nav/mail-nav';
import mailBars from './mail-groups/mail-groups';
import mailLists from './mail-list/mail-list';
import mailLetter from './mail-letter/mail-letter';



 // console.dir(angular.module('mail.home', [uirouter, mailLists]));

export default angular.module('mail.home', [uirouter, mailJob, letterConstructor, mailLists, mailLetter])
	.config(routing)
	// .service('mailJob',mailJob)
	// .component('mail', mailNav)	
	.component('navSection', mailNav())
	.component('mailGroups', mailBars())
	// .component('mailLists',  mailLists())
	.name;