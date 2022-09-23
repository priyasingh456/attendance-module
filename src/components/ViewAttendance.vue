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
        <div v-else v-for="attendanceList in attendanceLists" :key="attendanceList.id">
          <h4>View Attendance
          <div class="float-end">
            <p class="small-font">{{attendanceList.date}}</p>
            <button class="btn btn-sm btn-blue me-2" @click="previous">Previous</button>
            <button class="btn btn-sm btn-blue" @click="next">Next</button>
          </div>
          </h4>
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
                        <label><input type="radio" :name=student.roll />Present</label>
                    </div>
                </td>
                <td>
                  <div class="radio">
                        <label><input type="radio" :name=student.roll checked />Absent</label>
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
import { getAttendance } from "@/services/attendanceList";

export default {
  name: "AttendancePage",

  data(){
      return {
          status: 'LOADING',
          students: [],
          error: null,
          page: 1,
          present:[],
          attendanceLists: []
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

      async fetchAttendanceList(){
        try{
            this.attendanceLists = await getAttendance();
        }catch(error){
            console.log(error.message);
            this.error = error;
        }
      }
  },

  created(){
    this.fetchStudents();
    console.log(this.students)
    this.fetchAttendanceList();
    console.log(this.attendanceList)
  },
}
</script>



<style scoped>

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

.btn-blue{
  background-image: linear-gradient( 178.6deg,  rgb(56, 249, 249) -5.3%, rgb(21, 126, 143) 92.7% );
  color: white;
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

tr:nth-child(2n+1){
background-color: rgb(234, 253, 253);
}

tr td:nth-child(1){
text-align: center;
}

.small-font{
    font-size: 1rem;
}


</style>