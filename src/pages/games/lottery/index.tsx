import React, {  useState, useEffect } from "react"
import useAllowance from "src/hook/useAllowance"
import useBalance from "src/hook/useBalance"
import useBetPrice from "./hooks/useBetPrice"
import ButtonActions from "@components/commons/buttonActions"
import usePlay from "./hooks/usePlay"
import useToast from "src/hook/useToast"
import useBetStarted from "./hooks/useBetStarted"
import useBetEnded from "./hooks/useBetEnded"
import useApprove from "src/hook/useApprove"
import useTimeLeft from "./hooks/useTimeLeft"



const Bet = ()=>{
    const [userNum, setUserNum] = useState(0)
    const {data:balance} = useBalance()
    const {data:price } = useBetPrice()
  
   const { writeAsync,isLoading, isWaiting } = usePlay(userNum) 
   const {data: betStarted } = useBetStarted()  
   const {data:betEnded} = useBetEnded()
   const {data:allowance, refetch} = useAllowance()
   const {writeAsync:approveFunc=()=>{}, isLoading:isApproving } = useApprove()
   const inProgress = betStarted && !betEnded
   const toastContent = useToast()
   const {data:timeLeft} = useTimeLeft()
   const [disabledBtn, setDisabledBtn] = useState(true)
  
   useEffect(()=>{
    if(userNum){
        setDisabledBtn(false)
    }
   },[userNum])
    const submitData = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()         
     
      try{
        await  writeAsync?.()       
        
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
     if(inProgress) return "Game In Progress"

     if(betEnded) return 'bet Ended'
     return "bet not started"
    }
 
    return (<div className="flex items-center justify-center flex-col">  
            <div className="mb-4">
              <div className="text-green-700">
                {_betStatusRender()}
              </div>
              </div>
            <form onSubmit={submitData}>
            <input 
            type="number"
            onChange={handleChange}
            placeholder="pick a number 1 to 10 " className="p-2 border" />
            <div className="flex justify-center mt-4">             
                <ButtonActions
                approveFunc={approveFunc}
                isApproving={isApproving}                                
                 crud={disabledBtn || !!betEnded || !!!betStarted ||  isLoading || isWaiting 
                } 
                 price={price} 
                 allowance={allowance}
                 refetch={refetch}
                balance={balance} 
                />                        
            </div>
            </form>        
   
    </div>)
}

export default Bet