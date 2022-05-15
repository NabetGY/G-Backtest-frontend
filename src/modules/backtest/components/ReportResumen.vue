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
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Capital inicial</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">$ {{  numberFormat( resumen.capital ) }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Capital final</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">$ {{  numberFormat( resumen.capitalFinal ) }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Win Rate</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ numberFormat( resumen.winrate ) }}%</div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Total Profit/Loss</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">$ {{ numberFormat( resumen.Total_P_L ) }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">P/L %</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">{{ numberFormat( resumen.P_L_porcent ) }}%</div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Max Profit</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">$ {{ numberFormat( resumen.max_profit ) }} </div>
            </v-col>

            <v-col cols="6">
                <div class="font-weight-bold text-right pa-3 border-left bg-white">Max Loss</div>
            </v-col>
            <v-col cols="6">
                <div class="pa-3 border-right bg-white">$ {{ numberFormat( resumen.max_loss ) }} </div>
            </v-col>

        </v-row>

        <template v-if="show">
            <v-btn
                @click="saveBacktest"
                color="success"
            >
                Guardar Prueba
            </v-btn>
        </template>
        
        
    </v-container>

</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import useBacktest from '../composables/useBacktest'

    const store = useStore()

    const show = computed( () => store.state.backtest.show )

    const { numberFormat } = useBacktest()

    const { resumen } = store.state.backtest.dataBacktest

    const saveBacktest = async() => {
        const { ok, message } = await store.dispatch("backtest/saveBacktest")

        console.log(ok, message)
    }

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