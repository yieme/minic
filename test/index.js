var expect = require('chai').expect,
    minic

describe('minic', function() {
  it('should load', function(done) {
    minic = require('..')
    done()
  })

  var expected = {a:'day', i: 'live'};
  var expectedString = JSON.stringify(expected);
  it('should eaual ' + expectedString, function(done) {
    var test = minic.parse('aday,ilive')
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString)
    done()
  })

  var expectedString2 = 'aday,ilive';
  it('should eaual ' + expectedString2, function(done) {
    var test = minic.stringify(expected);
    expect(test).to.equal(expectedString2)
    done()
  })
})
