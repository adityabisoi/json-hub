import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div data-testid="home-div">
        <h2>REST-FETCH PROJECT</h2>
        <p>A community-owned REST API service for testers and developers.
        Fetch provides REST API endpoints for different types of placeholders,
        which can be easily used during testing and development without the
        need for creating sample data manually.</p>
 
        <p>The endpoint usertest which follows the same schema
        as the users/ endpoint, must be used for testing</p>
      </div>
    );
  }
}
 
export default Home;