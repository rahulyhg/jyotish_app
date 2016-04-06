import angular from 'angular';
import lettertmpl from './mail-letter.html';
import mailJob from '../mail.service/mail.api';

export class mailLetter {

	constructor(mailJob) {		
		this._mailJob = mailJob;	
	}

	
	send () {
		this._mailJob.RESTpost()
	}

};

let mailComponent = {
	bindings:{
		params:'=?ngModel'
	},
	template: lettertmpl,
	controller: mailLetter
};

export default angular.module('component.letter', [])
	.component('letter', mailComponent)
	.name
