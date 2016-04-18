routing.$inject = ['$stateProvider', '$urlProvider'];


export default function routing ($stateProvider, $urlProvider){

	$stateProvider
		.state('login', {
			parent:'auth',
			url:'/login',
			template:'<auth></auth>'
		})

}