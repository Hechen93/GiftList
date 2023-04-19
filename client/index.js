const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  try {
    const merkleTree = new MerkleTree(niceList);

    const root = merkleTree.getRoot();

    //Change the name here
    const leaf = 'Judith Walsh III';
    const index = niceList.findIndex((n) => n === leaf);
    console.log('Index position on nice list:', index);
    console.log('Leaf Name:', leaf);
    console.log('Index:', index);
    const proof = merkleTree.getProof(index);

    console.log('Root: ', root);
    //console.log('Client proof:', proof);

    const body = { proof, leaf };

    const { data: gift } = await axios.post(`${serverUrl}/gift`, body); // TODO: add request body parameters here!
    //Need to send: index, layer, getProof

    console.log({ gift });
  } catch (ex) {
    console.log('Could not complete request to server.');
  }
}

main();
