import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = useStarredShows();

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
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
