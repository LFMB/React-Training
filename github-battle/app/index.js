var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
	render(){
		return(
			<div>Hello Training!</div>
		)
	}
}


class FriendsContainer extends React.Component{
	render(){
		var name = 'Lucas Blom';
		var friends = ['Hank Hyde', 'John Dean', 'Caroline Hardin'];
		return(
			<div>
				<h3>Name: {name}</h3>
				<ShowList name={friends} />
			</div>
		)
	}
}

class ShowList extends React.Component{
	render() {
		return(
			<div>
				<h3>Friends</h3>
				<ul>
					{this.props.names.map(function(friend){
						return <li>{friend}</li>
					})}
				</ul>
			</div>
		)
	}
}


class Badge extends React.Component{
	render(){
		return(
			<div>
				<img
					src={this.props.img}
					alt= 'Avatar'
					style={{width:100, height: 100}}
				/>
				<h1>Name: {this.props.name}</h1>
				<h3>Username: {this.props.username}</h3>
			</div>
		)
	}
}


ReactDOM.render
	/*
	<App />,
	document.getElementById('app'),
	*/
	<Badge
		name = 'Tyler McGinnis'
		username = 'tylermcginnis'
		img = 'https://avatars0.githubusercontent.com/u/2933430?v=36s=460'
	/>,
	document.getElementById('badge')
);