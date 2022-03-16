<template>

    <v-row class="border my-5 pa-1">
        <v-col align-self="center" class="border overflow-x-auto my-3 text-center">

            <button
                v-for="( _, tab) in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab"
                >
                {{ tab }} 
           </button>

            <component :is="tabs[currentTab]" class="tab"></component>

        </v-col>

    </v-row >

</template>

<script setup>

import { defineAsyncComponent, ref } from 'vue'

    const ReportResumenVue = defineAsyncComponent( () => import('@/modules/backtest/components/ReportResumen.vue'))
    const OperationsBacktestVue = defineAsyncComponent( () => import('@/modules/backtest/components/OperationsBacktest.vue'))
    const ChartVue = defineAsyncComponent( () => import('@/modules/backtest/components/Chart.vue'))


    const currentTab = ref('Resumen')
    const tabs = {
        Resumen: ReportResumenVue,
        Operaciones: OperationsBacktestVue,
        Grafico: ChartVue
    }
        
</script>

<style scoped>

    .border {
        border: 1px solid #eee;
        border-radius: 2px;
    }

    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }

</style>