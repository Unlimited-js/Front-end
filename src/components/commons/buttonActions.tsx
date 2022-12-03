import {  toast } from 'react-toastify';
import useApprove from "src/pages/games/hooks/useApprove"
import Button from "./button"



interface ITransactionDetails {
     balance:string | number
     allowance:string | number
     price:string | number
     crud?:boolean
}
const ButtonActions = ({price, balance, allowance, crud=false}:ITransactionDetails)=>{
 
    const { isLoading, writeAsync} = useApprove()
  
    const approveTransaction =async ()=>{
        try{

          const res =  await writeAsync?.()
        //   console.log(res)        

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
            return <Button disabled={isLoading} type="button" onClick={approveTransaction }>
                {isLoading ? "Approving": "Approve"}
            </Button>
        }

        return   <Button disabled={crud} type="submit">
        Play
    </Button>   
    }   
    return <div>
        <>
     {_render()}
        </>
    </div>
}


export default ButtonActions