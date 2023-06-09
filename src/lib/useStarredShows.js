import { useEffect, useReducer } from 'react';

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

export const useStarredShows = () => {
  return usePresistedReducer(starredShowReducer, [], 'starredShows');
};
