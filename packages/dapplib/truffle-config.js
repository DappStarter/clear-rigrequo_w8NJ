require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong cruise oven erosion imitate problem slot genre'; 
let testAccounts = [
"0xa95bc9859638b4ad4dcb5a092a35a8dea04fd95c1b24e555a6e947997159043b",
"0x5196ab6a9c694534d6f02406ce825d220ee4e81765f8a78d25ce36c093ecfd43",
"0xc690cb602a613919f690f9b82e0f6803a250ff87bf84224a258497d3f9df1dc4",
"0x7a7334f06bbbc97f5f13ba933eb3f39ef700bc38eede124a9d850d422e10dd3b",
"0x8dd74cba49370200f08ae08b3b9620b49f940368f2da04cb6fd7e9fa248de758",
"0x248019d04adee1a9187f27ef7c2a000c3dee1b6795ad31b839a83771db74eac7",
"0xbb65910ffbc009cf98b0f1d73f1ae7e302733640f859144565016067dd49ff3f",
"0xe27fb8e89094dc9fde977cb996c646271d2813ece9ef71a501d131128d7c57d8",
"0xd04fc500ecb6041afe20076e95d7536cd40a619b2004e1aeb6d33792357ac7ad",
"0x9e4d9d80d365a286b67318361925c567cae52617fbea135d2683ee50ba9b625a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

