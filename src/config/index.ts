import betAbi from "./abi/bet.json"
import betTokenAbi from "./abi/betTokenAbi.json"
import spinnerAbi  from "./abi/spinnerAbi.json"

export const betTokenAddress="0x5AB4c09A339C9139B28D6bfE168e45682391F307"
export  const betGGameAddress="0x8D1558961a1c49D7C933c32d5EfCf9EFF5105A74"
export const spinnerAddress = "0x8348563199B40CcBdBb6C704cb406143C352ef61"
export const currentSpinnerId = 1


export const betConfig ={
 address:betGGameAddress,
 abi:betAbi

}

export const betTokenConfig = {
    address:betTokenAddress,
    abi:betTokenAbi
}

export const spinnerConfig = {
    address:spinnerAddress,
    abi:spinnerAbi
}