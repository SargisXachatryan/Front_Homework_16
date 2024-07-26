import Link from "next/link"
import { verifyAuth } from "../auth"

export const Navbar = async () => {
    const result = await verifyAuth()

    return <>
        <nav className="has-background-dark	p-5 has-text-white-ter	">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {
                        !result.user ?

                            <>
                                <Link href='/' className="navbar-item">
                                    Signup
                                </Link>
                                <Link href='/login' className="navbar-item">
                                    Login
                                </Link>
                                <Link href='/api' className="navbar-item">
                                    API
                                </Link>
                            </>
                            :
                            <>
                                <Link href='/profile' className="navbar-item">
                                    Profile
                                </Link>
                                <Link href='/settings' className="navbar-item">
                                    Settings
                                </Link>
                                <Link href='/api' className="navbar-item">
                                    API
                                </Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    </>
}