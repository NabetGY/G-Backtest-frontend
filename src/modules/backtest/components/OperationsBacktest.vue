<template>
    <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left">In/Out</th>
                <th class="text-left">Date</th>
                <th class="text-left">Price in $</th>
                <th class="text-left">STP $</th>
                <th class="text-left">STP %</th>
                <th class="text-left">Positions</th>
                <th class="text-left">TGT $</th>
                <th class="text-left">Price out $</th>
                <th class="text-left">Profit Loss $</th>
            </tr>
        </thead>

        <tbody>
            <tr
                v-for="(item, index) in data"
                :key="index"
            >
                <th>{{ index + 1 }}</th>
                <td v-if="item[0] === -1">
                    <v-icon
                        large
                        color="red darken-2"
                    >
                        mdi-arrow-bottom-left-thick
                    </v-icon>
                </td>
                <td v-else>
                    <v-icon
                        large
                        color="green darken-2"
                    >
                        mdi-arrow-top-right-thick
                    </v-icon>
                </td>
                <td>{{ dateFormat(item[1]) }}</td>
                <td>{{ item[2] }}</td>
                <td>{{ numberFormat(item[3]) }}</td>
                <td>{{ item[4] }}</td>
                <td>{{ item[5] }}</td>
                <td>{{ numberFormat(item[6]) }}</td>
                <td>{{ item[7] }}</td>
                <td>
                    <v-chip
                        :color="getColor(item[8])"
                        dark
                    >
                        {{ numberFormat(item[8]) }}
                    </v-chip>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
    import { computed } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import useBacktest from '../composables/useBacktest'

    const store = useStore()
    const { numberFormat, dateFormat } = useBacktest()

    const data = computed( () => store.getters[ "backtest/getOperations" ] )

    const getColor = ( item ) => {
        if ( item < 0 ) return 'red'
        else if ( item > 0 ) return 'green'
        else return 'white'
    }


</script>

<style>
</style>