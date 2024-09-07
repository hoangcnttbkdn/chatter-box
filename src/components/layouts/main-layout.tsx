import { Link, Outlet } from 'react-router-dom';
import { ROUTE_NAME } from '../../constants/route-name';

function MainLayout() {
    return (
        <main>
            <header className="space-x-4 p-4">
                <button>
                    <Link to={ROUTE_NAME.HOME}>Home</Link>
                </button>

                <button>
                    <Link to={ROUTE_NAME.AUTHENTICATE.SIGN_IN}>Sign in</Link>
                </button>
            </header>

            <Outlet />

            <footer>footer</footer>
        </main>
    );
}

export default MainLayout;
