import { useEffect, useState } from "react";
import Character from './Character'

function NavPage(props) {
    return (
        <>
        <div className="text-center mb-3">
            <p className="font-new fs-3">Page: {props.page}</p>
        </div>
        

    <div className="d-flex justify-content-between align-items-center">
        <button className="color-text-rick btn btn-primary btn-sm" onClick={() => {if (props.page > 1) {
        props.setPage(props.page - 1);
    }}}>Prev</button>
        <button className="color-text-rick btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>
            Next
        </button>
        
        </div>
        </>
    )
    
}


function CharacterList() {
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);


useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    setLoading(false);
    setCharacters(data.results);
    };

    fetchData();
}, [page]);

return (
    <div className="container">

        <NavPage page={page} setPage={setPage}/>


        {
            loading ? <h1>Loading...</h1> :
            <div className="row">
            {characters.map((characters) => {
            return (
            <div className="col-md-4" key={characters.id}>
                <Character characters={characters}/>
            </div>
            );
        })}
    </div>
}
<NavPage page={page} setPage={setPage}/>
    </div>
);
}

export default CharacterList;
