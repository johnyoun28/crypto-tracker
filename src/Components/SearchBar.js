import React, {useState} from 'react'
import '../App.css'

const SearchBar = () => {

    const [search, setSearch] = useState('')

    const changeHandler = evt => {
        setSearch(evt.target.value)
    }

    return (
        <div>
            <form>
                <input
                className='form-input'
                type='text'
                placeholder= 'Search'
                onChange={changeHandler}
                ></input>
            </form>
            
        </div>
    )
}

export default SearchBar
