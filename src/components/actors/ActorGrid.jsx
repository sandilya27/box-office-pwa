import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import NotFound from './../../lib/not found.png'

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathhday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image ? data.person.image.original : NotFound
          }
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
