import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2"  >
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60" style={{backgroundColor:"#808080"}}>
                <div className="space-y-3">
                    <div className="flex items-center" >
                        <h2 className="text-xl mt-4 font-bold"   style={{color:"white",fontSize:"25px"}} >Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm" style={{fontSize:"20px"}} >
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <img src={contact} /> */}
                                    <b>> Contacts</b>
                                </Link>
                            </li>
                            <li className="rounded-sm" style={{fontSize:"20px"}} >
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    {/* <img src={bar} alt="" /> */}
                                    <b>> Charts and Maps</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}