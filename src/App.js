import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deck from './Components/Deck';
import Filters from './Actions/Filters';

function App() {
    const [chars, setChars] = useState([]);
    const filters = {};
    const url = 'https://rickandmortyapi.com/api/character/?';

    useEffect(() => {
        fetch(url)
            .then(response => response.status === 200 && response.json())
            .then(resp => setChars(resp.results || []));
    }, [])

    function changeHandler(e){
        const {name, id, value, checked, type} = e.target;

        filters[name] = checked ? id : '';         
        var tempStr = 'https://rickandmortyapi.com/api/character/?';
        Object.keys(filters).forEach((key) => tempStr = tempStr + key +'=' + filters[key] + '&');
    
        fetch(tempStr)
            .then(response => response.status === 200 && response.json())
            .then(resp => setChars(resp.results || []));
    }
    
    return (
        <div className="App">
            <div className="h1">Rick & Morty Club</div>
            <label>*API was not clear on selecting multiple option of same Species OR Gender etc</label>
            <br/>
            <label>*API was not clear on filtering charactrs based on location. check <a href='https://rickandmortyapi.com/documentation/#filter-characters'>Available filter Criterias</a></label>
            <br/>
            <label>*API was not clear on Sorting charactrs </label>
            <div id='board' className='board'>
                <Filters handler={changeHandler} ></Filters>
                <Deck list={chars}></Deck>
            </div>
        </div>
    );
}

export default App;
