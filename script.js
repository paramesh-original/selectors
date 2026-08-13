const button = document.getElementsByName("myButton")[0];

button.addEventListener("click", function() {

    // Selecting by Class Name
    const descriptions =
        document.getElementsByClassName("description");

    // Selecting by Tag Name
    const allParagraphs =
        document.getElementsByTagName("p");

    // Selecting by Name
    const buttonByName =
        document.getElementsByName("myButton");

    // Using querySelector
    const firstParagraph =
        document.querySelector(".description");

    // Using querySelectorAll
    const allDescriptions =
        document.querySelectorAll(".description");

    // Display the data on HTML screen
    document.getElementById("output").innerHTML =
        "Elements with class 'description': "
        + descriptions.length + "<br><br>" +

        "All &lt;p&gt; elements: "
        + allParagraphs.length + "<br><br>" +

        "Button with name 'myButton': "
        + buttonByName.length + "<br><br>" +

        "First element with class 'description': "
        + firstParagraph.textContent + "<br><br>" +

        "All elements with class 'description': "
        + allDescriptions.length;
});
