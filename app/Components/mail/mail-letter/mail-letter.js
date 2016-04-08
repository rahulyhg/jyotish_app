import angular from 'angular';
import lettertmpl from './mail-letter.html';

// console.log(ApiGenerator, mailJob);

export class mailLetter {

	 constructor(mailJob, letterConsturctor) {
		this._mailJob = mailJob;
		this._letterConstructor = letterConsturctor;
		// 
		// this._ApiGenerator = ApiGenerator;
	}

	send () {
		console.dir(this._letterConstructor.generate(this.params));
		this._mailJob.RESTpost(this._letterConstructor.generate(this.params));
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
