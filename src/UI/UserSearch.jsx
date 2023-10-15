import  React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'


class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
       // this.submitHandler = this.submitHandler.bind(this);
    }

    // reading the content of input
    readValue(event) {
        // console.log('value =', event.target.value);
        this.setState({
            user: event.target.value
        })
    }

    // form submit handler
    submitHandler(event) {
        event.preventDefault();
        this.props.search(this.state.user)
    }

    render() {
        return (
            <div>
                <form autoComplete='off' onSubmit={(e) => this.submitHandler(e)}>
                    <div className="form-group">
                        <input type="search" name="user" value={this.state.user}  onChange={(e) => this.readValue(e)}  id="user" placeholder='Enter Git Username' required />
                        <button className='btn'> <FaSearch/> </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSearch