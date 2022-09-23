<template>
      <div class="all-student">
        <div v-if="status === 'LOADING'" class="mttt-p">
            <AppSpinner message="Please wait while we fetch workshops" />
        </div>
        <div v-else-if="status === 'ERROR'">
            <div class="alert alert-danger" role="alert">
                {{error.message}}
            </div>
        </div>
        <div v-else class="table-content">
          <h2>List of Students
            <div class="float-end">
              <button class="btn btn-sm btn-blue me-2" @click="previous">Previous</button>
              <button class="btn btn-sm btn-blue" @click="next">Next</button>
            </div>
          </h2>
          <div class="table-sec">
            <table>
              <tr>
                <th>Enrollment Number</th>
                <th>Student Name</th>
              </tr>
              <tr v-for="student in students" :key="student.id">
                <td>{{student.roll}}</td>
                <td>{{student.name}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
</template>



<script>

import { getStudentsByPage } from "@/services/allStudent";

export default {
    name: "AllStudents",

    data(){
        return {
            status: 'LOADING',
            students: [],
            error: null,
            page: 1
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
        previous(){
            if(this.page !== 1){
                this.page = this.page - 1;
                this.fetchStudents();
            }
        },
        next(){
            this.page = this.page + 1;
            this.fetchStudents();
        }

    },
    created(){
      
      this.fetchStudents();
      console.log(this.students)
    },
}
</script>



<style scoped>

.all-student{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8rem;
}

.main-section{
  width: 100%;
}
.body-section{
  width: 100%;
  display: flex;
}

.left-sec{
  width: 22%;
  height: 100vh;
  background-color: rgb(203, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-sec{
  width: 88%;
}

.right-sec h2{
  width: 98%;
  font-size: 1.4rem;
  text-align: left;
  margin-top: 4rem;
}

.table-sec{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  overflow: auto;
}

.btn-blue{
  background-image: linear-gradient( 178.6deg,  rgb(56, 249, 249) -5.3%, rgb(21, 126, 143) 92.7% );
}

table, th, td {
  border: 1px solid rgb(192, 192, 192);
  border-collapse: collapse;
  padding: .7rem 7.5rem;
}

.table-content{
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

th{
  padding: 1.5rem 7.5rem;
  font-size: 1rem;
  background-color: rgb(187, 251, 251);
}

tr:nth-child(2n+1){
  background-color: rgb(234, 253, 253);
}

tr td:nth-child(1){
  text-align: center;
}

@media (max-width: 600px){

}

</style>