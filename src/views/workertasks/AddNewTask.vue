<template>
	<div>
	
		<v-container fluid grid-list-xl py-0>
			<app-card
				:heading="$t('message.NewTask')"
				customClasses="mb-30"
				>
				<v-form v-model="form1.valid">
					<v-text-field
						label="Task description"
						v-model="form1.name"
						:rules="form1.nameRules"
						:counter="100"
						required></v-text-field>
					
				</v-form>

                    
					<v-dialog
						ref="dialog"
						v-model="modal"
						:return-value.sync="date"
						persistent
						width="290px"
					>
					<template v-slot:activator="{ on }">
						<v-text-field
							v-model="date2"
							label="Start date of task"
							prepend-icon="event"
							readonly
							v-on="on"
						></v-text-field>
					</template>
							<v-date-picker v-model="date2" scrollable>
							<div class="flex-grow-1"></div>
							<v-btn text color="primary" @click="modal = false">Cancel</v-btn>
							<v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
						</v-date-picker>
					</v-dialog>
				
                <v-btn class="ma-2" color="success">Submit</v-btn>
			</app-card>
		
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      form1: {
        valid: false,
        name: "",
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 10 || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ]
      },
       date: null,
      date1: null,
      date2: new Date().toISOString().substr(0, 10),
      menu: false,
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log("form submit");
      }
    }
    
  }
};
</script>
