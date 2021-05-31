import React, { Component } from "react";
 
class Route extends Component {
  render() {
    return (
      <div>
        <h2>ROUTES</h2>
        <p>Here are the API routes fetched in this project</p>
        <ol>
          <li><a href="http://localhost:5000/address">/address</a></li>
          <li><a href="http://localhost:5000/animals">/animals</a></li>
          <li><a href="http://localhost:5000/books">/books</a></li>
          <li><a href="http://localhost:5000/comments">/comments</a></li>
          <li><a href="http://localhost:5000/foodphotos">/foodphotos</a></li>
          <li><a href="http://localhost:5000/home">/home</a></li>
          <li><a href="http://localhost:5000/movies">/movies</a></li>
          <li><a href="http://localhost:5000/photos">/photos</a></li>
          <li><a href="http://localhost:5000/products">/products</a></li>
          <li><a href="http://localhost:5000/shows">/shows</a></li>
          <li><a href="http://localhost:5000/songs">/songs</a></li>
          <li><a href="http://localhost:5000/sports">/sports</a></li>
          <li><a href="http://localhost:5000/tasks">/tasks</a></li>
          <li><a href="http://localhost:5000/users">/users</a></li>
          <li><a href="http://localhost:5000/vehicles">/vehicles</a></li>
        </ol>
      </div>
    );
  }
}
 
export default Route;