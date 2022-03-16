<template>

    <v-dialog v-model="dialog" activator="parent" :retain-focus="false">

        <v-card min-width="500"> 

            <v-toolbar color="primary">Donchian Channels</v-toolbar>

            <v-card-title>
                Configuracion
            </v-card-title>

            <div class="px-6 pt-3">
                
                <v-text-field min=0 type="number" v-model="period" label="Periodo" required>
                </v-text-field>

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
    const period = ref(0)
    const dialog = ref(false)

    const indicators = ref({
        id: uuidv4(),
        indicatorName: "DonchianChannels",
        config: []
    })



    const saveIndicator = () => {
        indicators.value.config.push(
            {
                "period": period.value
            }
        )
        dialog.value = false
        store.dispatch("backtest/addIndicator", indicators.value )
    }
 
</script>

<style scoped>

</style>