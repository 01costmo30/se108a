var practice = require('./lodash-practice')
var assert = require('assert')
var expect = require('chai').expect

describe('simulatelodash', function () {
    describe('drop', function () {
        it('should drop first element when d undifined', function () {
            assert.deepEqual(practice.drop([1,2,3]), [2,3])
        })
        it('should drop 2 element when d is 2', function () {
            assert.deepEqual(practice.drop([1,2,3], 2), [3])
        })
        it('should drop 0 element when d is 0', function () {
            assert.deepEqual(practice.drop([1,2,3], 0), [1,2,3])
        })
    })
    describe('compact', function () {
        it('should desplay none 0 element in array', function () {
            assert.deepEqual(practice.compact([0, 1, false, null, undefined, 2, '', 3, NaN]), [1,2,3])
        })
    })
    describe('head', function () {
        it('should desplay first element of the array', function () {
            expect(practice.head([2,1,3])).to.equal(2)
        })
    })
})
