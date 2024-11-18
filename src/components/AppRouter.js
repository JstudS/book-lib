import { Navigate, Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from '../routes';
import { useSelector } from 'react-redux';
import { userIsAuth } from '../store/UserStore';

const AppRouter = () => {
    const isAuth = useSelector(userIsAuth)

    return (
        isAuth
            ? 
            <Routes>
                {authRoutes.map((el, i) => 
                    <Route path={el.path} key={i} Component={el.component} exact/>
                )}
                <Route path='*' element={<Navigate to={ADMIN_ROUTE}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((el, i) =>
                    <Route path={el.path} key={i} Component={el.component} exact/>
                )}
                <Route path='*' element={<Navigate to={SHOP_ROUTE}/>}/>
            </Routes>
    );
};

export default AppRouter;