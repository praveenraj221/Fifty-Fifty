document.getElementById("donationForm").addEventListener("submit", function(event) {
	event.preventDefault();
	
	// Get form values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var amount = document.getElementById("amount").value;
  
	// Here, you can perform further actions like sending the donation details to a server, displaying a thank you message, etc.
	console.log("Donation Details:");
	console.log("Name: " + name);
	console.log("Email: " + email);
	console.log("Amount: $" + amount);
	
	// Clear form fields
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("amount").value = "";
  });
  