import { useState } from "react"

const Home = () => {
  const [inputValue,setInputValue]=useState('');

  const onInputChange=(ev)=>{
      setInputValue(ev.target.value);
  }

  const onSearch = async (ev)=>{
    ev.preventDefault();

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    const body = await response.json()
      console.log(body);
  }

  return (
    <div>
    <form onSubmit={onSearch}>
        <input type="text" value={inputValue} onChange={onInputChange}/>
        <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default Home