// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


/**
 * The websiteToken contract enables website-token-minting.
 */
contract websiteToken is ERC20 {
  address public owner;

  constructor() ERC20 ("WebsiteToken", "WT"){
    owner = msg.sender;
    _mint(owner, 100 * 10 ** 18);
  }
  function mintToken(address to, uint256 amount) public virtual {
    require (msg.sender == owner, "You are not allowed to call this function.");
    _mint(to, amount * 10 ** 18);
  }
}


/**
 * The websiteNFT contract creates one NFT for each visit of a website.
 */
contract websiteNFT is ERC721URIStorage {
  address private owner;
  websiteToken public theWebsiteToken;

  uint256 public NFTsCount;
  mapping(uint256 => uint256) public NFTtoTokenMapping;

  constructor() ERC721 ("Website NFT", "WNFT") {
    owner = msg.sender;
    theWebsiteToken = new websiteToken();
    _safeMint(owner, 0);
    NFTsCount = 1;
    NFTtoTokenMapping[0] = 100;
    _setTokenURI(0,"https://laubenheimer.eu/NFTs/0");
  }
  //NFT-functions
  function mintNFT(address to, uint256 tokenId, string memory tokenURI, address initiator) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(NFTsCount == tokenId, "You don't use the mint queue rules.");
    _safeMint(to, tokenId);
    approve(initiator, tokenId);
    NFTsCount += 1;
    mintToken(tokenId, owner, 10);
    _setTokenURI(tokenId, tokenURI);
  }
  function transferNFTFrom(address from, address to, uint256 tokenId) public virtual {
    transferFrom(from, to, tokenId);
  }
  //Token-functions
  function mintToken(uint256 tokenId, address to, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(tokenId < NFTsCount, "You try to mint token for an tokenId not existing.");
    theWebsiteToken.mintToken(to, amount);
    NFTtoTokenMapping[tokenId] += amount;
  }
  function totalTokenSupply() public view returns(uint256) {
    return theWebsiteToken.totalSupply();
  }
  function transferToken(uint256 tokenId, address recipient, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(NFTtoTokenMapping[tokenId] >= amount, "Not enough funds.");
    theWebsiteToken.transfer(recipient, amount * 10 ** 18);
    NFTtoTokenMapping[tokenId] -= amount;
  }
  function approveToken(uint256 tokenId, address spender, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(NFTtoTokenMapping[tokenId] >= amount, "Not enough funds.");
    theWebsiteToken.approve(spender, amount * 10 ** 18);
  }
  function transferTokenFrom(uint256 tokenId, address sender, address recipient, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(NFTtoTokenMapping[tokenId] >= amount, "Not enough funds.");
    theWebsiteToken.transferFrom(sender, recipient, amount * 10 ** 18);
    NFTtoTokenMapping[tokenId] -= amount;
  }
}