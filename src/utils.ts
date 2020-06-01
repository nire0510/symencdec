import crypto from 'crypto';

/**
 * Hashes secret key using sha256 algorithm
 * @param {string} key Secret key
 * @returns {string}
 */
export function hashKey(key: string) {
  return crypto
    .createHash('sha256')
    .update(key)
    .digest();
}

/**
 * Append symbols to text.
 * @param {string} text 
 * @returns {string}
 */
export function pad(text: string) {
  const pad = 16 - (text.length % 16);

  return text.padEnd(text.length + pad, String.fromCharCode(pad));
 }

 /**
 * Removes padding from text.
 * @param {string} text 
 * @returns {string}
 */
export function unpad(text: string) {
  const pad = text.charCodeAt(text.length - 1);

  return text.substr(0, (text.length - pad));
 }