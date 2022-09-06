import Router from 'vue-router';
import RegisterPage from '../components/RegisterPage.vue'
import LoginPage from '../components/LoginPage.vue';
import ResetPassword from '../components/ResetPassword.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'register-page',
            path: '/',
            component: RegisterPage
        },
        {
            name: 'login-page',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'reset-password',
            path: '/resetpassword',
            component: ResetPassword
        }
    ]
});

export default router;