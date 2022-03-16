import backtestAPI from "@/api/backtestAPI"
import axios from 'axios';


/* 
export const myAction = async ({ commit }) => {

}
 */


export const updateListIndicators = async ({ commit }, indicators ) => {
    commit("updateListIndicators", indicators)
}

export const loadTickers = async ( { commit } ) => {

    const { data } = await backtestAPI.get('/tickers/ticker.json')
    const tickers = []
    for( let id of Object.keys( data )) {
        tickers.push({
            id,
            ...data[id]
        })
        
    }
    commit('setTickers', tickers)
}


export const loadMyBacktests = async ( { commit }, email ) => {

    const { data } = await axios.post('http://127.0.0.1:8000/list-backtest/', { email });
    const myBacktests = []
    for( let id of Object.keys( data )) {
        myBacktests.push({
            id,
            ...data[id]
        })
        
    }
    commit('setMyBacktests', myBacktests)
}


export const addIndicator = ({ commit }, indicator ) => {

    const dataToSave = {...indicator}

    commit("setIndicator", dataToSave)
}


export const deleteIndicator = ({ commit }, id ) => {

    commit("deleteIndicator", id )

    return { ok: true }
}


export const startBacktest = async ({ commit, state }, tickerData ) => {

    commit("loading")

    const indicator = state.indicators


    const indicatorsData = []

    indicator.forEach(element => {
        indicatorsData.push({...element})
    })

    const dataBacktest = { ...tickerData, indicatorsData }

    try {
        const { data } = await backtestAPI.post('/backtests/', dataBacktest )
        commit("setBacktest", data.data)
        commit("loading")
        return { ok: true, message: data.message }
        
    } catch (error) {
        commit("loading")
        return { ok: false, message: error }   
    }
}

