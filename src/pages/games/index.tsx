import Button from "@components/commons/button"
import Image from "next/image"
import Link from "next/link"

interface IGame {
    name:string
    id:number
    type:string
    hostName:string
} 



const Games =()=>{
  
    return <>
      
    <div className="container mx-auto mt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="flex justify-center rounded-xl  h-80 w-80  relative ">    
        <Image  
      
        src="/spinner.jpeg"
         width="600" height="500"
          alt="spinner"
         />
          <div className="absolute bottom-4">
          <Button>
            <Link href="/games/spinner">
            Spinner
            </Link>
         </Button> 
          </div>
    </div>
    <div className="flex justify-center  rounded-xl  h-80 w-80 relative">
        
    <Image       
        src="/lottery.jpeg"
         width="600" height="500"
          alt="spinner"/>
          <div className="absolute bottom-4">
          <Button>
            <Link href="/games/lotteryg">
            Lottery
            </Link>
         </Button> 
          </div>
        </div>
    <div className="flex justify-center  rounded-xl  h-80 w-80 relative">
    <Image       
        src="/coming-soon.png"
         width="600" height="500"
          alt="spinner"/>

<div className="absolute bottom-2">
          <Button disabled>
           Coming
         </Button> 
          </div>
        </div>
 
  </div>
</div>



  
   
    </>
}

export default Games