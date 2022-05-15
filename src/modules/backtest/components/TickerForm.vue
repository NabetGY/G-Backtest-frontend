<template>

    <v-col cols="12"  sm="3" class="my-5 border-md px-5" >
        
        <div class="mb-1 py5">
            
            <span  class="font-weight-bold">Selecciona un Ticker:</span>
            <v-row>
                <v-col cols="10">
                    <SimpleTypeahead
                        class="mb-5 "
                        placeholder="APPL"
                        :items="tickers"
                        :minInputLength="1"
                        @selectItem="selectItem"
                        :itemProjection="
                            (item) => { 
                                return item.symbol;
                        }"
                    />
                </v-col>
                <v-col cols="2" class="my-3">
                    <v-icon color="grey-darken-2" >mdi-clipboard-text-search-outline</v-icon>
                </v-col>
            </v-row>
        </div>

        <div class="mb-1">
            <v-text-field append-icon="mdi-cash-multiple"
            clear-icon="mdi-close-circle"
            clearable 
            min=0 type="number" v-model="tickerData.capital" label="Capital" required>
            </v-text-field>
        </div>

        <div class="mb-1">
            <v-select
                append-icon="mdi-margin"
                :items="margenList"
                v-model="tickerData.margen"
                label="Margen"
            ></v-select>
        </div>

        <div class="mb-5">
            <span class="font-weight-bold">Fecha inicial: </span>
            <v-row>
                <v-col cols="10">
                    <datepicker v-model="dateStart" :upper-limit="dateLimit" typeable />
                </v-col>
                <v-col cols="2" class="my-3">
                    <v-icon color="grey-darken-2">mdi-calendar-arrow-right</v-icon>
                </v-col>
            </v-row>
        </div>

        <div class="mb-7">
            <span class="font-weight-bold">Fecha final: </span>
            <v-row>
                <v-col cols="10">
                    <datepicker v-model="dateEnd" :upper-limit="dateLimit" typeable />
            </v-col>
                <v-col cols="2" class="my-3">
                    <v-icon color="grey-darken-2">mdi-calendar-arrow-left</v-icon>
                </v-col>
            </v-row>
        </div>

        <div class="mb-1">
            <v-select append-icon="mdi-timetable"
                v-model="tickerData.interval" 
                :items="listPeriod" 
                label="Periodo"
            ></v-select>
        </div>

        <div class="d-flex flex-column">
            <v-btn @click="startBacktest" color="primary">Iniciar</v-btn>
            <v-btn @click="onClear" class="mt-2" color="warning">Limpiar</v-btn>
        </div>

    </v-col>
    
</template>

<script setup>

import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' //Optional default CSS
import Datepicker from 'vue3-datepicker'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

    const store = useStore()
    const dateLimit = ref(new Date())
    const dateStart = ref(new Date())
    const dateEnd = ref(new Date())
    const router = useRouter()


    const tickerData = ref(
        {
            capital:0,
            margen:"",
            ticker: "",
            dateStart: "",
            dateEnd: "",
            interval: "",
            email:""
        }
    )

    const dateFormat= ( date ) => {
        return date.getUTCFullYear() + "-" +
        ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" +
        ("0" + date.getUTCDate()).slice(-2) + " " +
        ("0" + date.getUTCHours()).slice(-2) + ":" +
        ("0" + date.getUTCMinutes()).slice(-2) + ":" +
        ("0" + date.getUTCSeconds()).slice(-2)
    }


    const listPeriod = ['30 Minutos', '1 Hora', '1 Dia']
    const margenList = [ '1:1', '2:1', '3:1', '4:1', '5:1' ]

    const tickers = computed( () => store.state.backtest.tickers )
    const selectItem = ( item ) =>{
        tickerData.value.ticker = item.symbol
    }
    const startBacktest = async() => {
        const email = computed( () => store.state.auth.email )
        tickerData.value.dateStart = dateFormat( dateStart.value )
        tickerData.value.dateEnd = dateFormat( dateEnd.value )
        tickerData.value.email = email.value
        const size = computed( () => store.getters["backtest/getIndicatorsLen"] )

        if( tickerData.value.capital === 0 || tickerData.value.margen === "" ||
         tickerData.value.ticker === "" ||  tickerData.value.interval === "" || size.value===0){
             console.log(tickerData.value)
             Swal.fire({
                title: 'Advertencia',
                text: 'Por favor llene todos los campos y agregue por lo menos un indicador',
                icon:'warning'
            })
         }else{

        
            const { ok, message } = await store.dispatch("backtest/startBacktest", tickerData.value )

            if ( !ok ) {
                Swal.fire('Error', message, 'error')
            } 
            else  {
                Swal.fire(
                {
                    title:'Baktest Exitoso',
                    icon:'success',
                    allowEscapeKey:false,
                    allowOutsideClick:false
                }
                ).then((result) => 
                    {
                        if (result.isConfirmed) {
                            router.push({ name: 'backtestResult', params: { show:true } }) 
                        } 
                    }
                )
            }
         }
    }


    const onClear = async() =>{
        await store.dispatch("backtest/clearFormBacktest")
        tickerData.value.capital=0
        tickerData.value.margen=""
        tickerData.value.ticker= ""
        tickerData.value.dateStart= ""
        tickerData.value.dateEnd= ""
        tickerData.value.interval= ""
        tickerData.value.email=""
    }
        
</script>

<style>

    .bg-gray{
        background-color: #EFEFEF;
    }

    
    .simple-typeahead-input, div.v3dp__input_wrapper input{
        height: 56px;
        padding-left: 20px;
        width: 100%;
        background-color: #EFEFEF;
        border-bottom: 1px solid #9D9D9D;
        transition: 0.3s;

    }

    .simple-typeahead-input:hover, div.v3dp__input_wrapper input:hover{

        background-color: #cfcece;

    }

    .borderRadius {
        border: 1px solid rgb(141, 139, 139);
        border-radius: 2px;
    }

    .py5{
        padding-top: 5px;
        padding-bottom: 5px;
    }

</style>