import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import LibPage from "./pages/LibPage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, LIBPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: SHOP_ROUTE,
        component: Shop
    },
    {
        path: LIBPAGE_ROUTE + '/:type/:id',
        component: LibPage
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: Shop
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