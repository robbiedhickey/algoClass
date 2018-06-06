const reverse = require('./reverse');

describe('reverse', () => {
  test('should reverse string', () => {
    let result = reverse('abcd');
    expect(result).toEqual('dcba');
  });
});
