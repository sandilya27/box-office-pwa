import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePresistedReducer = (reducer, intialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, intialState, intial => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : intial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowsGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = usePresistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );

  console.log({ starredShow });

  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={data.show.image ? data.show.image.medium : '/not found.png'}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
