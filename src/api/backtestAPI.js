import axios from "axios";

const backtestAPI = axios.create(
    {
        baseURL: 'https://g-backtest-api.herokuapp.com'
    }
)

export default backtestAPI