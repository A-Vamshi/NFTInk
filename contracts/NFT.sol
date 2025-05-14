// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {

    uint private _nextTokenId;
    address public owner;
    uint public cost;

    constructor (string memory _name, string memory _symbol, uint _cost) ERC721(_name, _symbol) {
        owner = msg.sender;
        cost = _cost;
    }

    modifier enoughFunds() {
        require(msg.value >= cost, "Insuffiecient funds");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owners can withdraw");
        _;
    }

    function mint(string memory tokenURI) public payable enoughFunds returns(uint) {
        uint tokenId = _nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    function totalSupply() public view returns(uint) {
        return _nextTokenId;
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }
}