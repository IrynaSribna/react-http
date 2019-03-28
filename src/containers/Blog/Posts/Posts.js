import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
        
    }

    componentDidMount() {
        console.log(this.props)
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
        this.props.history.push({pathname: '/posts/' + id});
        //this will work too:
        // this.props.push({'/posts/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                //<Link to={'/' + post.id} key={post.id}>
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</Link>
                );    
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:postId'} exact component={FullPost} />
            </div>

        );
    }

}

export default Posts;