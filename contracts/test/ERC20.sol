pragma solidity =0.5.16;

import '../PlusswapERC20.sol';

contract ERC20 is PlusswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
