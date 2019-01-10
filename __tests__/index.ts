/**
 * ts-postcode-validator
 * Unit tests
 * Adapted by @author Scott Jones
 * Original tests written by @author Melwyn Furtado
 */

import test from "ava";
import { validate } from "..";

// Valid postcodes
const validCodes = [
  {
    code: "10014",
    country: "US",
  },
  {
    code: "W6 8DL",
    country: "UK",
  },
  {
    code: "M5P 2N7",
    country: "CA",
  },
  {
    code: "100-0005",
    country: "JP",
  },
  {
    code: "100020",
    country: "INT",
  },
  {
    code: "KFPXWT7D",
    country: "INT",
  },
  {
    code: "91180-560",
    country: "INT",
  },
  {
    code: "135",
    country: "INT",
  },
  {
    code: "SW1A 0AA",
    country: "UK",
  },
];

validCodes.forEach((code) => {
  test(`validates code: ${code.code} for ${code.country}`, (t) => {
    if (validate(code.code, code.country)) {
      t.pass();
    } else {
      t.fail();
    }
  });
});

// Invalid postcodes
const invalidCodes = [
  {
    code: "!,$^ +@#",
    country: "INT",
  },
  {
    code: "1234567",
    country: "UK",
  },
  {
    code: "M5P@2N7",
    country: "CA",
  },
  {
    code: "100-0005-9088",
    country: "JP",
  },
];

invalidCodes.forEach((code) => {
  test(`invalidates code: ${code.code} for ${code.country}`, (t) => {
    if (validate(code.code, code.country) === false) {
      t.pass();
    } else {
      t.fail();
    }
  });
});
