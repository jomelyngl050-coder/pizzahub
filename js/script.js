document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const feedback = document.getElementById("customerFeedback").value.trim();

    const message = document.getElementById("message");
    const feedbackList = document.getElementById("feedbackList");

    if (name === "" || feedback === "") {
        message.textContent = "Please complete all fields.";
        return;
    }

    // Remove the default message
    const emptyMessage = feedbackList.querySelector(".empty-message");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Create a feedback container
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    // Display customer name
    const customerName = document.createElement("h4");
    customerName.textContent = name;

    // Display customer thoughts
    const customerThoughts = document.createElement("p");
    customerThoughts.textContent = feedback;

    feedbackItem.appendChild(customerName);
    feedbackItem.appendChild(customerThoughts);

    // Display newest feedback first
    feedbackList.prepend(feedbackItem);

    message.textContent = "Thank you, " + name + "! Your feedback has been added.";

    // Clear the form
    this.reset();
});