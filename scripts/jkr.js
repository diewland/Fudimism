async function main() {
    // Grab the contract factory 
    //used to deploy new smart contracts
    const ftr = await ethers.getContractFactory("JaiKaeRae");

    // Start deployment, returning a promise that resolves to a contract object
    const ctr = await ftr.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", ctr.address);
    //console.log("https://optimistic.etherscan.io/address/" + ctr.address);
    console.log("https://arbiscan.io/address/" + ctr.address);
    console.log("https://nova-explorer.arbitrum.io/address/" + ctr.address);
    console.log("")
    console.log("*** EVERY DEPLOY TAKE COST 0.007ETH ***")
    //console.log("If error, check https://qx.app/collections first")
    console.log("If error, check https://stratosnft.io/collections first")
    console.log("If error, check https://nova.stratosnft.io/collections first")
    console.log("Collection may already shown there")
    console.log("")
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
