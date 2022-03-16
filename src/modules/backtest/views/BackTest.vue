<template>
    <v-row >

        <TickerFormVue />
        
        <v-col cols="12" sm="8" class="mx-8">

            <draggable v-model="indicators">

                <transition-group>

                    <IndicatorInfoCardVue v-for="(item, index) in indicators" :key="index" :indicator="item" :index="index"  />

                </transition-group>
                
            </draggable>

            <IndicatorDialogVue />

        </v-col>

    </v-row>
    
</template>

<script setup>

import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
import { VueDraggableNext as  draggable } from 'vue-draggable-next'

    const IndicatorDialogVue = defineAsyncComponent( () => import('@/modules/backtest/components/IndicatorDialog.vue'))
    const TickerFormVue = defineAsyncComponent( () => import('@/modules/backtest/components/TickerForm.vue'))
    const IndicatorInfoCardVue = defineAsyncComponent( () => import('@/modules/backtest/components/IndicatorInfoCard.vue'))



    const store = useStore()

    const indicators = computed({
        get() {
            return store.state.backtest.indicators
        },
        set(newValue) {
            store.dispatch("backtest/updateListIndicators", newValue )
        }
    })

</script>

<style scoped>

    .box-indicator{
        height: 570px;
        overflow-y: scroll;
        border-radius: 5px;
        background-color: rgb(227, 224, 224);
    }


</style>