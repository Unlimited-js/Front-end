import {  toast } from 'react-toastify';
import Button from "./button"

interface ITransactionDetails {
     balance:string | number
     allowance:string | number
     price:string | number
     crud?:boolean
     refetch:()=>void
     approveFunc:()=>any
     isApproving:boolean
     actionText:string

}
const ButtonActions = ({price, balance, crud=false, allowance, refetch, approveFunc, isApproving, actionText="Play"}:ITransactionDetails)=>{   
    
  
    const approveTransaction =async ()=>{
        try{

         await approveFunc?.()      
        refetch?.()     

        }
        catch(e:any) {
            const ms = JSON.parse(JSON.stringify(e))           
            toast(ms.reason)
         
        }
    }
    
    const _render = ()=>{
             if(balance < price){
            return <Button type="button"> Insufficient Balance</Button>
        }
        if(allowance < price){
            return <Button disabled={isApproving} type="button" onClick={approveTransaction }>
                {isApproving ? "Approving": "Approve"}
            </Button>
        }

        return   <Button disabled={crud} type="submit">
        {actionText}
    </Button>   
    }   
    return <div>
        <>
     {_render()}
        </>
    </div>
}


export default ButtonActions