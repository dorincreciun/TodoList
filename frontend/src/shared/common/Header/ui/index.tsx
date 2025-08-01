import {Link} from "react-router";
import {Routing_Paths} from "../../../../app/config";
import {useAuthStore} from "../../../../features/auth";

export const Header = () => {
    const isAuthorized = useAuthStore((state) => state.isAuthorized);
    const {logout} = useAuthStore()
    return (
        <header className={'py-4 bg-stone-950'}>
            <div className={'flex items-center justify-between container mx-auto'}>
                <Link to={Routing_Paths.HOME}>Home</Link>
                <Link to={Routing_Paths.CABINET}>Cabinet</Link>
                <div>
                    <Link to={Routing_Paths.LOGIN}>User</Link>
                    <button onClick={() => {
                        logout()
                    }}>
                        {
                            isAuthorized ? <span>Logout</span> : <span>Login</span>
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}