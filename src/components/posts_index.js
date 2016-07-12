import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; //delete the commented out too
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
   this.props.fetchPosts();
	}

  renderPosts() {
  	return this.props.posts.map((post) => {
  		return (
	  		<li className='list-group-item' key={post.id}> 
	  			<span className='pull-xs-right'>{post.categories}</span>
	  			<strong>{post.title}</strong>
	  		</li>
  		);
  	});
  }

	render() {
		return (
			<div>
 				<div className='text-xs-right'>
 					<Link to='/posts/new' className='btn btn-primary' >
 						add a post
 					</Link>
 				</div>
 				<h3>Posts</h3>
				<ul className='lis-group'>
				  {this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);

// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

//refactor version
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);