
describe("service $http", function() {
	let UserService,
		$httpBackend,
		mockUsers = [{name : 'Bob'}],
		user = 'Bob';

		beforeEach(inject(function(_UserService_,_$httpBackend_){
			UserService = _UserService_;
			$httpBackend = _$httpBackend_;

			$httpBackend.whenGet('/users').respond(mockUsers);
		}));


		it('it should return user', function(done) {
			UserService.getOne(id).then(function(user){
				expect(user).toBe(user);
				done()
			});

			$httpBackend.flush();
		})
})