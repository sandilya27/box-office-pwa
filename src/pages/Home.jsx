import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from './../components/shows/ShowsGrid';
import ActorGrid from './../components/actors/ActorGrid';
import { useQuery } from 'react-query';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  /* const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null); */

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    /*  try {
      setApiDataError(null);

      if(searchOption === 'shows'){
        const result = await searchForShows(q);
        setApiData(result);
      }else{
        const result = await searchForPeople(q);
        setApiData(result);
      }
      
    } catch (error) {
      setApiDataError(error);
    } */
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error Occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Result to Show</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
