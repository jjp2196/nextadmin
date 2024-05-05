import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/Sidebar/Sidebar"

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Sidebar/>
            </div>
            <div>
                <Navbar/>
                {children}
            </div>
        </div>
    )
}

export default Layout