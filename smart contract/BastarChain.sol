// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HandicraftAuthenticity {
    struct Product {
        bytes32 productHash;
        string productName;
        string artisanName;
        string productInfo;
        uint256 timeCreated;
        string artisanAddress;
        string shopID;
        bool isRegistered;
    }

    mapping(bytes32 => Product) private products;

    event ProductRegistered(
        bytes32 indexed productHash,
        string productName,
        string artisanName,
        string productInfo,
        uint256 timeCreated,
        string artisanAddress,
        string shopID
    );
    event ProductVerified(bytes32 indexed productHash, string shopID, address verifier);

    function registerProduct(
        string memory productID,
        string memory productName,
        string memory artisanName,
        string memory productInfo,
        string memory artisanAddress,
        string memory shopID
    ) public {
        bytes32 productHash = keccak256(abi.encodePacked(productID));
        require(!products[productHash].isRegistered, "Product already registered!");

        products[productHash] = Product(
            productHash,
            productName,
            artisanName,
            productInfo,
            block.timestamp,
            artisanAddress,
            shopID,
            true
        );
        emit ProductRegistered(
            productHash,
            productName,
            artisanName,
            productInfo,
            block.timestamp,
            artisanAddress,
            shopID
        );
    }

    function verifyProduct(string memory productID, string memory shopID) public {
        bytes32 productHash = keccak256(abi.encodePacked(productID));
        Product memory product = products[productHash];

        require(product.isRegistered, "Product not registered!");
        require(
            keccak256(abi.encodePacked(product.shopID)) == keccak256(abi.encodePacked(shopID)),
            "Invalid shop ID!"
        );

        emit ProductVerified(productHash, shopID, msg.sender);
    }

    function getProductDetails(string memory productID)
        public
        view
        returns (
            bytes32 productHash,
            string memory productName,
            string memory artisanName,
            string memory productInfo,
            uint256 timeCreated,
            string memory artisanAddress,
            string memory shopID,
            bool isRegistered
        )
    {
        bytes32 hash = keccak256(abi.encodePacked(productID));
        Product memory product = products[hash];
        require(product.isRegistered, "Product not registered!");

        return (
            product.productHash,
            product.productName,
            product.artisanName,
            product.productInfo,
            product.timeCreated,
            product.artisanAddress,
            product.shopID,
            product.isRegistered
        );
    }
}
