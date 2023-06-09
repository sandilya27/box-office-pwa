import { useQuery } from 'react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () => getShowsByIds(starredShowsIds).then(result=>result.map(show=>({show})
    )),
    refetchOnWindowFocus: false,
  });

  if(starredShows?.length === 0){
    return <div>No shows were starred</div>
  }

  if(starredShows?.length > 0){
    return <ShowsGrid shows={starredShows}/>
  }

  if(starredShowsError){
    <div>Error occured:{starredShowsError.message}</div>
  }
  return <div>Shows are Loading</div>;
};

export default Starred;
