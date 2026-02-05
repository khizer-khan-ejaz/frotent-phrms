import axios from 'axios';
import  { useEffect, useState } from 'react'

const UseStateHook = (route) => {


    const[data , setData] = useState([])
    const[dataLoading , setDataLoading] = useState(true);

    useEffect(() => {
  (async () => {
    try {
      setDataLoading(true);

      const res = await axios.get(route);
      setData(res.data);

    } catch (err) {
      console.log(err.message);
    } finally {
      setDataLoading(false);
    }
  })();
}, [route]);


  return {data , dataLoading}

}

export default UseStateHook
