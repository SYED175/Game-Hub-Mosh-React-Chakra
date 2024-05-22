import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4edfc5d491094edc9268853cfa0bae11'
    }
})