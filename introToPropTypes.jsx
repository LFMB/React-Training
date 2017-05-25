// Building UIs with Pure Functions and Function Composition in React

var getProfilePic = function(username) {
	return 'https://photo.fb.com/' + username
}

var getProfileLink = function(username){
	return 'https://www.fb.com/' + username
}

var getProfileData = function(username){
	return {
		pic: getProfilePic(username),
		link: getProfileLink(username)
	}
}

getProfileData('lucasblom');



// instead do the following

class ProfilePic extends React.Component{
	render(){
		return(
			<img src={'https://photo.fb.com/' + this.props.username } />
		)
	}
}

class ProfileLink extends React.Component {
	render(){
		return(
			<a href={'https://www.fb.com/' + this.props.username}>
				{this.props.username}
			</a>
		)
	}
}

class Avatar extends React.Component{
	render(){
		return(
			<div>
				<ProfilePic username={this.props.username} />
				<ProfileLink username={this.props.username} />
			</div>
		)
	}
}

<Avatar username="lucasblom" />


// the following are stateless functional components
var ProfilePic = function(props){
	return <img src={'https://photo.fb.com/' + props.username} />
}

var ProfileLink = function(props){
	return(
		<a href={'https://www.fb.com/' + props.username}>
			{props.username}
		</a>
	)
}

var Avatar = function(props){
	return(
		<div>
			<ProfilePic username={props.username} />
			<ProfileLink username={props.username} />
		</div>
	)
}

<Avatar username='lucasblom' />



//  Introduction to PropTypes
class Users extends React.Component{
	render(){
		return (
			<ul>
				{this.props.list.map(function(friend){
					return <li>{friend}</li>
				})}
			</ul>
		)
	}
}

var React = require('react');
var PropTypes = require('prop-types');

class Users extends React.Component{
	render(){
		return(
			<ul>
				{this.props.list.map(function(friend){
					return <li>{friend}</li>
				})}
			</ul>
		)
	}
}

Users.propTypes = {
	list: PropTypes.array.isRequired
}
