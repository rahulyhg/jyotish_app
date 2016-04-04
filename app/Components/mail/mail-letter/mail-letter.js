import angular from 'angular';
import lettertmpl from './mail-letter.html';
import mailJob from '../mail.service/mail.api';

export class mailLetter {

	constructor(mailJob,$scope) {
		
		this._mailJob = mailJob;
		console.log(this.params, this.mm)
		// this.params = $scope.mm;
		console.log(this.params, this.mm)		

	}

	send () {
		console.log(this.params);
	}

};

let mailComponent = {
	bindings:{
		params:'=ngModel'
	},
	template: lettertmpl,
	controller: mailLetter
};

export default angular.module('component.letter', [])
	.component('letter', mailComponent)
	.name
