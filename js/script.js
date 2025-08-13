// JavaScript to handle form submission
document.getElementById("messageForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture the values of the form inputs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validate that all fields have been filled out
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    // Create an HTML string with the form data
    let output = `
        <h3>Message Submitted:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Display the output in the #formOutput div
    document.getElementById("formOutput").innerHTML = output;
};
