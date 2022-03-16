<template>

    <v-card :color="color" theme="dark" class="mb-3 zoom" >

        <div class="d-flex flex-no-wrap justify-space-between">

            <div>
                <v-card-title class="text-h5">
                    {{ indicator.indicatorName }}
                </v-card-title>

                <v-card-subtitle class="ps-10">
                    <ul>
                        <li v-for="item in listConfig" :key="item">
                        {{ item }}
                        </li>
                    </ul>
        
                </v-card-subtitle>

                <v-card-actions class="ps-5">
                    <v-btn class="ml-2 btn-edit" icon="mdi-cog" variant="outlined"></v-btn>
                    <v-btn @click="remove()" class="ml-2 btn-delete" icon="mdi-delete-circle" variant="outlined" ></v-btn>
                </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="150" rounded="0">
                <v-img class="rounded-xl" :src="img_card"></v-img>
            </v-avatar>

        </div>

    </v-card>

</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import useBacktest from '../composables/useBacktest'

    const { removeIndicator, macdResumen, donchianChannelsResumen, bollingerBandsResumen, ichimokuResumen } = useBacktest()

    const props = defineProps(['indicator', 'index'])
    const listConfig = ref([])
    const colorList = [ "indigo-darken-3", "indigo-lighten-1", "indigo-lighten-3", "indigo-lighten-5"]
    let img_card = ""
    let color = ""

    const configSTR = computed( () => {
        const lista = []
        if(  props.indicator.indicatorName === "MACD"){
            color = colorList[ props.index ]
            img_card = "https://res.cloudinary.com/lumayo/image/upload/v1645910477/ma_lybvuq.png"
            for (const iterator of props.indicator.config) {
                
                lista.push(macdResumen(iterator))
                
            }
        }else if(  props.indicator.indicatorName === "ichimokuClouds"){
            color = colorList[ props.index ]
            img_card ="https://res.cloudinary.com/lumayo/image/upload/v1645909786/ichimoku_mglko7.png"
            for (const iterator of props.indicator.config) { 
                lista.push(ichimokuResumen(iterator)) 
            }
        }
        else if(  props.indicator.indicatorName === "DonchianChannels"){
            color = colorList[ props.index ]
            img_card ="https://res.cloudinary.com/lumayo/image/upload/v1646446457/donchianchannels_waircd.png"
            for (const iterator of props.indicator.config) { 
                lista.push(donchianChannelsResumen(iterator)) 
            }
        }

        else if(  props.indicator.indicatorName === "BollingerBands"){
            color = colorList[ props.index ]
            img_card ="https://res.cloudinary.com/lumayo/image/upload/v1646614788/bollinger_jzrcuo.png"
            for (const iterator of props.indicator.config) { 
                lista.push(bollingerBandsResumen(iterator)) 
            }
        }
        return lista
    })

    listConfig.value =  configSTR.value

    const remove = () => {
        
        removeIndicator( props.indicator.id )
    }
    
</script>

<style scoped>
    .zoom {
        position: relative;
        will-change: transform;
        transition: transform 450ms;
    }
    .zoom:hover{
        transition: transform 125ms;
        transform: scale(1.02);
    }

    .btn-edit{
        position: absolute;
        bottom: 20px;
    }

    .btn-delete{
        position: absolute;
        left: 75px;
        bottom: 20px;
    }
</style>