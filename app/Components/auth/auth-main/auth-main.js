

class Component {
	constructor() {}

}


let authComponent = {
	bindings: {
		control:'=ngModel'
	},
	controller:Component,
	template: require('../pages/auth.html')
};

export default authComponent
