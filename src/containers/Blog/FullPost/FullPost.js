import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentWillUpdate() {
        console.log(this.props)
        this.loadData();
    }

    componentDidMount () {
        console.log(this.props)
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.postId) {
            //the if below is needed so that componentDidUpdate is not loaded
            // in the infinite loop of request but only if we select a new post (this can be seen in the Network tab)
            if (!this.state.loadedPost 
                || (this.state.loadedPost 
                    && this.state.loadedPost.id != this.props.match.params.postId)) { //!== changed to != to compare values as numbers
                axios.get('/posts/' + this.props.match.params.postId)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                    });
            }    
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.postId)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.postId) {
            post = <p style={{textAlign: 'center'}}> Loading...</p>;
        }
        if(this.state.loadedPost) {  //we can already obtain the id but the date are still not loaded 
            //as the loading happens async  
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
       
        return post;
    }
}

export default FullPost;