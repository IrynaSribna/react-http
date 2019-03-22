import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{   //advanced properties, here just as example
                                pathname: '/new-post', //absolute path
                                // pathname: this.props.match.url + '/new-post', - this is relative path, 
                                //the /new-post will be added to the end of the current path
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

            {/* only routes that have exact path="/" will get Home rendered as a content.
             In our case it is Home link  */}
            {/*<Route path="/" exact render={() => <h1>Home </h1>}/> */}
            {/* all routes started with / will get the Home 2 content rendered. In our case it is when
             to click either Home or New Post */}
            {/*<Route path="/" render={() => <h1>Home 2 </h1>}/> */}
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />
                
            </div>
        );
    }
}

export default Blog;