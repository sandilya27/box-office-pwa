const Casts = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/not found.png'}
              alt="cast-image"
            />
          </div>

          <div>
            {person.name} | {character.name} {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casts;
