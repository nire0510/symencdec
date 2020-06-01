# symencdec
Symmetric encryption/decryption for NodeJS, based on LINE Travel PHP based implementation.

## Installation
`npm i symencdec --save`

## Usage

```javascript
const symencdec = require('symencdec');

const key = '0123456789';

// encryption:
symencdec.encrypt('plan1##planname1##20180101##20180102##3##1##1##1##1##0##10000##facility1##facilityname1##area1##areaname1##1##1##JPY##1', key);
// -> kaHtLrvzNxgcXy4QNAB0nvEJUe3D5NU24elZzJ9tBOLGGcpagTKR1hOValE8co8ly4hm/vt/nS6neDo4mlI9/8IIzYIFmf4KUIDwoX+yWF8K2XUQGE7kaiZQWTq4N2hzeJx5hr9Z1g3rzxdC4jILElbWCv1VMrND7BnlZC/WwWq9UOhyUIEFxJsZ+u7fmO57

// decryption:
symencdec.decrypt('kaHtLrvzNxgcXy4QNAB0nvEJUe3D5NU24elZzJ9tBOLGGcpagTKR1hOValE8co8ly4hm/vt/nS6neDo4mlI9/8IIzYIFmf4KUIDwoX+yWF8K2XUQGE7kaiZQWTq4N2hzeJx5hr9Z1g3rzxdC4jILElbWCv1VMrND7BnlZC/WwWq9UOhyUIEFxJsZ+u7fmO57', key);
// -> plan1##planname1##20180101##20180102##3##1##1##1##1##0##10000##facility1##facilityname1##area1##areaname1##1##1##JPY##1
```