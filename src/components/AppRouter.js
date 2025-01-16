import { Navigate, Route, Routes } from 'react-router-dom';
import { LIBRARY_ROUTE } from '../utils/consts';
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
            <Route path='*' element={<Navigate to={LIBRARY_ROUTE}/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map((el, i) =>
                <Route path={el.path} key={i} Component={el.component} exact/>
            )}
            <Route path='*' element={<Navigate to={LIBRARY_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;