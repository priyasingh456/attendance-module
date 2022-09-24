<template>
  <main class="main-login">
        <div class="login-container">
            <form class="left-side" id="login" @submit.prevent="handleLogin">
                <div><h1>Login into the App</h1></div>
                
                <div>
                    <input type="email" placeholder="Email" class="placeholder-c" id="email" v-model="email">
                </div>
                <div>
                    <input type="password" placeholder="Password" class="placeholder-c" id="password" v-model="password">
                </div>
                
                <div>
                    <button type="submit" class="login-btn"><strong>LOGIN</strong></button>
                </div>
                <div>
                    <p class="forgot-pass"><router-link to="/resetpassword" class="plain-link remove-underline white-txt">Forgot password?</router-link></p>
                </div>
                <div>
                    <p class="font-size-sm opacity2">Or Login with</p>
                </div>
                <div>
                    <i class="fa-brands fa-google icons"></i>
                    <i class="fa-brands fa-facebook-f icons"></i>
                    <i class="fa-brands fa-linkedin-in icons"></i>
                </div>
                <div>
                    <p><span class="font-size-lar">Don't have an account?</span> <strong><router-link to="/register" class="plain-link remove-underline white-txt">TEACHER? </router-link></strong><strong><router-link to="/" class="plain-link remove-underline white-txt"> STUDENT</router-link></strong></p>
                </div>
                <div>
                    <p class="font-size-sm opacity2">Copyright © 2022, Attendance-App All Rights Reserved</p>
                </div>
                <div>
                    <p class="font-size-sm mt-n"><span class="blue-color">Terms od Use</span> | <span class="blue-color">Privacy Policy</span></p>
                </div>
            </form>
            <div class="right-side">
                <img src="https://cdn.wallpapersafari.com/56/73/K5SDWh.png">
            </div>
        </div>
    </main>
</template>

<script>

import axios from 'axios';


export default {
   name: 'LoginPage',
   data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        validateFormData(data) {
            const email = data.email;
            const password = data.password;
            if (email === '') {
                this.$toast.error('Email Field Required');
                return false;
            }
            let passValid = () => {
                var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                return re.test(password);
            };
            if (password == '') {
                this.$toast.error('Plese enter the password field');
                return false;
            }
            let passvalid = passValid();
            if (!passvalid) {
                this.$toast.error(
                'Password must be at least eight characters and include a mix of upper and lower case letters, numbers, and symbols'
                );
                return false;
            }
            return true;
        }, 
        async handleLogin() {
            
            const data = {
                email: this.email,
                password: this.password,
            }
            //console.log(data)
            
            if(this.validateFormData(data)) {
                const registerData = {
                    email: data.email,
                    password: data.password
                }
                const response = await axios.post(`https://attend-bakend.onrender.com/api/users/login`, registerData, 
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        this.$toast.success('Successfully LoggedIn');
                        const {email} = response.data;
                        localStorage.setItem("email", email);
                        this.$router.push({ path: '/' })
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                console.log(response)
                
            }
            
        }
    }
}

</script>



<style scoped>

@import '@/css/index.css';
@import '@/css/utility.css';

.main-login{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 240, 241);
    font-size: 15px;
    box-sizing: border-box;
    color: white;
}
.login-container{
    width: 60%;
    background-image: linear-gradient( 178.6deg,  rgba(2,224,224,1) -5.3%, rgba(12,82,92,1) 92.7% );
    display: flex;
    align-items: center;
    margin-top: -.6rem;
    border-radius: 4px;
}
.left-side{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
.left-side div h1{
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
}
.left-side div input{
    width: 20rem;
    padding: .7rem;
    margin: .4rem 0;
    border: 1px solid rgb(255, 254, 254);
    background-color: initial;
    border-radius: 4px;
    color: rgb(254, 251, 251);
}
::placeholder{
    color: white;
    opacity: 1;
}
.icons{
    font-size: .8rem;
    margin: .5rem;
}
.white-txt:hover{
    color: #86f8f8;
}

.forgot-pass{
    margin-top: .3rem;
    margin-left: 13.5rem;
}

.login-btn{
    width: 20rem;
    padding: .6rem;
    margin: .4rem 0;
    border-radius: 4px;
    border: none;
    color: #01515c;
    cursor: pointer;
    font-size: .9rem;
}
.login-btn:hover{
    background-color: rgb(226, 228, 228);
}
.right-side{
    width: 41%;
    padding: 0;
}
.right-side img{
    width: 100%;
    height: 30rem;
    border-radius: 0 4px 4px 0;
    margin-bottom: -.2rem;
}
@media (max-width: 600px){
    .login-container{
        width: 85%;
    }
    .left-side{
        padding: 2.5rem 0;
        width: 100%;
    }
    
    .left-side div h2{
        margin-bottom: 2rem;
    }
    .left-side div input{
        width: 15rem;
    }
    ::placeholder{
        font-size: .8rem;
    }
    .login-btn{
        width: 16.5rem;
    }
    .right-side{
        display: none;
    }
}
.error-username{
    border: 1.2px solid rgb(222, 3, 3);
}

</style>