<template>
   <div>
      <v-card flat>
         <div class="table-responsive">
            <!--<app-section-loader :status="loader"></app-section-loader>-->
            <div class="mb-6">
					<v-btn 
						@click="changeBtn('pending')"
						:class="{primary: ispending}"
					>
						Active/pendingding
					</v-btn>
					<v-btn 
						class="ml-2"
						@click="changeBtn('completed')"
						:class="{primary: isCompleted}"
					>
						Completed
					</v-btn>
					
            </div>
            <v-data-table :headers="headers" :items="selectedTasks"   >
               <template v-slot:item="{ item }">
                  <tr>
							<!-- <td>{{ selectedTasks.map(function(x) 
								{              
								return x.serial_number; 
								}).indexOf(item.serial_number) }}
							</td> -->
							<td>{{ ("000" + item.taskId).slice(-3)}}</td>
							<td>{{ ("000" + item.taskStart.date).slice(-2) + ' . ' + ("000" + item.taskStart.month).slice(-2)+' . ' + ("0000" + item.taskStart.year).slice(-4)}}</td>
							<td>{{ item.taskDescription}}</td>
							<td>{{ ("000" + item.clientId).slice(-3)}}</td>
							<td>{{ item.status || 'pendingding' }}</td>
							
							<td>Detail</td>
						</tr>
               </template>
            </v-data-table>
			<a class="ma-2" color="success" href="/addNewTask">New Task</a>
					
         </div>      
      </v-card>
   </div>
</template>

<script>

import { coinsList } from 'Views/crypto/data.js';
import { ChartConfig } from "Constants/chart-config";
import  { auth, database } from "../../firebase";
import router from "../../router/default.js"
// import {
//     facebookAuthProvider,
//     googleAuthProvider,
//     twitterAuthProvider,
//     githubAuthProvider
// } from '../../../firebase';

export default {
	data () {	
		return {
			selectedTasks: [],
			ispending: true,
			isCompleted: false,
			selectedBtn: 'pending',
			ref: database,
			
         ChartConfig,
         coinsList,
			headers: [
				{
					text: 'taskId ',
					align: "cent      er",
					sortable: false,
					value: 'number'
				},
				{
					text: "taskStart",
					align: "center",
					sortable: false,
					value: "coins"
				},
				{
					text: "taskDescription",
					align: "left",
					sortable: false,
					value: "symbol"
				},
				{
					text: "clientId",
					align: "left",
					sortable: false,
					value: "price"
				},
				{
					text: "status",
					align: "left",
					sortable: false,
					value: "directVolume"
				},
				{
					text: "Details	",
					align: "left",
					sortable: false,
					value: "tag"
				}
            
        ],
		}
   },
	created(){
		this.getSelectedTasks();
	},
	methods: {
		getSelectedTasks(){
	
			var userId = auth.currentUser.uid;
			var temp_list = [];
			var selectedBtn1 = this.selectedBtn;
			database.ref("WorkerTasks/Workers/" + userId + "/Tasks").once('value').then(function(snapshot){
				console.log("variable initialize"); 
				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					console.log(childData);
					if(childData.status == selectedBtn1){
						temp_list.push(childData);
					}

				});
			});

			this.selectedTasks = temp_list;


		},
		addNew(){
			router.push('addNewTask');
		},
		changeBtn(value){
			switch(value){
			case 'pending':
				this.ispending = true;
				this.isCompleted = false;
			
			break;
			case  'completed':
				this.ispending = false;
				this.isCompleted = true;
			break;						
			default:
				this.ispending = true;
				this.isCompleted = false;
			break;
			}
		this.selectedBtn = value;
		this.getSelectedTasks();

      }
   }
}
</script>
