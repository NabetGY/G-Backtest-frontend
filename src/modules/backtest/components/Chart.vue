<template>
	<div id="domElementId" class="domElementId">
		<div class="dentro" >
			<div class="font-weight-bold"> 
				{{ ticker.name }} ({{ ticker.symbol }})
			</div>
			<div class="ps-1">
				{{ price }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import * as LightweightCharts from 'lightweight-charts';
import { useStore } from 'vuex';

const store = useStore()

const data = computed( () => store.getters["backtest/getDataChart"])

const dataMarket = computed( () => store.getters["backtest/getMarkets"] )

const tickerID = data.value.ticker

const ticker = computed( () => store.getters["backtest/getTickerById"](tickerID ))

const strDataMarket = JSON.stringify(dataMarket.value)

const newDataMarket = JSON.parse(strDataMarket)

//const str = JSON.stringify(data.value.lista)

//const newData = JSON.parse(str)


const price = ref(0)
const time = ref("")

let width = window.innerWidth-250
let height = window.innerHeight-250


function unixTime(unixtime) {

    let u = new Date(unixtime*1000);

      return u.getUTCFullYear() +
        '-' + ('0' + u.getUTCMonth()).slice(-2) +
        '-' + ('0' + u.getUTCDate()).slice(-2) + 
        ' ' + ('0' + u.getUTCHours()).slice(-2) +
        ':' + ('0' + u.getUTCMinutes()).slice(-2) +
        ':' + ('0' + u.getUTCSeconds()).slice(-2)
    }


onMounted(() => {

	let chart = LightweightCharts.createChart("domElementId", 
		{
		width: width,
		height: height,
			layout: {
				backgroundColor: '#000000',
				textColor: 'rgba(255, 255, 255, 0.9)',
			},
			grid: {
				vertLines: {
					color: 'rgba(197, 203, 206, 0.5)',
				},
				horzLines: {
					color: 'rgba(197, 203, 206, 0.5)',
				},
			},
			crosshair: {
				mode: LightweightCharts.CrosshairMode.Normal,
			},
			rightPriceScale: {
				borderColor: 'rgba(197, 203, 206, 0.8)',
			},
			timeScale: {
				borderColor: 'rgba(197, 203, 206, 0.8)',
				timeVisible: true,
				secondsVisible: false,
			},
		})




	let candleSeries = chart.addCandlestickSeries({})
	candleSeries.setData(data.value.lista)
	

	candleSeries.setMarkers([...newDataMarket]);


	chart.subscribeCrosshairMove(function(param) {

		if (param === undefined || param.time === undefined || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
				price.value = 0;

		} else {
			/* dateStr = param.time.year + ' - ' + param.time.month + ' - ' + param.time.day; */
			price.value = "O: "+param.seriesPrices.get(candleSeries).open+"  H: "+param.seriesPrices.get(candleSeries).high+"  L: "+param.seriesPrices.get(candleSeries).low+"  C: "+param.seriesPrices.get(candleSeries).close
			time.value = unixTime(param.time)
			
		}
	})

})




</script>

<style>
#domElementId{
	position: relative;
}
.dentro{
	display: block;
	left: 25px;
	top: 15px;
	width: 350px;
	height: 60px;
	position: absolute;
	padding: 8px;
	font-size: 15px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 1000;
	pointer-events: none;
}
</style>