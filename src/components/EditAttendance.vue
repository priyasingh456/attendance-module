<template>
  <main class="edit-attendance-con">
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
            <h4>Edit Attendance</h4>
            <hr />
            <div class="table-sec">
              <table>
                <tr>
                  <th>Enrollment Number</th>
                  <th>Student Name</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
                <tr v-for="student in students" :key="student.roll">
                  <td>{{student.roll}}</td>
                  <td>{{student.name}}</td>
                  <td>
                      <div class="radio">
                          <label><input type="radio" id='regular' :name=student.roll>Present</label>
                      </div>
                  </td>
                  <td>
                    <div class="radio">
                          <label><input type="radio" id='regular' :name=student.roll>Absent</label>
                      </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>
</template>

<script>

import { getStudentsByPage } from "@/services/allStudent";

export default {
    name: 'EditAttendance',

    data(){
        return {
            status: 'LOADING',
            students: [],
            error: null,
            page: 1,
            user: null
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
    },
    created(){
      this.fetchStudents();
      console.log(this.students)

      const user = localStorage.getItem('email');
      if(user === null){
        this.$toast.error('You are not allowed to edit attendance', {
          duration: 3000
        });
        this.$router.push('/');
      }
    },
}
</script>



<style scoped>

.edit-attendance-con{
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

input[type=radio] {
  border: 0px;
  width: 100%;
  height: 1em;
}

th{
  padding: 1.5rem 2.5rem;
  font-size: .9rem;
  background-color: rgb(187, 251, 251);
}

td{
  font-size: .9rem;
}

tr:nth-child(2n+1){
  background-color: rgb(234, 253, 253);
}

tr td:nth-child(1){
  text-align: center;
}

</style>