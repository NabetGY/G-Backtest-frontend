import axios from 'axios';

/* 
export const myAction = async ({ commit }) => {

}
 */


// const url = 'http://127.0.0.1:8000'
const url = 'https://g-backtest-api.herokuapp.com'

export const updateListIndicators = async ({ commit }, indicators ) => {
    commit("updateListIndicators", indicators)
}

export const loadTickers = async ( { commit } ) => {
    commit("loading")
    const tickers = []
    await axios
            .get( url+'/tickers/ticker.json')
            .then( response => {
                const { data } = response
                for( let id of Object.keys( data )) {
                    tickers.push(
                        {
                            id,
                            ...data[id]
                        }
                    )
                }
            })
            .catch( error => {
                console.log(error)
            })

    commit('setTickers', tickers)
    commit("loading")
}


export const loadMyBacktests = async ( { commit }, email ) => {

    commit("loading")
    const myBacktests = []
    await axios
            .post( url+'/list-backtest/', { email } )
            .then( response => {
                const { data } = response
                for( let id of Object.keys( data )) {
                    myBacktests.push({
                        id,
                        ...data[id]
                    })
                    
                }
                commit('setMyBacktests', myBacktests)
                commit("loading")
            })
            .catch( error => {
                console.log(error)
                commit("loading")

            })

}


export const saveBacktest = async ( { commit, state } ) => {

    commit("loading")

    const indicator = state.indicators

    const tickerForm = state.tickerForm

    const indicatorsData = []

    indicator.forEach(element => {
        indicatorsData.push({...element})
    })

    const dataBacktest = { ...tickerForm, indicatorsData }

    const resp = await axios
        .post( url+'/backtests/', dataBacktest)
        .then( response => {

            const { data, message } = response.data

            commit("show", false)
            commit("setBacktest", data)

            return { ok: true, message: message }

        })
        .catch( error => {
  
            return { ok: false, message: error.response.data.error }
        })
    
    commit("loading")
    return resp
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

    commit("setTickerForm", tickerData)

    const indicator = state.indicators

    const indicatorsData = []

    indicator.forEach(element => {
        indicatorsData.push({...element})
    })

    const dataBacktest = { ...tickerData, indicatorsData }

    const resp = await axios
        .post( url+'/backtest/', dataBacktest)
        .then( response => {

            const { data } = response

            if(data.code==1){
                commit("setDataBacktest", data.data)
                commit("show", true)
                commit("loading")
                return { ok: true, message: data.message }
            }else{
                commit("loading")
                return { ok: false, message: data.message }
            }

        })
        .catch( error => {
            commit("loading")
            return { ok: false, message: error }  
        })
    
    return resp
}



export const getBacktest = async ({ commit }, data ) => {

    commit("loading")

    const resp = await axios
        .post( url+'/backtest/', data)
        .then( response => {

            const { data } = response

            if(data.code==1){
                commit("setDataBacktest", data.data)
                commit("show", false)
                commit("loading")
                return { ok: true, message: data.message }
            }else{
                commit("loading")
                return { ok: false, message: data.message }
            }

        })
        .catch( error => {
            commit("loading")
            return { ok: false, message: error }  
        })
    
    return resp
}


export const deleteBacktest = async ({ commit }, id ) => {

    commit("loading")

    const resp = await axios
        .delete( url+'/backtests/'+id)
        .then( response => {

            const { message } = response.data

            commit("deleteBacktest", id)
            commit("loading")

            return { ok: true, message: message }

        })
        .catch( error => {

            commit("loading")
            return { ok: false, message: error }  
        })
    
    return resp
}

export const clearFormBacktest = async ({ commit }) => {
    commit('clearFormBacktest')
}

export const clearMyBacktest = async ({ commit }) => {
    commit('clearMyBacktest')
}

export const clearTickers = async ({ commit }) => {
    commit('clearTickers')
}