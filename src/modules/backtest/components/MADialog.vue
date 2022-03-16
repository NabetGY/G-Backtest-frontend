<template>

    <v-dialog v-model="dialog" activator="parent" :retain-focus="false">

        <v-card width="590"> 

            <v-toolbar color="primary">Cruce de Medias Moviles</v-toolbar>

            <v-card-title>
                Configuracion
            </v-card-title>

            <div class="scroll-card px-6 py-1">
                <v-list two-line class="py-0">
                    <v-list-subheader inset>Medias Moviles</v-list-subheader>
                        <v-list-item
                            v-for="(item, index) in indicators.config" :key="index"
                            prepend-icon="mdi-finance"
                            :title="item.MA"
                            :subtitle="'Periodo: '+item.period"
                        >
                            <template v-slot:append>
                                <v-list-item-avatar right>
                                    <v-btn variant="text" color="grey lighten-1" icon="mdi-delete-circle"></v-btn>
                                </v-list-item-avatar>
                            </template>
                        </v-list-item>
                </v-list>
            
                <v-container>
                    <v-row>
                        <v-col cols="12" md="7">
                            <v-select v-model="MA" :items="listMA" label="Tipo"></v-select>
                        </v-col>

                        <v-col cols="12" md="3">
                            <v-text-field min=0 type="number" v-model="periodo" variant="filled"
                            label="Periodo" clearable required>
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                            <v-btn @click="addMA" color="primary" icon="mdi-plus-circle">
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
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
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const listMA =  [ 'Media movil simple', 'Media movil exponencial' ]
    const MA = ref("")
    const periodo = ref(0)
    const dialog = ref(false)

    const indicators = ref({
        id: uuidv4(),
        indicatorName: "MACD",
        config: []
    })

    const addMA = () => {
        indicators.value.config.push(
            {
                "MA":MA.value,
                "period":periodo.value
            }
        )

        MA.value = ""
        periodo.value =  0
    }
  
    const saveIndicator = () => {
        dialog.value = false
        store.dispatch("backtest/addIndicator", indicators.value )
    }
 
    

</script>

<style scoped>
.scroll-card {
        height: 300px;
        overflow: auto;
    }
</style>