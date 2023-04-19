const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = '327ff501e8c295acfb1694c6777c2c1d896197869795b186b6653b446fb16b25';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const { proof, leaf } = req.body;

  // TODO: prove that a name is in the list
  console.log('NEW REPORT///////////////////////////////////////');
  const verificationRoot = verifyProof(proof, leaf, MERKLE_ROOT);
  console.log('Verification Root:', verificationRoot);
  console.log('Leaf - Name:', leaf);
  //console.log('Passed Client Proof:', proof);
  console.log('MERKLE ROOT', MERKLE_ROOT);
  console.log('Server calculated verification root:', verificationRoot);

  const isInTheList = verificationRoot;
  console.log('isInTheList', isInTheList);

  if (isInTheList) {
    res.send('You got a toy robot!');
  } else {
    res.send('You are not on the list :(');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
