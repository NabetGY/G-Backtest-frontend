<template>
	<div id="domElementId" class="domElementId">
		<div class="dentro" >
			<div style="font-size: 24px; margin: 4px 0px;"> 
				AEROSPACE
			</div>
			<div style="font-size: 22px; margin: 4px 0px;">
				$ {{ price }}
			</div>
			<div>
				{{ time }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import * as LightweightCharts from 'lightweight-charts';
import { useStore } from 'vuex';

const store = useStore()

const data = computed( () => store.state.backtest.backtests[0].data )

const dataMarket = computed( () => store.getters["backtest/getMarkets"] )

const strDataMarket = JSON.stringify(dataMarket.value)

const newDataMarket = JSON.parse(strDataMarket)

const str = JSON.stringify(data.value)

const newData = JSON.parse(str)


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

var chart = LightweightCharts.createChart("domElementId", 
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




var candleSeries = chart.addCandlestickSeries({
});

candleSeries.setData(newData);

candleSeries.setMarkers(newDataMarket);


chart.subscribeCrosshairMove(function(param) {
  if (param === undefined || param.time === undefined || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
        price.value = param.seriesPrices.get(candleSeries).close;

  } else {
    /* dateStr = param.time.year + ' - ' + param.time.month + ' - ' + param.time.day; */
    price.value = param.seriesPrices.get(candleSeries).close;
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
	width: 150px;
	height: 120px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 1000;
	pointer-events: none;
}
</style>