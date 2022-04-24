require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift razor sister smile hope clog slot gesture'; 
let testAccounts = [
"0xdb73216b0704f9b9869f0eeb3e6d498fcb5370728d14a4065f016a5af18f5d72",
"0x6741a3333de99ef10074024a909b7c36418a609955c667cb1b24e9992c36708a",
"0x8954f57ad065ee02383cb7a22668d6b7444d365ea937dfdbdcb8d747290bc4a9",
"0xd894a8b3d82e0fdbd323a4410308dbbc00203077181b5efbb00d68671a056f6c",
"0xf9a5e1b41bc6287f64c1ce8ba2fc2bdbd99bee55331a4b4b3c6da831f88068a4",
"0xc398d819851d1b77d7184c3ff82579e24361cef02c55a32735b25fa2d0ed669b",
"0xce6fe5be6057a70a25e645135bed5a6f15e49dd45b93481517e16141b2123010",
"0x771d7e403a98e85e829a6ca6ca81b2b2fbc93b6f5fcf761d0218d970f88412d4",
"0xe1d718b0f2a4c18d45cae64abc599437e7347eb801fadff5d9bea94f70b56782",
"0xceac30cafdb74d3583635a010e29a6c0230740cee3c82985a702c0bfcc9dbe20"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

