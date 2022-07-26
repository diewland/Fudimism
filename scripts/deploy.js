async function main() {
    // Grab the contract factory 
    //used to deploy new smart contracts
    const Fudimism = await ethers.getContractFactory("Fudimism");

    // Start deployment, returning a promise that resolves to a contract object
    const FUDTHAI = await Fudimism.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", FUDTHAI.address);
    console.log("https://optimistic.etherscan.io/address/" + FUDTHAI.address);
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
