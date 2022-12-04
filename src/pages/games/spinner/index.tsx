import React, {  useState, useEffect } from "react"
import useAllowance from "src/hook/useAllowance"
import useBalance from "src/hook/useBalance"
// import useBetPrice from "./hooks/useBetPrice"
import ButtonActions from "@components/commons/buttonActions"
// import usePlay from "./hooks/usePlay"
import useToast from "src/hook/useToast"
import useSpinnerDetails from "./hooks/useSpinnerDetails"
// import useBetStarted from "./hooks/useBetStarted"
// import useBetEnded from "./hooks/useBetEnded"



const Bet = ()=>{
    const [userNum, setUserNum] = useState(0)
    const {data:balance} = useBalance()
    const data = useSpinnerDetails(1) as any
    const typeOfData = typeof data
    const resoluteData = {
        entryPrice:data?.[0],
        claimDeadline:data?.[1].toString() ? new Date(+data?.[1].toString()*1000) : '',
        created:data?.[2],
        currentHighestNumber:data?.[3],
        price:data[4].toString() ?? 0,






    } as typeof data
    console.log(data, "spiner details")
    console.log(resoluteData, "sresolute data")
    // const {data:price } = useBetPrice()  
//    const { writeAsync,isLoading} = usePlay(userNum) 
//    const {data: betStarted} = useBetStarted()  
//    const {data:betEnded} = useBetEnded()
//    const inProgress = betStarted && !betEnded

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
                 crud={disabledBtn || !!betEnded || !!!betStarted ||  isLoading} 
                 price={price} 
                balance={balance} 
                />                         */}
            </div>
            </form>        
   
    </div>)
}

export default Bet