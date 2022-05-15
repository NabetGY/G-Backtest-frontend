
/* export const myGetters = ( state ) => {
    return state
} */


export const getPositionIndicator = ( state ) => ( name='' ) => {
    console.log(name)
    return state.indicators.findIndex(indicator => indicator.indicatorName === name )
}

// export const getTickerSymbol = ( state ) => ( id ) => {
//     const ticker = state.tickers.find( ticker => ticker.id === id )
//     console.log(ticker)
//     return ticker.symbol
// }

const toTimestamp = (strDate) => {  
    const dt = new Date(strDate).getTime();  
    return dt / 1000;  
  }

export const getMarkets = ( state ) => {
    const { report } = state.dataBacktest
    let indice = report.columns.indexOf('in_out')
    const lista = []
    for (const item of report.data) {
        if (item[indice]==1) {
            lista.push({time: toTimestamp(item[3]), position: 'belowBar', color: '#2196F3', shape: 'arrowUp', text: 'Buy'})
        } else if (item[indice]==-1) {
            lista.push({time: toTimestamp(item[3]), position: 'aboveBar', color: '#e91e63', shape: 'arrowDown', text: 'Sell'})
        }
    }
    return lista
}


export const getBacktestById = (state) =>  ( id = '') => {
    const backtest = state.backtests.find( backtest => backtest.id === id )
    return backtest
}

export const getTickerById = (state) =>  ( id = '' ) => {
    const ticker = state.tickers.find( ticker => ticker.id === id )
    if (!ticker) return

    return {...ticker}
}

/* export const getMyBacktests = (state) =>  ( email = '') => {
    return state
} */


export const getOperations = ( state ) => {
    const { report } = state.dataBacktest
    let indice = report.columns.indexOf('in_out')
    let time = report.columns.indexOf('time')
    let price_in = report.columns.indexOf('price_in')
    let stop = report.columns.indexOf('stop')
    let stop_porc = report.columns.indexOf('stp%')
    let positions = report.columns.indexOf('positions')
    let target = report.columns.indexOf('target')
    let price_out = report.columns.indexOf('price_out')
    let profit_loss = report.columns.indexOf('profit_loss')


    const lista = []
    for (const item of report.data) {
        if (item[indice]!==0) {
            let aux = [ item[indice], item[time], item[price_in], item[stop], item[stop_porc],
                        item[positions], item[target], item[price_out], item[profit_loss] ]
            lista.push(aux)
        }
    }
    return lista
}

export const getDataChart = ( state ) => {
    const { report } = state.dataBacktest
    const lista = []
    for (const item of report.data) {

        lista.push( { 
            time: toTimestamp(item[3]),
            open: item[4], 
            high: item[5], 
            low:  item[6], 
            close: item[7],
        })

    }
    const data = {
        ticker: report.data[0][1],
        lista
    }
    return data
}


export const getIndicatorsLen = (state) =>  {
    return state.indicators.length
}

export const getBacktestsLen = (state) =>  {
    return state.backtests.length
}