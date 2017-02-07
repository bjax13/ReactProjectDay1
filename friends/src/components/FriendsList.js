import React from 'react';


class FriendsList extends React.Component {
  constructor( probs ){
    super( probs );

    this.state = {
      searchText: "",
      orderBy: "name",
      order:"ascending"
    };

    handleChange (feild, event){
      this.state({[feild] : event.target.value});
    }




  }

  render(){
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
                      <option value"descending">Descending</option>
                      <option value"ascending">Ascending</option>
                  </select>

              </div>
          </form>

          <ul>
          </ul>
      </div>
    );
  }
}

export default FriendsList;
