<template>
  <main class="delete-container">
    <div class="inside-con">
        <h3>Delete a Student</h3>
        <hr />
        <form @submit.prevent="deleteStudent" class="delete-form">
            <label for="rollno">Student Roll No.</label>
            <input type="number" placeholder="Enter student rollno" id="rollno" class="mtt-p" v-model="roll"/>
            <button type="submit">Delete Student</button>
        </form>
    </div>
  </main>
</template>

<script>

import axios from 'axios';

export default {
    name: 'DeletStudent',

    data(){
        return {
            roll: ''
        }
    },

    methods: {
        validateRollNo(roll) {
            
            if (roll === '') {
                this.$toast.error('Rollno Field Required');
                return false;
            }
            return true;
        },
        async deleteStudent(){
            
            const rollno = this.roll;
            
            if(this.validateRollNo(rollno)) {
                const rollInt = parseInt(rollno);
                console.log(rollInt + "22")
                const deleteStudentData = {
                    roll: rollInt,
                }
                console.log(deleteStudentData);
                const response = await axios.post(`https://attend-bakend.onrender.com/api/student/delete`, deleteStudentData, {
                    headers: { 
                        'Content-type': 'application/json',
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.$toast.success('Student Successfully Deleted');
                    this.$router.push('/home');
                })
                .catch((error) => {
                    console.log("2" + error.message);
                });
                console.log(response)  
            }
            
        }
    },

    created(){
        const user = localStorage.getItem('email');
        if(user === null){
            this.$toast.error('You are not allowed to delete student', {
               duration: 3000
            });
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>

@import '@/css/index.css';
@import '@/css/utility.css';

.delete-container{
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

.delete-form{
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
}

.delete-form label{
    font-size: 1.1rem;
}

.delete-form input{
    padding: .5rem;
    border: 1px solid rgb(192, 192, 192);
    border-radius: 4px;
}

.delete-form button{
    margin-top: 1.3rem;
    padding: .6rem;
    background-color: rgb(3, 136, 136);
    border-radius: 4px;
    border: none;
    color: white;
}

</style>