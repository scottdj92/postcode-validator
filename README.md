# ts-postcode-validator

A TS fork of the fantastic [postcode-validator](https://github.com/melwynfurtado/postcode-validator)

Node.js module for parsing and validating postcodes. Country specific validation is supported for most countries including UK, US, Canada, Japan and many others.

**Note:** I haven't tested all combinations of postcodes for the extended country regular expressions. Please be free to raise a PR with increased test coverage for as many countries possible.

## Installation

```javascript
npm install ts-postcode-validator
```

## Usage (ES5)

```javascript
var postcode = require('ts-postcode-validator');
postcode.validate('W85TT', 'UK'); // returns true
postcode.validate('1234567', 'UK'); // returns false

country codes: US, UK, CA, JP, INT(International), etc
```

## Usage (ES6+)
```typescript
import { validate } from "ts-postcode-validator";
validate("W85TT", "UK"); // returns true
validate("1234567", "UK"): // returns false
```

## Testing

Run the unit tests with:
```javascript
yarn test
```


### Built with
* TypeScript
* AVA.js
* Node.js
