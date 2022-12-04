import React, {  useState, useEffect } from "react"
import useAllowance from "src/hook/useAllowance"
import useBalance from "src/hook/useBalance"
// import useBetPrice from "./hooks/useBetPrice"
import ButtonActions from "@components/commons/buttonActions"
import usePlay from "./hooks/usePlay"
import useToast from "src/hook/useToast"
import useSpinnerDetails from "./hooks/useSpinnerDetails"
import { currentSpinnerId } from "src/config"




const Spinner = ()=>{
    const [userNum, setUserNum] = useState(0)
    const {data:balance} = useBalance()
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
    //  if(inProgress) return "In Pro"

    //  if(betEnded) return 'bet Ended'
    //  return "bet not started"
    }
 
    return (<div className="flex items-center justify-center flex-col">  
            <div className="mb-4">
              <div className="text-green-700">
                {/* {_betStatusRender()} */}
              </div>
              </div>
            <form onSubmit={submitData}>
            <input 
            type="number"
            onChange={handleChange}
            placeholder="pick a number 1 to 10 " className="p-2 border" />

<div className="flex justify-center mt-4">             
                {/* <ButtonActions
                approveFunc={approveFunc}
                isApproving={isApproving}                                
                 crud={disabledBtn || !!betEnded || !!!betStarted ||  isLoading || isWaiting 
                } 
                 price={resoluteData?.entryPrice} 
                 allowance={allowance}
                 refetch={refetch}
                balance={balance} 
                />                         */}
            </div>
            
            <div className="flex justify-center mt-4">             
                {/* <ButtonActions
                 crud={disabledBtn || !!betEnded || !!!betStarted ||  isLoading} 
                 price={price} 
                balance={balance} 
                />                         */}
            </div>
            </form>        
   
    </div>)
}

export default Spinner