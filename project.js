/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, artist, edition, year) {
    let newNFT = {
        name: name,
        artist: artist,
        edition: edition,
        year: year
    };
    
    // store the new NFT into the collection
    nftCollection.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    console.log("NFT List")
    console.log("----------")
    for (let newNFT of nftCollection) {
        console.log("NFT: " + newNFT.name)
        console.log("Artist: " + newNFT.artist)
        console.log("Edition: " + newNFT.edition)
        console.log("Year: " + newNFT.year)
        console.log("-----")
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    console.log(`Total NFTs Minted: ${nftCollection.length}`);

}

// call your functions below this line

// Mint some NFTs
mintNFT("NFT1", "Artist1", "First Edition", 2022);
mintNFT("NFT2", "Artist2", "Limited Edition", 2023);
mintNFT("NFT3", "Artist3", "Special Edition", 2021);

// List the NFTs
listNFTs();

// Get the total supply
getTotalSupply();