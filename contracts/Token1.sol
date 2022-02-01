pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20Detailed, ERC20{
	constructor() ERC20Detailed("Token 1", "TK1", 18) public {
		_mint(address(this), 10000 * 10**18);
	}


    function buyTokens(uint256 numberOfTokens) external payable {
        require(this.transfer(msg.sender, numberOfTokens));
    }
}