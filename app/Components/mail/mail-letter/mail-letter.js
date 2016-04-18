import angular from 'angular';
import lettertmpl from './mail-letter.html';

// console.log(ApiGenerator, mailJob);

export class mailLetter {

	 constructor(mailJob, letterConsturctor, $state) {
		this._mailJob = mailJob;
		this._letterConstructor = letterConsturctor;
		this._state = $state;
		// 
		// this._ApiGenerator = ApiGenerator;
	}

	send () {		
		this._mailJob.RESTpost(this._letterConstructor.generate(this.params))
			.then(x=>{console.log(x)})
		this._state.go('letters');

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
