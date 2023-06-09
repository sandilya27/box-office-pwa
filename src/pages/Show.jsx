//import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';

/* const useShowById=(showId)=>{
  const [showData,setShowData]=useState(null);
  const [showError,setShowError]=useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getShowById(showId);
        setShowData(data);
        setShowError(null);
      }catch(err){
        setShowError(err);
      }
      
    }

    fetchData();
  }, [showId]);

  return {showData,showError};
} */

const Show = () => {
  const { showId } = useParams();
  //const {showData,showError}=useShowById(showId);
  const {data: showData,error:showError}=useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });


  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show data: {showData.name}</div>;
  }
  return <div>Data is loading</div>;
};

export default Show;
