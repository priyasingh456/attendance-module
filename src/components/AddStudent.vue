<template>
  <main class="add-container">
    <div class="inside-con">
        <h3>Add a Student</h3>
        <hr />
        <form @submit.prevent="addStudent" class="add-form">
            <label for="name">Student Name</label>
            <input type="text" placeholder="Enter student name" id="name" class="mtt-p" v-model="name" />
            <button type="submit">Add Student</button>
        </form>
    </div>
  </main>
</template>

<script>

import axios from 'axios';

export default {
    name: "AddStudent",

    data(){
        return {
            name: '',
            user: null
        }
    },

    methods: {
        validateName(data) {
            const name = data.name;
            
            if (name === '') {
                this.$toast.error('Username Field Required');
                return false;
            }
            return true;
        },
        async addStudent(){
            
            const data = {
                name: this.name,
            };
            //console.log(data)
            
            if(this.validateName(data)) {
                const addStudentData = {
                    name: data.name,
                }
                console.log(addStudentData);
                const response = await axios.post(`https://attend-bakend.onrender.com/api/student/add`, addStudentData, {
                  header: {
                    'Content-type': 'application/json',
                  }
                })
                .then((response) => {
                    console.log(response);
                    this.$toast.success('Student Successfully Added');
                    this.$router.routes.push({ path: '/' })
                })
                .catch((error) => {
                    console.log(error.message);
                });
                console.log(response)  
            }
            
        }
    },

    created(){
        const user = localStorage.getItem('email');
        if(user === null){
            this.$toast.error('You are not allowed to add student', {
               duration: 3000
            });
            this.$router.routes.push({ path: '/' })
        }

    }

}
</script>

<style scoped>
@import '@/css/index.css';
@import '@/css/utility.css';

.add-container{
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 3rem;
}

.inside-con{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
}

.inside-con h3{
    margin-right: 6.8rem;
}

.add-form{
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
}

.add-form label{
    font-size: 1.1rem;
}

.add-form input{
    padding: .5rem;
    border: 1px solid rgb(192, 192, 192);
    border-radius: 4px;
}

.add-form button{
    margin-top: 1.3rem;
    padding: .6rem;
    background-color: rgb(3, 136, 136);
    border-radius: 4px;
    border: none;
    color: white;
}

</style>