

// The users and todos variables have all the data for you to work with
// Check your console to see the result of the following console.logs,
// and inspect the data
//

//Instructions
// Create an alert that lists all users, with their ids, names and what city they're from ✅

// SOME MORE INSTRUCTIONS HERE
// well, first change the console.log to an alert. You will need to figure out how to put all of the users in one alert (hint: loops!)

let message = ""

for (let user of users) {

    message += ("User ID: " + user.id + ","+ " User NAME: " + user.name + "," + " User CITY: " + user.address.city + "." + "\n")

  }
  alert(message);

// - Prompt the user for a user id and than:
// - Display an alert with the username and all the todos titles that belong to that user
// then later, you will need to use the user's id and the userId property of the todo to combine the information. That's gonna be a for loop too 😛 potentially 2 in 1 actually 🙂
// prompt for an id, store in a variable, use that to solve this:Display an alert with the username and all the todos titles that belong to that user

let enteredId = Number(prompt("Enter a user id"));
let message1 = "User with the id number: " + enteredId + " has the following todos: " + "\n";

for (let todo of todos ) {
  if (enteredId===todo.userId ) {
  message1 += " - " + todo.title + "." + "\n"
  }
}

for (let user of users) {
  if (enteredId===user.id) {
    message1 += "This users name is: " + user.name + "." + "\n"
  }
}
alert(message1);


