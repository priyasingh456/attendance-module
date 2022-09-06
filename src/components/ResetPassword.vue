<template>
    <main class="main-resetpass">
        <div class="resetpass-container">
            <form class="left-side" @submit.prevent="handleLogin">
                <div><h1>Reset Password</h1></div>
                
                <div>
                    <input type="text" placeholder="Email code" class="placeholder-c" id="email" >
                </div>
                <div>
                    <input type="password" placeholder="New Password" class="placeholder-c" id="password">
                </div>
                <div>
                    <input type="password" placeholder="New Confirm Password" class="placeholder-c" id="password">
                </div>
                
                <div>
                    <button type="submit" class="reset-btn"><strong>RESET</strong></button>
                </div>
                <div>
                    <p class="font-size-sm opacity2 mttt-p">Copyright © 2022, Meeting-App All Rights Reserved</p>
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


export default {
    name: 'ResetPassword',

}
</script>




<style scoped>

.main-resetpass{
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
.resetpass-container{
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
    margin-bottom: 2rem;
}
.left-side div input{
    width: 18rem;
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

.reset-btn{
    width: 19.5rem;
    padding: .7rem;
    margin: .4rem 0;
    border-radius: 4px;
    border: none;
    color: #01515c;
    cursor: pointer;
}
.reset-btn:hover{
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
    .resetpass-container{
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
    .reset-btn{
        width: 16.5rem;
    }
    .right-side{
        display: none;
    }
}
.error-username{
    border: 1.2px solid rgb(222, 3, 3);
}

.mttt-p{
    margin-top: 1.6rem;
}

</style>