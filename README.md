This project highlights my Week 2 learnings of Merkle trees. In this exercise, all names on the niceList.json are used
to create a new Merkle tree, in which we're able to derive a 32-byte root. Next, we pass any "leaf" name from the list
from the client to the server in order to verify if the name is part of the merkle root hash. This is validated by the
server (who is able to call verifyProof() in order to check if the corresponding proof to the client-supplied name
checks out. If the name is provably part of the merkle root hash, the server returns a "true" response and allows the
named person to get their toy robot.

# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the
depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an
HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on
the server.

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will
be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the
`MERKLE_ROOT`. If it is, then we can send the gift!

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly
  generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root
  using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not
  have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to
  prove a name is in the merkle root, as show in the example.
