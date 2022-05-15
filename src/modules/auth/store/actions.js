 import axios from 'axios';

/* export const myAction = async({ commit }) => {

} */


const url = 'https://g-backtest-api.herokuapp.com'
// const url = 'http://127.0.0.1:8000'


export const createUser = async ( { commit }, user ) => {

    const { username, email, password } = user

    const resp = await axios.
                post( url+'/register/', { email, password, username })
                .then( response => {

                    const { message } = response.data

                    delete user.password
                                            
                    return { ok: true, message: message }
        
                })
                .catch( error => {

                    commit('logout')

                    console.log(error.response)
        
                    return { ok: false, message: error.response.data.message }
                })
    
    return resp
}


export const updateUser = async ( { commit }, userdata ) => {

    const {email, username} =  userdata

    const resp = await axios.
                post( url+'/update/', {email, username})
                .then( response => {

                    const { username, message } = response.data

                    commit('updateUsername',  username )
                                            
                    return { ok: true, message: message }
        
                })
                .catch( error => {
        
                    return { ok: false, message: error.response.data.message }
                })
    
    return resp
}



export const deleteUser = async ( { commit }, email ) => {

    const resp = await axios.
                post( url+'/delete/', email)
                .then( response => {

                    const { message } = response.data

                    commit('logout')
                                            
                    return { ok: true, message: message }
        
                })
                .catch( error => {
        
                    return { ok: false, message: error.response.data.message }
                })
    
    return resp
}


export const signInUser = async ( { commit }, user ) => {

    const { email, password } = user

    axios.defaults.headers.common['Authorization'] = ''

    const resp = await axios
        .post( url+'/login/', { email, password })
        .then( response => {

            const {  token, user, message } = response.data

            commit('loginUser', {  token , user })

            axios.defaults.headers.common['Authorization'] = 'Token '+ token 

            console.log(response.data)

            return { ok: true, message: message }

        })
        .catch( error => {
            commit('logout')

            return { ok: false, message: error.response.data.error }
        })

    
    return resp
}


export const userLogout = async ( { commit } ) => {

    const token = localStorage.getItem('token')
    try {
        const resp = await axios.post( url+'/logout/', { token } 
        
        )
        console.log('entro al try')
        console.log(resp)

        axios.defaults.headers.common['Authorization'] = ''

        commit('logout')
        /* location.reload(); */
        return { ok: true, message: "Sesion terminada." }
        
    } catch (error) {
            console.log('error')
            commit('logout')
            /* location.reload(); */ 
        
        return { ok: false, message: 'error' }
        
    }

}




export const checkAuthentication = async({ commit }) => {

    const token = localStorage.getItem('token')

    if (!token) {
        console.log('no hay token')

        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    return { ok: true }
}


export const setTokens = async({ commit }, token, refreshToken, user) => {
    commit('loginUser', { user, token, refreshToken})
}

export const recovery = async ( { commit }, email ) => {


    const resp = await axios
        .post( url+'/api/password_reset/', email )
        .then( response => {

            const { data } = response

            const { message } = data

            return { ok: true, message: message }

        })
        .catch( error => {
            commit('logout')
            return { ok: false, message: error.response.data.error }
        })
    
    return resp
}


export const reset = async ( { commit }, data ) => {
    console.log(data)
    const resp = await axios
        .post( url+'/api/password_reset/confirm/', {...data})
        .then( response => {

            const { data } = response

            const { message } = data

            return { ok: true, message: message }

        })
        .catch( error => {
            commit('logout')
            return { ok: false, message: error.response.data.password }
        })
    
    return resp
}