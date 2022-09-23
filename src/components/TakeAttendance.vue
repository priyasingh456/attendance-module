<template>
      <main class="attendance-con">
        <div class="inside-con">
          <div v-if="status === 'LOADING'" class="mttt-p">
              <AppSpinner message="Please wait while we fetch workshops" />
          </div>
          <div v-else-if="status === 'ERROR'">
              <div class="alert alert-danger" role="alert">
                  {{error.message}}
              </div>
          </div>
          <div v-else>
            <h4>Take Attendance</h4>
            <hr />
            <div class="table-sec">
              <table>
                <tr>
                  <th>Enrollment Number</th>
                  <th>Student Name</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
                <tr v-for="student in students" :key="student.id">
                  <td>{{student.roll}}</td>
                  <td>{{student.name}}</td>
                  <td>
                      <div class="radio">
                          <label><input type="radio" @click="setPresent(student.roll, 1)" :name=student.roll />Present</label>
                      </div>
                  </td>
                  <td>
                    <div class="radio">
                          <label><input type="radio" @click="setPresent(student.roll, 0)" :name=student.roll checked />Absent</label>
                      </div>
                  </td>
                </tr>
              </table>
              <button class="save-btn" type="submit" @click="onClickSubmit" >Save Attendance</button>
            </div>
          </div>
        </div>
      </main>
</template>

<script>

import axios from 'axios';
import { getStudentsByPage } from "@/services/allStudent";

export default {
    name: "AttendancePage",

    data(){
        return {
            status: 'LOADING',
            students: [],
            error: null,
            page: 1,
            present:[],
            user: null,
        };
    },

    methods: {
        async fetchStudents(){
            try{
                this.students = await getStudentsByPage(this.page);
                this.status = 'LOADED';
            }catch(error){
                console.log(error.message);
                this.status = 'ERROR';
                this.error = error;
            }
        },

        async onClickSubmit(){
          const email = localStorage.getItem('email');
          let currentDate = new Date();
          let cDay = currentDate.getDate();
          let cMonth = currentDate.getMonth() + 1;
          let cYear = currentDate.getFullYear();
          let date = `${cYear}`;
          if(cMonth <= 9){
            date = `0${cMonth}/` + date;
          }else{
            date = `${cMonth}/` + date;
          }

          if(cDay <= 9){
            date = `0${cDay}/` + date;
          }else{
            date = `${cDay}/` + date;
          }

          const sendData = {
            "teacherName" : email,
            "date" : date,
            "presentList": this.present
          }
          
          await axios.post(`https://attend-bakend.onrender.com/api/atten/update`, sendData, 
          {
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then((response) => {
              console.log(response);
              this.$toast.success('Successfully saved attendance');
              this.$router.push('/');
          })
          .catch((error) => {
              console.log(error.message);
              this.$toast.error('Attendance of this date has already been taken');
          });          
        },

        setPresent(roll, status){
          if(status == 0){
            return;
          }
          for(let i = 0; i < this.present.length; i++){
            if(this.present[i] == roll){
              return;
            }
          }
          this.present.push(roll);
        }
    },

    created(){
      this.fetchStudents();
      console.log(this.students)

      const user = localStorage.getItem('email');
      if(user === null){
        this.$toast.error('You are not allowed to take attendance', {
          duration: 3000
        });
        this.$router.push('/');
      }
    },
}
</script>



<style scoped>

@import '@/css/index.css';
@import '@/css/utility.css';

.attendance-con{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inside-con{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
}

.table-sec{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
}

table, th, td {
  border: 1px solid rgb(191, 190, 190);
  border-collapse: collapse;
  padding: .7rem 2.5rem;
}

th{
  padding: 1.5rem 2.5rem;
  font-size: .9rem;
  background-color: rgb(187, 251, 251);
}

td{
  font-size: .9rem;
}

input[type=radio] {
  border: 0px;
  width: 100%;
  height: 1em;
}

.save-btn{
  margin-top: 2rem;
  background-color: green;
  color: white;
  padding: .5em 1rem;
  border: none;
  border-radius: 4px;
}

tr:nth-child(2n+1){
  background-color: rgb(234, 253, 253);
}

tr td:nth-child(1){
  text-align: center;
}

</style>