import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CoustmRadio from './CoustmRadio';

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  const onInputChange = ev => {
    setInputValue(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: inputValue,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} onChange={onInputChange} />

      <CoustmRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />

      <CoustmRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
