import useLottery from "./useLottery"

const  useWinners = ()=>{ 
    const  data = useLottery({
        functionName:"betWinners"
    })

  return data
}

export default useWinners