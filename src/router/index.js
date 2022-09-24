import Router from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import ResetPassword from '../components/ResetPassword.vue'
import TakeAttendance from '../components/TakeAttendance.vue'
import ViewAttendance from '../components/ViewAttendance.vue'
import EditAttendance from '../components/EditAttendance.vue'
import AllStudents from '../components/AllStudents.vue'
import AddStudent from '../components/AddStudent.vue'
import DeleteStudent from '../components/DeleteStudent.vue'
import HomePage from '../components/HomePage.vue'
 
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'login-page',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'login-page',
            path: '/register',
            component: RegisterPage
        },
        {
            name: 'reset-password',
            path: '/resetpassword',
            component: ResetPassword
        },
        {
            name: 'home-page',
            path: '/',
            component: HomePage,
            children: [
                {
                    name: 'all-students',
                    path: '',
                    component: AllStudents
                },
                {
                    name: 'add-student',
                    path: 'add',
                    component: AddStudent
                },
                {
                    name: 'delete-student',
                    path: 'delete',
                    component: DeleteStudent
                },
                {
                    name: 'take-attendance',
                    path: 'takeAttendance',
                    component: TakeAttendance
                },
                {
                    name: 'view-attendance',
                    path: 'viewAttendance',
                    component: ViewAttendance
                },
                {
                    name: 'edit-attendance',
                    path: 'editAttendance',
                    component: EditAttendance
                },
            ]
        }
    ]
});

export default router;