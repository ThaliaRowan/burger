// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");

    var newBurgerState = {
      devoured: newState
    };
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed sleep to", newState);
        // Reload the page to get the updated list
        location.reload();
        
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: $("[name=devoured]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})
