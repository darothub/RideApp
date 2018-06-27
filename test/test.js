var assert = require('assert');
describe('Sting', function() {
  describe('#indexOf()', function() {
    it('should return true when the letter is not present in the string', function() {
      assert.equal("Hello".indexOf("T"), -1);
    });
  });
});
