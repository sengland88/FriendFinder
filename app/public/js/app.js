  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    
          var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
              $("#q1").val(),
              $("#q2").val(),
              $("#q3").val(),
              $("#q4").val(),
              $("#q5").val(),
              $("#q6").val(),
              $("#q7").val(),
              $("#q8").val(),
              $("#q9").val(),
              $("#q10").val()
              ]
            };

            if (newFriend.scores.includes("0") || newFriend.name === "" || newFriend.photo === "" ) {
              alert("Please fill in all answers")
              return
            }          

        
          $.post("/api/friends", newFriend)
            .then(function(data) {
              console.log("survey.html", data);
              $(".theMatch").text(data.name);
              $("#thePhoto").attr("src" , data.photo);
              $(".modal").modal("toggle");
              clearFields()
            });
  
  });
  

  function clearFields() {
    $(".custom-select").val("")
  }


