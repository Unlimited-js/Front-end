import useLottery from "./useLottery"

const  useBetPrice = ()=>{ 
    const  {data, ...props} = useLottery({
        functionName:"betPrice"
    })

    return {
        data:data ? +data.toString()/10**18 : "", 
        ...props}
}

export default useBetPrice