<template>
	<div>
		<!-- <page-title-bar></page-title-bar> -->
      <v-container fluid class="grid-list-xl pt-0">
         <div class="crypto-dash-wrap"> 
              <v-row>
               <!-- Coin List -->
               <app-card
                  colClasses="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  customClasses="mb-0"
                  :heading="$t('message.workertasks')"
                  :fullScreen="true"
                  :reloadable="true"
                  :closeable="true" 
               >
                  <tasks-list></tasks-list>
               </app-card>
               
            </v-row>
         </div>   
      </v-container>
	</div>
</template>

<script>

// Widgets 

import { ChartConfig } from "Constants/chart-config";




import TasksList from "Components/Widgets/TasksList";

export default {
   components:{
       TasksList,
    },
   data() { 
    return {
      //  statsCardData,
       ChartConfig,
         bitcoin:{
            icon : "cc BTC primary--text",
            name : "Bitcoin",
            color : "primary",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.primary,            
         },
         ethereum:{
            icon : "cc ETH success--text",
            name : "Ethereum",
            color : "success",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.success,
         },
         litecoin:{
            icon : "cc LTC error--text",
            name : "Litecoin",
            color : "warn",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.danger,
           
         },
         zcash:{
            icon : "cc ZEC-alt info--text",
            name : "Zcash",   
            color : "accent",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.info,
            
         }      
      }
   }
}
</script>
