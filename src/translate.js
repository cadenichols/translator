import * as base32 from 'hi-base32';
import ascii85 from 'ascii85';
import md5 from 'md5';
import jsSHA from 'jssha';

// Monkeypatched helper method.
String.prototype.map = function(iterator) {
  // split on chars -> map -> join on spaces
  return this.split('').map(iterator).join(' ');
};

// Helper functions that translate a single character
const charToBinary = char => char.charCodeAt(0).toString(2).padStart(8, 0);
const charToOctal = char => char.charCodeAt(0).toString(8);
const charToDecimal = char => char.charCodeAt(0);
const charToHex = char => char.charCodeAt(0).toString(16).toUpperCase();

// Functions that translate strings
export const toBinary = text => text.map(charToBinary);
export const toOctal = text => text.map(charToOctal);
export const toDecimal = text => text.map(charToDecimal);
export const toHex = text => text.map(charToHex);

export const toBase32 = text => base32.encode(text).replace(/=/g, '');
export const toBase64 = text => btoa(text);
export const toAscii85 = text => ascii85.encode(text).toString();

export const toMd5 = text => md5(text);

export const toSHA256 = text => {
  const shaObj = new jsSHA("SHA-256", "TEXT");
  shaObj.update(text);
  return shaObj.getHash('HEX');
}

export const toSHA512 = text => {
  const shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update(text);
  return shaObj.getHash('HEX');
}  


// export const fromBinary = str => 

