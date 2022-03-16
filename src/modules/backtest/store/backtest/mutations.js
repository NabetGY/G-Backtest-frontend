/* 
export const myMutations = ( state ) => {

}
 */

export const loading = ( state ) => {
    state.isLoading = !state.isLoading
}

export const setTickers = ( state, tickers ) => {

    state.tickers = [ ...state.tickers, ...tickers]
    state.isLoading = false

}

export const setMyBacktests = ( state, backtests ) => {

    state.myBacktests = [ ...state.backtests, ...backtests]
    state.isLoading = false

}

export const setIndicator = ( state, indicator ) => {

    state.indicators = [ ...state.indicators, indicator]
}

export const deleteIndicator = ( state, id ) => {

    state.isLoading = true
    state.indicators = state.indicators.filter(indicator => indicator.id !== id)
    state.isLoading = false
}


export const setBacktest = ( state, backtest ) => {

    state.backtests = [ backtest, ...state.backtests ]
}

export const updateListIndicators = ( state, indicators ) => {
    state.indicators = indicators
}