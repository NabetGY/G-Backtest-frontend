<template>

    <v-container>
    
        <v-row justify="center">
            
            <v-btn color="indigo" class="ma-2">

                Agregar otro indicador

                <v-dialog v-model="dialogSelectIndicator" activator="parent" :retain-focus="false">

                    <v-card min-width="500">

                        <v-toolbar color="primary">Indicadores</v-toolbar>

                        <v-card-title>
                            Seleccione un indicator:
                        </v-card-title>

                        <v-card-text>
                            <v-select v-model="indicator" :items="listIndicators" label="Indicadores"></v-select>
                        </v-card-text>

                        <v-card-actions>

                            <v-btn color="success" class="ma-2">
                                Siguiente
                                <component :is="dialogs[indicator]"></component>

                            </v-btn>

                            <v-btn color="grey" text @click="dialogSelectIndicator = false">
                                Cerrar
                            </v-btn>

                        </v-card-actions>

                    </v-card>

                </v-dialog>

            </v-btn>

        </v-row>

    </v-container>

</template>

<script setup>
 
    import { ref, defineAsyncComponent } from 'vue'


    const DochianChannelsDialogVue = defineAsyncComponent(() =>
        import("@/modules/backtest/components/DochianChannelsDialog.vue")
    )

    const BollingerBandsDialogVue = defineAsyncComponent(() =>
        import("@/modules/backtest/components/BollingerBandsDialog.vue")
    )

    const MADialogVue = defineAsyncComponent(() =>
        import("@/modules/backtest/components/MADialog.vue")
    )

    const IchimokuDialogVue = defineAsyncComponent(() =>
        import("@/modules/backtest/components/IchimokuDialog.vue")
    )
    
    const indicator = ref("MADialogVue")
    const dialogSelectIndicator = ref(false)
    const listIndicators = ['MADialogVue', 'DochianChannelsDialogVue', 'IchimokuDialogVue', 'BollingerBandsDialogVue']

    const dialogs = {
        MADialogVue,
        IchimokuDialogVue,
        DochianChannelsDialogVue,
        BollingerBandsDialogVue,
    }

</script>

<style>
</style>