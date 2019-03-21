import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {

    componentDidMount() {
        axios.get('/posts') //get returns Promise
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Iryna'
                }
            })
            this.setState ({posts: updatedPosts}); //we cannot call it after axios.get
            //because javaScipt will not wait till this call gets finished
        })
        .catch(error => {
            console.log(error);
            this.setState({error: true});
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

            <Posts />
                
            </div>
        );
    }
}

export default Blog;