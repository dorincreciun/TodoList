import {Link} from "react-router";
import {Routing_Paths} from "../../../../app/config";

export const Header = () => {
    return (
        <header className={'py-4 bg-gray-500'}>
            <div className={'flex items-center justify-between container mx-auto'}>
                <Link to={Routing_Paths.HOME}>Home</Link>
                <Link to={Routing_Paths.LOGIN}>User</Link>
            </div>
        </header>
    )
}