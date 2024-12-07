import Main from "../components/Main.vue";
import Cart from "../components/Cart.vue";
import Favorites from "../components/Favorites.vue";
import Auth from "../components/Auth.vue";
import Signup from "../components/Signup.vue";

const appRoutes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
]

export default appRoutes