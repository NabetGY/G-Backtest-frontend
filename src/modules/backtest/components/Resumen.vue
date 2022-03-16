<template>

<div class="container bg-indigo-report py-3 rounded">
    <div class="row g-3">
        
        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">Operations</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">{{ resumen.operations }} </div>
        </div>

        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">Win Rate</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">{{ resumen.winrate }}%</div>
        </div>

        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">Total Profit/Loss</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">{{ resumen.Total_P_L }} </div>
        </div>

        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">P/L %</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">% </div>
        </div>

        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">Max Profit</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">{{ resumen.max_profit }} </div>
        </div>

        <div class="col-6">
            <div class="fw-bold text-end p-3 border-left bg-light">Max Loss</div>
        </div>
        <div class="col-6">
            <div class="p-3 border-right bg-light">{{ resumen.max_loss }} </div>
        </div>

    </div>
</div>

</template>

<script setup>
import { useStore } from 'vuex'

    const store = useStore()

    const { resumen } = store.state.backtest.backtests[0]

</script>

<style>

    .bg-indigo-report{
        background-color: indigo;
        max-width: 500px;
    }

    .border-left{
        border-top-left-radius: 15px;
        border-end-start-radius: 15px;
    }

    .border-right{
        border-top-right-radius: 15px;
        border-end-end-radius: 15px;
    }

</style>