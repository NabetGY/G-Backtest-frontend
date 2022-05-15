/* 
export const myMutations = ( state ) => {

}
 */

export const loading = ( state ) => {
    state.isLoading = !state.isLoading
}

export const show = ( state, value) => {
    state.show = value
}


export const setTickers = ( state, tickers ) => {

    state.tickers = [ ...tickers]

}

export const setMyBacktests = ( state, backtests ) => {

    state.backtests = [ ...state.backtests, ...backtests]

}

export const setIndicator = ( state, indicator ) => {

    state.indicators = [ ...state.indicators, indicator]
}

export const deleteIndicator = ( state, id ) => {

    state.indicators = state.indicators.filter(indicator => indicator.id !== id)
}


export const setBacktest = ( state, backtest ) => {

    state.backtests = [ ...state.backtests, backtest ]
}

export const setTickerForm = ( state, tickerForm ) => {

    state.tickerForm = { ...tickerForm }
}

export const setDataBacktest = ( state, data ) => {

    state.dataBacktest = { ...data }
}

export const updateListIndicators = ( state, indicators ) => {
    state.indicators = indicators
}


export const deleteBacktest = ( state, id ) => {

    state.backtests = state.backtests.filter(backtest => backtest.id !== id)
}




export const clearFormBacktest = ( state ) => {

    state.indicators = []
    state.tickerForm = {}

}


export const clearMyBacktest = ( state ) => {

    state.backtests = []
}

export const clearTickers = ( state ) => {

    state.tickers = []
}

