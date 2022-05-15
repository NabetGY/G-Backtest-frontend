
/* export const myAction = ( state ) => {

} */

export const loginUser = ( state, { user, token } ) => {
    if ( token ) {
       localStorage.setItem('token', token)
       state.token = token
   }

    if ( user ) {
        const {username, email} = user
        localStorage.setItem('username', username)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('email', email)

        state.username = username
        state.email = email

       
    }
    state.status = 'authenticated'
    state.checking = false

}

export const updateUsername = ( state,  username  ) => {

    localStorage.setItem('username', username)

    state.username = username
}

export const logout = ( state ) => {
    state.status = 'no-authenicate'
    state.user= null
    state.token = null

    localStorage.setItem('token', '')
    localStorage.removeItem('user')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('token')

}
