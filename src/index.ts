/**
 * Node.js version of LINE Travel encrypt/decrypt module.
 * @author Nir Elbaz<nir@splittytravel.com>
 * @license MIT
 */
import crypto from 'crypto';
import * as utils from './utils';

/**
 * Encrypts data using aes-256-cbc algorithm
 * @param {string} text Plain text to encrypt
 * @param {string} key Secret key
 * @returns {string}
 */
export function encrypt(text: string, key: string) {
  const key32 = utils.hashKey(key).slice(0, 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('AES-256-CBC', key32, iv);
  const encrypted = Buffer.concat([cipher.update(utils.pad(text)), cipher.final()]);
  
  return Buffer.concat([iv, encrypted]).toString('base64');
}

/**
 * Decrypts data using aes-256-cbc algorithm
 * @param {string} data Encrypted data to decrypt
 * @param {string} key Secret key
 * @returns {string}
 */
export function decrypt(data: string, key: string) {
  const key32 = utils.hashKey(key).slice(0, 32);
  const encrypted = Buffer.from(data, 'base64');
  const iv = encrypted.slice(0, 16);
  const encryptedText = encrypted.slice(16);
  const decipher = crypto.createDecipheriv('AES-256-CBC', key32, iv);
  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

  return utils.unpad(decrypted.toString());
}