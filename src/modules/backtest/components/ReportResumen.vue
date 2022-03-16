<template>

    <v-container class="container bg-indigo-report py-3 rounded">

        <v-row class="pa-2">

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Operations</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ resumen.operations }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Win Rate</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ resumen.winrate }}%</div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Total Profit/Loss</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ resumen.Total_P_L }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">P/L %</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">% </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Max Profit</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ resumen.max_profit }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Max Loss</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ resumen.max_loss }} </div>
            </v-col>

        </v-row>
        
    </v-container>

</template>

<script setup>
import { useStore } from 'vuex'

    const store = useStore()

    const { resumen } = store.state.backtest.backtests[0]

</script>

<style>

    .bg-indigo-report{
        background-color: indigo;
        width: 500px;
    }

    .border-left{
        border-top-left-radius: 15px;
        border-end-start-radius: 15px;
    }

    .border-right{
        border-top-right-radius: 15px;
        border-end-end-radius: 15px;
    }

</style>