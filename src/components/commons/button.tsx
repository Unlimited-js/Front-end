import {useAccount, useNetwork, } from "wagmi"
import {ConnectKitButton} from "connectkit"

type IProps ={
    children: React.ReactNode
    className?: string
    disabled?: boolean
    onClick?: (e: any) => void
    type?: "button" | "submit" | "reset"
}

const Button = ({className, disabled, children, onClick, type='button'}:IProps) => {

    const { isConnected} = useAccount()
    const {chain} = useNetwork()

    const isSupported = chain?.id ===80001
 

  const Switch = ()=>{
    return <button  className="bg-[#FA0101] text-white text-sm px-6 py-2 rounded-md ">
            switch network
    </button>
  }
    return (
        <>
    {
        isConnected ?     isSupported ?     <button
        type={type}
        onClick={onClick}
        className={`bg-[#FA0101] text-white text-sm px-6 py-2 rounded-md ${disabled ? "cursor-not-allowed bg-red-400":""} ${className}`}

         disabled={disabled}>{children}</button> :<Switch /> : <ConnectKitButton />    }
        </>
    )
}

export default Button