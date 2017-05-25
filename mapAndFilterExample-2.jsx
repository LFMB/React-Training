

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

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(user){
  return <li>{user}</li>})
}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);


var friends = ['Ean', 'Tyler', 'Mikenzi', 'Eric', 'Jessica'];
var newFriends = friends.filter(function (friend) {
  return friend[0] === 'E'
});



class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
         {this.props.list.filter(function(user){
         	return user.friend === true
         }).map(function(user){
         	return <li>{user.name}</li>
         })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {/*Create an <li> for every name in the list array who is NOT your friend*/}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);


