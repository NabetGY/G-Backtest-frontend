<template>

    <v-table fixed-header >

        <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left">In/Out</th>
                <th class="text-left">Date</th>
                <th class="text-left">Price in</th>
                <th class="text-left">STP</th>
                <th class="text-left">STP %</th>
                <th class="text-left">Positions</th>
                <th class="text-left">Positions %</th>
                <th class="text-left">TGT</th>
                <th class="text-left">Price out</th>
                <th class="text-left">Profit Loss</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, index) in report.data" :key="index" >

                <th>{{ index+1 }}</th>
                <td v-if="item[0]===-1">
                    <v-icon large color="red darken-2"> mdi-arrow-bottom-left-thick </v-icon>
                </td>
                <td v-else>
                    <v-icon large color="green darken-2"> mdi-arrow-top-right-thick </v-icon>
                </td>
                <td>{{ item[1] }}</td>
                <td>{{ item[2] }}</td>
                <td>{{ item[4] }}</td>
                <td>{{ item[5] }}</td>
                <td>{{ item[6] }}</td>
                <td>{{ item[7] }}</td>
                <td>{{ item[8] }}</td>
                <td>{{ item[3] }}</td>
                <td>
                    <v-chip :color="getColor(item[9])" dark >
                        {{ item[9] }}
                    </v-chip>
                </td>
            </tr>
        </tbody>
  
    </v-table>

</template>

<script setup>
import { useStore } from 'vuex'

    const store = useStore()

    const { report } = store.state.backtest.backtests[0]

    const getColor = (item) => {
        if (item < 0) return 'red'
        else if (item > 0) return 'green'
        else return 'white'
    }
            
</script>

<style>

</style>