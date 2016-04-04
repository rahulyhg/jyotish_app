import angular from 'angular';

import tmpl from './users-list.html';

export class controller {
	constructor(){}
}

let userComponent = {
	bindings: {
		usersList:'=users'
	},
	template: tmpl,
	controller: controller
}

export default angular.module('component.user-list', [])
	.component('userList', userComponent)
	.name
