import React, {  useState, useEffect } from "react"
import useAllowance from "src/hook/useAllowance"
import useBalance from "src/hook/useBalance"
import useBetPrice from "./hooks/useBetPrice"
import ButtonActions from "@components/commons/buttonActions"
import usePlay from "./hooks/usePlay"
import useToast from "src/hook/useToast"



const Bet = ()=>{
    const [userNum, setUserNum] = useState(0)
    const {data:balance} = useBalance()
    const {data:allowance} = useAllowance()
    const {data:price } = useBetPrice()
   const { writeAsync,isLoading} = usePlay(userNum)   
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

 
    return (<div className="flex items-center justify-center">  
            <form onSubmit={submitData}>
            <input 
            type="number"
            onChange={handleChange}
            placeholder="pick a number 1 to 10 " className="p-2 border" />
            <div className="flex justify-center mt-4">             
                <ButtonActions crud={disabledBtn || isLoading} price={price} allowance={allowance} balance={balance} />                        
            </div>
            </form>        
   
    </div>)
}

export default Bet