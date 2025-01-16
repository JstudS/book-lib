import Auth from "./pages/Auth"
import LibPage from "./pages/LibPage"
import Library from "./pages/Library"
import { LIBPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LIBRARY_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: LIBRARY_ROUTE,
        component: Library
    },
    {
        path: LIBPAGE_ROUTE + '/:type/:id',
        component: LibPage
    },
]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        component: Library
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: LIBPAGE_ROUTE + '/:type/:id',
        component: LibPage
    },
]