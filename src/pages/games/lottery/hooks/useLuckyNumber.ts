import useLottery from "./useLottery"

const  useWinners = ()=>{ 
    const  data = useLottery({
        functionName:"showLuckyNumber"
    })

  return data
}

export default useWinners