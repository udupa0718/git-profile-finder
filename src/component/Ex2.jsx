import React, { Component } from 'react'
import UserSearch from '../UI/UserSearch';
import UserProfile from '../UI/UserProfile';
import UserRepo from '../UI/UserRepo';


const c_id = 'd9308aacf8b204d361fd'
const c_secret = '84969aeef73956f4ec9e8716d1840532802bb81b'
const url = 'https://api.github.com'
const sort = "created: asc"
const perPage = 5


class Ex2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: false,
            repos: []
        }
        this.searchGitUser = this.searchGitUser.bind(this); // method binding
    }

    // search handler
    searchGitUser(user) {
        console.log('name =', user)
        fetch(`${url}/users/${user}?client_id=${c_id}&client_secret=${c_secret}`)
        .then(res => res.json())
        .then(res => {
            console.log('res =', res)
            this.setState({
                profile: res
            })
        }).catch(err => console.log(err.message));


        // search repos
        fetch(`${url}/users/${user}/repos?per_page=${perPage}&sort=${sort}&client_id=${c_id}&client_secret=${c_secret}`)
        .then(res => res.json())
        .then(res => {
            console.log('repos =', res)
            this.setState({
                repos: res
            })
        }).catch(err => console.log(err.message))
    }

  
    render() {
        return (
            <section className="container">
                <div className="title">
                     <h1> Git User Finder (Class Component) </h1>
                </div>

                <div className="row">
                    <UserSearch  search={this.searchGitUser} />
                </div>

                <div className="row">
                    <UserProfile data={this.state.profile} />
                </div>

                <div className="row">
                    <UserRepo data={this.state.repos} />
                </div>
            </section>
        )
    }
}

export default Ex2