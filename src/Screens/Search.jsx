import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

// using state and onchange event

function Search(props) {
    const [user,setUser] = useState("")

    const read = (e) => {
        // e.target => input tag
        // name & value => attributes
        const { name, value } = e.target
        // console.log('name =', name , "value =", value)
        setUser(value)
    }

    const submit = () => {
        // console.log('username =', user)
        props.searchUser(user)
    }

    return(
        <div className="form">
            <div className="form-group">
                <input type="search" name="user" id="user" value={user} onChange={read} required/>
                <button onClick={submit}  className='btn btn-success'>
                    <FaSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search