
//about me -hobby,experience and education section 


     var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");

     function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
         for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
     }


     //form validation

function validateForm() {
    let name = document.forms[0]["Name"].value.trim();
    let email = document.forms[0]["email"].value.trim();
    let message = document.forms[0]["Message"].value.trim();

    // Patterns
    let namePattern = /^[A-Za-z\s]{2,50}$/;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; // all lowercase only

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (!namePattern.test(name)) {
        alert("Name should contain only letters and spaces (2-50 characters).");
        return false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        alert("Email must be in lowercase and in a valid format.");
        return false;
    }

    // Message validation
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


/*--------toggle----- */

  function toggleMenu() {
    const nav = document.getElementById("navlist");
    nav.classList.toggle("show");
  }

