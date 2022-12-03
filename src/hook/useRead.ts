
import { useContractRead } from 'wagmi'


const useRead = (arg:any)=>{
  
    const data= useContractRead({...arg, cacheTime: 1_000,
      staleTime: 1_000,})

      return data
}

export default useRead
