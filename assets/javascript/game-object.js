

var arrImg = [
  "assets/images/crystal-1.jpeg"
  ,"assets/images/crystal-2.jpeg"
  ,"assets/images/crystal-3.jpeg"
  ,"assets/images/crystal-4.jpeg"
  ];

var game = {
  make: "Honda",
  model: "Fit",
  color: "Blue Raspberry",
  mileage: 3000,
  isWorking: true,

  reset: function() {
    $("#roundResult").text("");
    targetNumber = Math.floor(Math.random() * 102)+19;  
    counter = 0;
    $("#totalScore").text(counter);
    $("#number-to-guess").text(targetNumber);
    for (i=0; i<4; i++)
    {
     numberOptions.pop();
    }
    for (i=0; i<4; i++)
    {
    numberOptions.push(Math.floor(Math.random() * 12)+1);
    console.log(numberOptions[i]);
    imageCrystal = $("#image"+i);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    }
   },
  
  clickCrystal: function(crystalValue) {
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
    },

  checkScore: function() { 
    
    if (counter === targetNumber) {
    //   alert("You win!");
      $("#roundResult").text("You win!");
      wins++;
      $("#wins").text(wins);  
      reset();  
    }
    else if (counter >= targetNumber) {
    //   alert("You lose!!");
      $("#roundResult").text("You lose!!");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  },

  driveToWork: function() {

    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 8;

    alert("New mileage: " + this.mileage);
  },
  
};

// game.start();
// game.reset();


var targetNumber = Math.floor(Math.random() * 102)+19;

var arrImg = [
                "assets/images/crystal-1.jpeg"
                ,"assets/images/crystal-2.jpeg"
                ,"assets/images/crystal-3.jpeg"
                ,"assets/images/crystal-4.jpeg"
                ];

  $("#number-to-guess").text(targetNumber);

  var wins = 0;
  var losses = 0;
  var counter = 0;
  var numberOptions = [];
//   var numberOptions = [10, 5, 3, 7];
  for (i=0; i<4; i++)
    {
    numberOptions.push(Math.floor(Math.random() * 12)+1);
    console.log(numberOptions[i]);
    }
  
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", arrImg[i]);
    imageCrystal.attr("id", "image"+i);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  function reset() {
    $("#roundResult").text("");
    targetNumber = Math.floor(Math.random() * 102)+19;  
    counter = 0;
    $("#totalScore").text(counter);
    $("#number-to-guess").text(targetNumber);
    for (i=0; i<4; i++)
    {
     numberOptions.pop();
    }
    for (i=0; i<4; i++)
    {
    numberOptions.push(Math.floor(Math.random() * 12)+1);
    console.log(numberOptions[i]);
    imageCrystal = $("#image"+i);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    }
  }


  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    game.clickCrystal($(this).attr("data-crystalvalue"));

    // var crystalValue = ($(this).attr("data-crystalvalue"));
    // crystalValue = parseInt(crystalValue);
    // // We then add the crystalValue to the user's "counter" which is a global variable.
    // // Every click, from every crystal adds to the global counter.
    // counter += crystalValue;

    
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#totalScore").text(counter);

    game.checkScore();

    // if (counter === targetNumber) {
    // //   alert("You win!");
    //   $("#roundResult").text("You win!");
    //   wins++;
    //   $("#wins").text(wins);  
    //   reset();  
    // }
    // else if (counter >= targetNumber) {
    // //   alert("You lose!!");
    //   $("#roundResult").text("You lose!!");
    //   losses++;
    //   $("#losses").text(losses);
    //   reset();
    // }

  });