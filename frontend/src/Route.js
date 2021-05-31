import React, { Component } from "react";
 
class Routes extends Component {
  render() {
    return (
      <div data-testid="route-div">
        <h2>ROUTES</h2>
        <p>Here are the API routes fetched in this project</p>
        <ol>
          <li>address routes</li>
          <li>animals routes</li>
          <li>books routes</li>
          <li>comments routes</li>
          <li>foodphotos routes</li>
          <li>home routes</li>
          <li>movies routes</li>
          <li>photos routes</li>
          <li>products routes</li>
          <li>shows routes</li>
          <li>songs routes</li>
          <li>sports routes</li>
          <li>tasks routes</li>
          <li>users routes</li>
          <li>vehicles routes</li>
        </ol>
      </div>
    );
  }
}
 
export default Routes;