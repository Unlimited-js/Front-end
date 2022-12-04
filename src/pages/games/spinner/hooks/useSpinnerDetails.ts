
import { spinnerConfig } from "src/config"
import useRead from "src/hook/useRead"


const  useSpinnerDetails = (id:number)=>{
    const {data, ...props} = useRead({
        ...spinnerConfig,   
        functionName:"spinners",
        args:[id]
    })

    console.log(data)
    return data
}

export default useSpinnerDetails