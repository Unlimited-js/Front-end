import { Connect } from "./Connect"
import ThemeSwitch from "./switch"

const Header = ()=>{
    return (<>
    <div className="flex justify-between p-6">
        <div className="text-2xl text-blue-400">Unlimited</div>
        <div className="flex items-center">
            <ThemeSwitch />
            <Connect />
        </div>
    </div>
    </>)
}

export default Header