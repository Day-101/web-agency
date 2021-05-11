import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allWorks from 'data/allWorks'

const WorkDetail = () => {
  const {slug} = useParams()
  const [data, setData] = useState("")

  useEffect(() => {
    const dataResult = allWorks.find(result => result.slug === slug) 
      setData(dataResult)
    },[slug]) // si slug change, on réexécute useEffect donc dataResult, si [] vide, c'est éxécuté une seule fois
    
    return (
      <>
      <h2>{data && data.name}</h2>
      <p>{data && data.description}</p>
      {console.log(data && data.description)}
    </>
  );
};

export default WorkDetail;