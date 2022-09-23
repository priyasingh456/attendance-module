<template>
    <nav class="nav-bar">
        <div class="web-title">
            <i class="fa-solid fa-bars"></i>
            <h1>Attendance Module</h1>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Student name" />
            <button type="submit">Serach</button>
        </div>
        <div class="username-sec">
            <p>{{user}}</p>
            <p v-on:click="logout">{{status}}</p>
        </div>
    </nav>
</template>



<script>
export default {
    name: 'NavBar',

    data: function() {
        return {
            user: null,
            status: null
        }
    },

    created(){
        const email = localStorage.getItem('email');
        if(email !== null){
            this.user = email;
            this.status = 'Logout'
        }else{
            this.user = "";
            this.status = 'Login'
        }
    },

    methods: {
        logout() {
            if(this.status === 'Logout'){
                localStorage.removeItem('email');
            }
            this.$router.push({ path: '/login' })
        }
    }

    
}
</script>



<style scoped>

@import '@/css/index.css';
@import '@/css/utility.css';

.nav-bar{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-image: linear-gradient( 178.6deg,  rgba(2,224,224,1) -5.3%, rgba(12,82,92,1) 92.7% );
    color: white;
    position: relative;
}

.web-title{
    display: flex;
}

.web-title h1{
    font-size: 1.7rem;
    margin-top: 1rem;
}

.web-title i{
    display: none;
}

.search-bar{
    margin: 1rem 0;
}

.search-bar input{
    padding: .8rem;
    border-radius: 2.5px;
    border: initial;
    margin: 0 .3rem;
}

.search-bar button{
    position: absolute;
    padding: .8rem 1.5rem;
    border-radius: 2.5px;
    border: initial;
    background-color: rgb(237, 247, 253);
}

.username-sec{
    display: flex;
    font-size: 1rem;
}

.username-sec p{
    margin: 1.5rem;
    cursor: pointer;
}

.remove-underline{
    color: white;
}

@media (max-width: 600px){
    .web-title i{
        font-size: 1.3rem;
        display: initial;
        margin-top: 1.3rem;
        margin-right: 1rem;
    }

    .web-title h1{
        font-size: 1.1rem;
        margin-top: 1.3rem;
    }

    .search-bar{
        margin: 1rem 0;
    }

    .search-bar input{
        width: 60%;
        padding: .5rem .5rem;
        border-radius: 2.5px;
    }

    .search-bar button{
        padding: .5rem .5rem;
    }

    .username-sec{
        display: none;
    }

}

</style>