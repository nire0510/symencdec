const utils = require('../dist/utils');

describe('hashKey function', () => {
  test('should have a hashKey function', () => {
    expect(typeof utils.hashKey === 'function').toBeTruthy();
  });

  test('hash should be based on sha256 algorithm', () => {
    expect(utils.hashKey('0123456789').toString('hex')).toBe('84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882');
    expect(utils.hashKey('this is a test').toString('hex')).toBe('2e99758548972a8e8822ad47fa1017ff72f06f3ff6a016851f45c398732bc50c');
  });
});

describe('pad & unpad functions', () => {
  test('should have pad & unpad functions', () => {
    expect(typeof utils.pad === 'function').toBeTruthy();
    expect(typeof utils.unpad === 'function').toBeTruthy();
  });

  test('pad function should add trailing repeated characters, unpad should remove them', () => {
    expect(utils.unpad(utils.pad('123456789'))).toBe('123456789');
  });
});
