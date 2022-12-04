import React, {  useState, useEffect } from "react"
import useAllowance from "src/hook/useAllowance"
import useApprove from "src/hook/useApprove"
import useBalance from "src/hook/useBalance"
import ButtonActions from "@components/commons/buttonActions"
import usePlay from "./hooks/usePlay"
import useToast from "src/hook/useToast"
import useSpinnerDetails from "./hooks/useSpinnerDetails"
import { currentSpinnerId, spinnerAddress } from "src/config"
import Image from "next/image"




const Spinner = ()=>{
    const [userNum, setUserNum] = useState(0)
    const {data:balance} = useBalance()
    const {data:allowance, refetch} = useAllowance(spinnerAddress)
    const {writeAsync:approveFunc=()=>{}, isWaiting, isLoading:isApproving } = useApprove(spinnerAddress)
    const data = useSpinnerDetails(1) as any
    console.log(data, "spinner data")
    const resoluteData = {
        currentHighestNumber:data?.["currentHighestNumber"],
        winner:data?.["winner"],
        entryPrice:data?.["EntryPrice"],
        created:data?.["created"],
        spinId:data?.["spinId"],
        deadline:data?.["deadline"],
        prizeClaimed:data?.["prizeClaimed"],
        claimDeadline:data?.["claimDeadline"] ? +data?.["claimDeadline"].toString(): "",
        prize:data?.["prize"] ? +data?.["prize"].toString()/10**18: 0,

   } 
    console.log(data, "spiner details")
    console.log(resoluteData, "sresolute data")
    // const {data:price } = useBetPrice()  
   const { writeAsync,isLoading} = usePlay(currentSpinnerId) 

   const toastContent = useToast()
   const [disabledBtn, setDisabledBtn] = useState(true)
 
   useEffect(()=>{
    if(userNum){
        setDisabledBtn(false)
    }
   },[userNum])
    const submitData = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()  
        
     
      try{
        // await  writeAsync?.()       
        
      }
      catch(e:any){
        const err = JSON.parse(JSON.stringify(e))
        toastContent(err?.reason, "", "error")
      } 
        
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.target.value
        setUserNum(+e.target.value)        
    }

    const _betStatusRender = ()=>{
    //  if(inProgress) return "In Progress"
    //  if(betEnded) return 'bet Ended'
    //  return "bet not started"
    }
 
    return (<div className="flex items-center justify-center flex-col">  
            <div className="mb-4">
              <div className="text-green-700">
                {/* {_betStatusRender()} */}
              </div>
              </div>
             
              <div className="h-80 w-80  relative ">    
        <Image      
        src="/spinner.jpeg"
         width="600" height="500"
          alt="spinner"
         />
          
    </div>

            <form onSubmit={submitData}>          
          <div className="flex justify-center mt-4">             
                <ButtonActions
                actionText="Spin"
                approveFunc={approveFunc}
                isApproving={isApproving}                                
                 crud={disabledBtn || isLoading || isWaiting
                } 
                 price={resoluteData?.entryPrice} 
                 allowance={allowance}
                 refetch={refetch}
                balance={balance} 
                />                        
            </div>         
         
            </form>        
   
    </div>)
}

export default Spinner