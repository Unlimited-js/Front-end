import useLottery from "./useLottery"

const  useTimeLeft = ()=>{ 
    const  data = useLottery({
        functionName:"seeTimeLeft"
    })

  return data
}

export default useTimeLeft