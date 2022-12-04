import { useSpinnerWrite } from "./useSpinner"

const  usePlay = (id:number)=>{
    const data = useSpinnerWrite({
        functionName:"spin",
        args:[id]
    }) 
    return data
}

export default usePlay