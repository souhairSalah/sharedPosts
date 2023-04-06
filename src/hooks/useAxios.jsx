import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url, headers) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await axios.get(url, {
                    headers: headers,
                });
                setData(response.data);
            }catch(error){
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    },[url]);

    return {data, error, isloading};

}
export default useAxios;