import React, { useState } from 'react'
import Search from '../Screens/Search'
import ProfileComponent from '../Screens/Profile'
import NoUser from '../Screens/NoUser'
import RepoRow from '../Screens/RepoRow'


const c_id = 'd9308aacf8b204d361fd'
const c_secret = '84969aeef73956f4ec9e8716d1840532802bb81b'
const url = 'https://api.github.com'
const sort = "created: asc"


function Ex1(props) {
    const [profile,setProfile] = useState(false)
    const [perPage,setperPage] = useState(5)
    const [repos,setRepos] = useState([])

    const searchGitUser = async (user) => {
        console.log('git user =', user)

        // fetching client id & client secret
        await fetch(`${url}/users/${user}?client_id=${c_id}&client_secret=${c_secret}`)
        .then(res => res.json())
        .then(res => {
           // console.log('res =', res)
           setProfile(res)
        }).catch(err => console.log(err.message))


        // repository data
        await fetch(`${url}/users/${user}/repos?per_page=${perPage}&sort=${sort}&client_id=${c_id}&client_secret=${c_secret}`)
        .then(res => res.json())
        .then(res => {
            console.log('repos =', res)
            setRepos(res)
        }).catch(err => console.log(err.message))
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="title">
                    <h1> Git User Finder (Functional Component) </h1>
                </div>
            </div>

            <div className="row">
                <Search searchUser={searchGitUser} />
            </div>

            <div className="row">
                {
                  profile ?   <ProfileComponent {...profile} /> : <NoUser/>
                }
            </div>

            <div className="row">
               {
                repos && repos.map((item,index) => {
                    return (
                        <RepoRow key={index} {...item} />
                    )
                 })
               }
            </div>
        </div>
    )
}

export default Ex1