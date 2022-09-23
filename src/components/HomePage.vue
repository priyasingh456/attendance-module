<template>
        <div class="main-section">
            <div>
                <NavBar />
            </div>
            <div class="body-sec">
                <div class="left-sec">
                    <div class="user-info">
                        <img src="https://english.iswnews.com/wp-content/uploads/2020/10/Human-avatar.png" alt="" />
                        <p class="mtt-p">{{user}}</p>
                    </div>
                    <div class="hr"></div>
                    <div class="attendance-sec">
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <router-link to="#" >Profile</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-clipboard-user"></i>
                            <router-link :to="{name: 'take-attendance'}" >Take Attendance</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-eye"></i>
                            <router-link :to="{name: 'view-attendance'}" >View Attendance</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <router-link :to="{name: 'edit-attendance'}" >Edit Attendance</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-users"></i>
                            <router-link :to="{name: 'all-students'}" >All Students</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-plus"></i>
                            <router-link :to="{name: 'add-student'}" >Add Student</router-link>
                        </div>
                        <div>
                            <i class="fa-solid fa-user-xmark"></i>
                            <router-link :to="{name: 'delete-student'}" >Delete Student</router-link>
                        </div>
                    </div>
                </div>
                <div class="right-sec">
                    <router-view></router-view>
                </div>
            </div>
        </div>
</template>


<script>
import NavBar from './NavBar.vue';
export default {
    name: "HomePage",
    components: { NavBar },

    data(){
        return {
            user: null
        }
    },

    created(){
        const email = localStorage.getItem('email');
        if(email !== null){
            this.user = email;
        }else{
            this.user = ''
        }
    }

    
}
</script>

<style scoped>

.main-section{
    height: 800px;
    width: 100%;
    overflow: hidden;
}

.body-sec{
    width: 100%;
    display: flex;
}

.left-sec{
  width: 23%;
  height: 100vh;
  background-color: rgb(203, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-sec{
  height: 100vh;
  width: 77%;
  overflow: auto;
}

.user-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: .5rem 0;
    margin-top: 1.5rem;
}

.user-info img{
    width: 33%;
}

i{
    opacity: .7;
}

.user-info p{
    font-size: 1rem;
}

.hr{
    text-align: center;
    width: 97%;
}

.attendance-sec,
.extra-info{
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 1rem 0;
    margin-left: 2.5rem;
}

.extra-info {
    margin-left: -.2rem;
}

.attendance-sec div, .extra-info div{
    margin: .6rem;
}

.attendance-sec a,
.extra-info a{
    text-decoration: none;
    color: initial;
    margin: .4rem;
    font-size: .9rem;
}


</style>