const request = require('supertest');
const app = require('../index.js');

describe('GET /nonexistentpage', function() {
	it('should respond with 404 Not Found', function(done) {
		request(app)
			.get('/nonexistentpage')
			.expect(404, done);
	});
});

