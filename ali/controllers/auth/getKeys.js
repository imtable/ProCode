const fs = require('fs-extra');
const path = require('path');

let privKey = null, pubKey = null;

const getPrivKey = async () => {
  if (!privKey) {
    const keyPath = path.join(__dirname, '../../keys/priv.key')
    privKey = await fs.readFile(keyPath, 'utf-8');
  }
  return privKey;
}

const getPubKey = async () => {
  if (!pubKey) {
    const keyPath = path.join(__dirname, '../../keys/pub.key')
    pubKey = await fs.readFile(keyPath, 'utf-8');
  }
  return pubKey;
}

module.exports = {
  getPrivKey,
  getPubKey
};