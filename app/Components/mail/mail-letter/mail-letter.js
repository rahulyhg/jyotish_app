import angular from 'angular';
import lettertmpl from './mail-letter.html';
import mailJob from '../mail.service/mail.api';
import ApiGenerator from '../../service/ObjectApi';

export class mailLetter {

	constructor(mailJob,ApiGenerator) {
		this._mailJob = mailJob;
		this._ApiGenerator = ApiGenerator;
	}

	send () {
		this._mailJob.RESTpost(this._ApiGenerator(this.params));
	}

}

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
