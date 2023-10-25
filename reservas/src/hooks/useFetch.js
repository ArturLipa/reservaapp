import {useEffect, useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8800/api'

const useFetch = (urL) =>{
    const [data,setData] = useState ([]);
    const [loading,setLoading] = useState ([false]);
    const [error, setError] = useState([false]);

    useEffect (()=>{
        const fetchData =async () => {
            setLoading(true);
            try{
                const res = await axios.get(urL);
                setData(res.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[urL]);

    const reFetch =async () => {
        setLoading(true);
        try{
            const res = await axios.get(urL);
            setData(res.data);
        }catch(err){
            setError(err);
        }
        setLoading(false);
    };
    return {data, loading, error, reFetch};

};

export default useFetch;