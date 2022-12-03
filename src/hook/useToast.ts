import {toast} from "react-toastify"
import { toastContent } from "@components/toastify"


const useToast = ()=>{   
    const toastify = ( message='', txnHash='', type = "info",) => {
        // @ts-ignore
        toast[type](toastContent(message, txnHash, type= toast.TYPE.DEFAULT  )
       ,  
      
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: type === "success" ? 10000 : 3000,
            ...(type === "success"  && {icon:""})           
          }
        );
      };
    return toastify
}

export default useToast