<template>
    <div>
        <template v-if="size">
            <v-table fixed-header >

                <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Ticker</th>
                        <th class="text-left">Capital</th>
                        <th class="text-left">Margen</th>
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
                        <td>$ {{ item.capital }}</td>
                        <td>{{ item.margen }}</td>
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
                                    @click="startBacktest(index)"
                                    class="mx-2"
                                    icon
                                    color="success">
                                    <v-icon>mdi-play-circle-outline</v-icon>
                                </v-btn>
                                <v-btn
                                    @click="deleteBacktest(index)"
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
        <template v-else>
            <div class="text-center my-10">
                <h1>No tienes registros de pruebas guardados...</h1>
            </div>
        </template>

    </div>

</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'

    const store = useStore()
    const router = useRouter()
    const email = computed( () => store.state.auth.email )

    onMounted( () => {
       store.dispatch('backtest/loadMyBacktests', email.value ) 
    })
    onUnmounted( () => {
       store.dispatch('backtest/clearMyBacktest') 
    })
    const myBacktests = computed(() => store.state.backtest.backtests )
    const size = computed( () => store.getters["backtest/getBacktestsLen"])

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

    const startBacktest = async(value)  => {
        const selectItem = myBacktests.value[value]
        const { capital, ticker, date_start, date_end, interval, indicators_data, margen  } = selectItem
        const dateStart = date_start.split('T')[0]+" "+date_start.split('T')[1]
        const dateEnd = date_end.split('T')[0]+" "+date_end.split('T')[1]
        const data = { capital, ticker, dateStart, dateEnd, interval, margen, indicatorsData:indicators_data }
        console.log(selectItem)
        const { ok, message } = await store.dispatch("backtest/getBacktest", data )

        if ( !ok ) {
            Swal.fire('Error', message, 'error')
        } 
        else  {
            Swal.fire(
            {
                title:'Backtest Exitoso',
                icon:'success',
                allowEscapeKey:false,
                allowOutsideClick:false
            }
            ).then((result) => 
                {
                    if (result.isConfirmed) {
                        router.push({ name: 'backtestResult', params: { show: true } }) 
                    } 
                }
            )
        }
    }


    const deleteBacktest = async(value)  => {
        const selectItem = myBacktests.value[value]
        const { id  } = selectItem

        Swal.fire({
            title: 'Estas seguro?',
            text: "Este registro sera eliminado permanentemente!...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        })
        .then( async(result) => {
            if (result.isConfirmed) {

                const { ok, message } = await store.dispatch("backtest/deleteBacktest", id )
        
                if ( !ok ) {
                    Swal.fire({
                        title: 'Error',
                        text: message,
                        icon:'error'
                    })
                }
                else {
                    Swal.fire({
                        title:'Eliminado',
                        text: message,
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    }) 
                }  
            }
        })    
    }



</script>

<style>

</style>