
    document.querySelector("form").addEventListener("submit", function(event) {
        var name = document.querySelector("[name='name']").value;
        var email = document.querySelector("[name='email']").value;
        var phone = document.querySelector("[name='phone']").value;

        if (!name || !email || !phone) {
            alert("All fields are required.");
            event.preventDefault();
        }

        // Simple email validation
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Track Apply Now button clicks
        document.querySelectorAll(".cta-button").forEach(button => {
            button.addEventListener("click", function () {
                gtag("event", "apply_now_clicked", {
                    event_category: "CTA",
                    event_label: "Apply Now Button",
                    value: 1
                });
                console.log("Apply Now button clicked! Event sent to GA.");
            });
        });
    
        // Track form submission
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", function (event) {
                gtag("event", "form_submission", {
                    event_category: "Lead Form",
                    event_label: "Application Form Submitted",
                    value: 1
                });
                console.log("Form submitted! Event sent to GA.");
            });
        }
    });
    
