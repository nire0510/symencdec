const encdec = require('../dist');

describe('encrypt function', () => {
  test('should have an encrypt function', () => {
    expect(typeof encdec.encrypt === 'function').toBeTruthy();
  });
});

describe('decrypt function', () => {
  test('should have a decrypt function', () => {
    expect(typeof encdec.decrypt === 'function').toBeTruthy();
  });

  test('should decrypt input correctly', () => {
    const key = '1234567890';

    expect(encdec.decrypt('YklLJ0QVOC+0y6Gd3w9kmGyhqZVp/Mqgbxz651ssexxV2eNesWEqn8hhAATN3TfKN0IxmdmBc9QsQt1INJR33bLWjLuW9HH1zKCm6Atp7vCiopMCsqZkdCYEFbBjLLXextYGTKZxACrEHAdV0sIpLrOz3cpj3ySnIfBlg3wYCpdeC7F8VP8CLg6gX0xKW04heH+raoFetuhfBycWthaVIw==', key))
      .toBe('plan1##planname1##20180101##20180102##3##1##1##1##1##0##10000##facility1##facilityname1##area1##areaname1##1##1##JPY##1');

    expect(
      encdec.decrypt(
        encdec.encrypt('plan1##planname1##20180101##20180102##3##1##1##1##1##0##10000##facility1##facilityname1##area1##areaname1##1##1##JPY##1', key),
        key))
      .toBe('plan1##planname1##20180101##20180102##3##1##1##1##1##0##10000##facility1##facilityname1##area1##areaname1##1##1##JPY##1');
  });
});
