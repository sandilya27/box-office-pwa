//import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';
import ShowsMainData from '../components/shows/ShowsMainData';
import Deatails from '../components/shows/Deatails';
import Seasons from '../components/shows/Seasons';
import Casts from '../components/shows/Casts';

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
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/">Go to homepage</Link>
        <ShowsMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Deatails
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Casts cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Data is loading</div>;
};

export default Show;
