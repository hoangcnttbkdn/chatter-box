import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import MainLayout from '../components/layouts/main-layout';
import { ROUTE_NAME } from '../constants/route-name';
import HomePage from '../pages/home';
import AboutUsPage from '../pages/about-us';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={ROUTE_NAME.HOME} element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path={ROUTE_NAME.ABOUT} element={<MainLayout />}>
                <Route index element={<AboutUsPage />} />
            </Route>
        </>
    )
);
