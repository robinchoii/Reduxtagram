import React from 'react';
import Posts from '../data/posts';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className='photo-grid'>
                {this.props.posts.map( (post,i) => <Photo {...this.props} key={i} post={post} /> )}
            </div>
        )
    }
});

export default PhotoGrid;
