import Link from "next/link"
import { Connect } from "./Connect"
import ThemeSwitch from "./switch"

const Header = ()=>{
    return (<>
    <div className="flex justify-between p-6">
        <div className="text-2xl text-blue-400">Unlimited</div>
        <div className="flex items-center">
            <div className="mr-3">
            <Link href="/games" className="mx-1">
                Games
            </Link>
            </div>
            {/* <ThemeSwitch /> */}
           
            <Connect />
        </div>
    </div>
    </>)
}

export default Header