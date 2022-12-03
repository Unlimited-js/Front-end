import Link from "next/link"

interface IGame {
    name:string
    id:number
    type:string
    hostName:string
} 

const games =[
    {
    name:"Awesome",
    id:0,
    type:"lottery",
    hostName:"Agrawal"

},
{
    name:"Awesome Spinner",
    id:1,
    type:"spinner",
    hostName:"Elon",
    link:"",
    contractAddress:""
},
]
const Card=({
    hostName,
    id,
    name,
    type
}:IGame)=>{
   
    return <Link href={`games/${type}`} >
     <div className="inline-block p-2 border">
        {name}
     </div>

    </Link>
}

const Games =()=>{

    const _data = games.map((item:IGame)=><div className="mx-5" key={item.id}>
        <Card {...item}  />
    </div>)
    return <>
    <div className="flex">
        {_data}
    </div>
   
    </>
}

export default Games