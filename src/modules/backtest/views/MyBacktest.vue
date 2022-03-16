<template>

    <v-table fixed-header >

        <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left">Ticker</th>
                <th class="text-left">Capital</th>
                <th class="text-left">Fecha de inicio</th>
                <th class="text-left">Fecha final</th>
                <th class="text-left">Intervalo</th>
                <th class="text-left">Indicadores</th>
                <th class="text-left">Opciones</th>

            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, index) in myBacktests" :key="index" >
                <th>{{ index+1 }}</th>
                <td>{{ item.ticker }}</td>
                <td>{{ item.capital }}</td>
                <td>{{ dateFormat(item.date_start) }}</td>
                <td>{{ dateFormat(item.date_end) }}</td>
                <td>{{ item.interval }}</td>
                <td>
                    <v-expansion-panels variant="inset" class="my-1">
                        <v-expansion-panel 
                            title="Indicadores"
                            :text="listIndicatorFormat( item.indicators_data )"
                            >
                        </v-expansion-panel>
                    </v-expansion-panels>
                </td>
                <td>
                    <div class="d-flex">
                        <v-btn
                            class="mx-2"
                            icon
                            color="success">
                            <v-icon>mdi-play-circle-outline</v-icon>
                        </v-btn>
                        <v-btn
                            class="mx-2"
                            icon
                            color="error">
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </v-btn>
                    </div>
                </td>

            </tr>
        </tbody>
  
    </v-table>

</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex'

    const store = useStore()

    const myBacktests = computed(() => store.state.backtest.myBacktests )

    const dateFormat = ( date ) => {
        return date.split('T')[0]
    }

    const listIndicatorFormat = ( listIndicator ) => {
        let str = ""
        for (const item of listIndicator) {
            str = str + item.indicatorName + "\n"
            
        }
        return str
    }



</script>

<style>

</style>