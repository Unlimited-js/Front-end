import { useEffect } from 'react';
import {
    usePrepareContractWrite,
    useContractWrite,
    useFeeData,
    useWaitForTransaction,
  } from "wagmi";
import useToast from './useToast';


  interface Iarg {
    abi:any
    address:string
    args:any[]
    functionName:string
  
  }
const useWrite = (arg:Iarg)=>{
    const { data: feeData } = useFeeData(); 
    const toastContent = useToast()
      const { config } = usePrepareContractWrite({      
        ...arg,       
        overrides: {
          gasLimit: "500000",
          gasPrice: feeData?.gasPrice,
        },
    
        onError(error) {      
          // console.log(error, "erro catc")
         
          // invalid address or ENS name
          // invalid BigNumber value
          const err = JSON.parse(JSON.stringify(error));
          const er = [
            "resolver or addr is not configured for ENS name",
            "missing argument: passed to contract",
            "invalid address or ENS name",
            "invalid BigNumber value",
            "invalid BigNumber string",
          ];
        //   const ErrorMsg = !!err && er?.includes(err?.reason) ? "" : err?.reason;

      //  throw error
        },

        
      });

    
    //   @ts-ignore 
      const { write, error, data, isLoading, isSuccess, reset , writeAsync} =  useContractWrite(config);

      const { data: writeConfirmation, isLoading:isWaiting } = useWaitForTransaction({
        hash: data?.hash,
      });
  
      const txn = writeConfirmation?.status
      console.log(txn)

useEffect(()=>{
  if(isSuccess && !txn){
    toastContent("Transaction Submitted",data?.hash, "info" )
  
  }

  if(txn){
    toastContent("Transaction confirmed",data?.hash, "success" )
  }
},[txn, isSuccess])
      return {
        write,
        writeAsync,
        error,
        data,
        isLoading,
        isSuccessSubmitted: isSuccess,
        writeConfirmation,
        reset,
        isWaiting
      };
}

export default useWrite
