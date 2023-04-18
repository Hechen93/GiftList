const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

// find the proof that norman block is in the list
const name = 'Sidney Kertzmann';
const index = niceList.findIndex((n) => n === name);
console.log('Index position on nice list:', index);
const proof = merkleTree.getProof(index);
console.log('Proof:', proof);

// verify proof against the Merkle Root
console.log('Is on the list?', verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
