import './SearchBar.css';
import { useContext } from 'react';
import { DataContext } from '../../context';
import { useState } from 'react/cjs/react.development';

const SearchBar = () => {
    const [state] = useContext(DataContext);
    const [input, setInput] = useState(state.searchTerm);

    return (
        <div className="searchbar">
            <input 
            type="text"
            placeholder='Search DAO'
            value={input}
            onChange={e => setInput(e.target.value)} />
        </div>
    )
}

export default SearchBar;