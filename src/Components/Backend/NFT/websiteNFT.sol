// SPDX-License-Identifier: MIT

// Developed by @iemwill from flex-IT
// https://laubenheimer.eu
// hello@laubenheimer.eu

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


/**
 * The ebsiteToken contract enables website-token-minting for in this case https://laubenheimer.eu.
 */
contract websiteToken is ERC20 {
  address public owner;
  address public oldFungibleToken;
  address public oldNonFungibleToken;

  constructor() ERC20 ("HelloWebsiteToken", "HWT"){
    owner = msg.sender;
    oldFungibleToken = 0xD1841Ca7DDEf395979bDE3bdf46fc9a3b9d787b8;
    oldNonFungibleToken = 0x21ac1fBeE4491DfE92354eE1B3F2eF2D3357545c;
    _mint(owner, 100 * 10 ** 18);
  }
  function mintToken(address to, uint256 amount) public virtual {
    require (msg.sender == owner, "You are not allowed to call this function.");
    _mint(to, amount * 10 ** 18);
  }
}


/**
 * The websiteNFT contract creates one NFT for each visit of a website (https://laubenheimer.eu) 
 * and creates websiteToken through actions.
 */
contract websiteNFT is ERC721URIStorage {
  address owner;
  websiteToken public theWebsiteToken;

  uint256 public NFTsCount;
  mapping(uint256 => uint256) public NFTtoTokenMapping;

  constructor() ERC721 ("Hello Website NFT", "HWNFT") {
    owner = 0xDE328FD211901daA74a15C461bfd97560E1DF6a5;
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
    mintToken(tokenId, owner, initiator, 10);
    _setTokenURI(tokenId, tokenURI);
  }
  function transferNFTFrom(address from, address to, uint256 tokenId) public virtual {
    transferFrom(from, to, tokenId);
  }
  //Token-functions
  function mintToken(uint256 tokenId, address to, address initiator, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(tokenId < NFTsCount, "You try to mint token for an tokenId not existing.");
    theWebsiteToken.mintToken(to, amount);
    theWebsiteToken.approve(initiator, amount * 10 ** 18);
  }
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
    NFTtoTokenMapping[tokenId] -= amount;
  }
  function transferTokenFrom(uint256 tokenId, address sender, address recipient, uint256 amount) public virtual {
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(NFTtoTokenMapping[tokenId] >= amount, "Not enough funds.");
    theWebsiteToken.transferFrom(sender, recipient, amount * 10 ** 18);
    NFTtoTokenMapping[tokenId] -= amount;
  }
}