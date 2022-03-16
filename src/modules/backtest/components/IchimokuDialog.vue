<template>

    <v-dialog v-model="dialog" activator="parent" :retain-focus="false">

        <v-card min-width="500"> 

            <v-toolbar color="primary">Nubes de Ichimoku</v-toolbar>

            <v-card-title>
                Configuracion
            </v-card-title>

            <div class="scroll-card px-6 py-1">

                <v-text-field
                    v-model="data.conversion"
                    min=0 
                    type="number"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Linea de Conversion"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="data.base"
                    min=0 
                    type="number"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Linea de Base"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="data.lagging"
                    min=0 
                    type="number"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Linea de Retraso"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="data.spanA"
                    min=0 
                    type="number"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Span A"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="data.spanB"
                    min=0 
                    type="number"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Span B"
                    required
                ></v-text-field>

            </div>
    
            <v-card-actions>

                <v-btn color="success" class="ma-2" @click="saveIndicator">
                    Guardar
                </v-btn>

                <v-btn color="primary" text @click="dialog = !dialog">
                    Volver
                </v-btn>

            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script setup>
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import { useStore } from 'vuex'

    const store = useStore()
    const dialog = ref(false)

    const indicators = ref({
        id: uuidv4(),
        indicatorName: "ichimokuClouds",
        config: []
    })

    const data = ref({
        conversion: 9,
        base:26,
        lagging:26,
        spanA:26,
        spanB:26,
    })


    const saveIndicator= () => {
        dialog.value = false
        indicators.value.config.push( data.value )
        store.dispatch("backtest/addIndicator", indicators.value )
    }
  
</script>

<style>
    .scroll-card {
        height: 300px;
        overflow: auto;
    }
</style>