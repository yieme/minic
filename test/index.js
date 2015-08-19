var expect = require('chai').expect,
    minic

describe('minic', function() {
  it('should load', function(done) {
    minic = require('..')
    done()
  })

  var expected = {a:'day', i: 'live'};
  var expectedString = JSON.stringify(expected);
  it('should equal ' + expectedString, function(done) {
    var test = minic.parse('aday,ilive')
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString)
    done()
  })

  var expectedString2 = 'aday,ilive';
  it('should equal ' + expectedString2, function(done) {
    var test = minic.stringify(expected);
    expect(test).to.equal(expectedString2)
    done()
  })

  var expected2 = {a:'comma, test'}
  var expectedString3 = 'acomma~`test';
  it('should equal ' + expectedString3, function(done) {
    var test = minic.stringify(expected2);
    expect(test).to.equal(expectedString3)
    done()
  })

  var expectedString4 = JSON.stringify(expected2);
  it('should equal ' + expectedString4, function(done) {
    var test = minic.parse(expectedString3);
    expect(JSON.stringify(test)).to.equal(expectedString4)
    done()
  })

})
