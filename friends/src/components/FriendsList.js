import React from 'react';
import Friend from './Friend.js';
import friends from './friends.js';


class FriendsList extends React.Component {
  constructor( props ){
    super( props );

    this.state = {
      searchText: "",
      orderBy: "name",
      order:"ascending"
    }
  }

    handleChange (feild, event){
      this.state({[feild] : event.target.value});
    }






  render(){
    const friendsList = friends.map( friend =>(
      <Friend
        currentLocation={ friend.current_location || {}}
        friendCount={ friend.friend_count}
        key={friend.$$hashKey}
        name={friend.pic_square}
        status={ friend.status ? friend.status.message: ""}
      />
    ));

    return(
      <div>
          <form className="form-inline searchForm" role="form">
              <div className="form-group">

                  <input onChange={ this.handleChange.bind(this,"searchText")}  value={this.state.searchText} className="form-control" placeholder="Search For Friends" />

                  <select onChange={this.handleChange.bind(this,"orderBy")} className="input-medium" value={this.state.orderBy}>
                      <option value="Name">Name</option>
                      <option value="friend_count">#Friends</option>
                  </select>

                  <select onChange={this.handleChange.bind(this,"order")} value={this.state.order} className="input-medium">
                      <option value="descending">Descending</option>
                      <option value="ascending">Ascending</option>
                  </select>

              </div>
          </form>

          <ul>
          {friendsList}
          </ul>
      </div>
    );
  }
}

export default FriendsList;
