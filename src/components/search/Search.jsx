import { useContext } from 'react';
import des from '../../assets/images/des.jpg';
import "./searchStyle.css"
import { AppContext } from '../../contexts/imageListContext';
const Search = () => {

    const {state,search } = useContext(AppContext)

    return (
        <>

            <div id="background_search">
                <img src={des} alt="picture" />
            </div>

            <div id='search_box'>
                <input type="text" placeholder='Type Here ...' value={state.query.text} onChange={search} />
            </div>

        </>
    )
}

export default Search;