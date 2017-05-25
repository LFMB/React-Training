var React  = require('react');
var ReactDOM = require('react-dom');


class Badge extends React.Component{
	render(){
		return(
			<div>
				<img 
					src = {this.props.img}
					alt = 'Avatar'
					style={{
						width: 100,
						height: 100
					}}
				/>
				<h1>Name {this.props.name}</h1>
				<h3>Username: {this.props.Username}</h3>
			</div>
		)
	}
}

ReactDOM.render(
	<Badge
		name = 'Lucas Blom'
		username = 'lfmb'
		img = 'https://avatar0.githubusercontent.com/u/2933430?v='
	/>
)