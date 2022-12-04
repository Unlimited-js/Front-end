
import { useContractRead } from 'wagmi'


const useRead = (arg:any)=>{ 

    const data= useContractRead({...arg, 
      cacheTime: 0,
      staleTime: 0,
      scopeKey: 'wagmi-token',
    })

      return data
}

export default useRead
