'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isWav = require('./index');

function check(filename) {
	return isWav(readChunk.sync(filename, 0, 4));
}

it("should detect FLAC from Buffer", function () {
	assert(check('fixture.flac'));
	assert(!check('fixture.wav'));
});
