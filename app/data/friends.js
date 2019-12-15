// const express = require("express");

var friendsArray = [
    {
      name:"Colton",
      number: "number",
      email: "email",
      username: "username"
  
      // "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      // "scores":[]
    }
  ]



  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newTables = {
      name: $("#name").val().trim(),
      number: $("#number").val().trim(),
      email: $("#email").val().trim(),
      unique: $("#username").val().trim()
    };

    console.log(newTables)
  
    $.post("/api/friebds", newTables)
      .then(function(data) {
        console.log("add.html", data);
        alert("Adding Table...");
      });
  });

  module.exports = friendsArray;