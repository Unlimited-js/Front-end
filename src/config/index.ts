import betAbi from "./abi/bet.json"
import betTokenAbi from "./abi/betTokenAbi.json"
import spinnerAbi  from "./abi/spinnerAbi.json"

export const betTokenAddress="0x5AB4c09A339C9139B28D6bfE168e45682391F307"
export  const betGGameAddress="0xc3ef34C504B43D2E1E617fe26E3372D860f5a71e"
export const spinnerAddress = "0x5AB4c09A339C9139B28D6bfE168e45682391F307"
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