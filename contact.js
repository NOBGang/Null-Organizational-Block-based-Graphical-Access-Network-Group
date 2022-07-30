(function() {
    emailjs.init('B6WdBDf70phPzDkxn');
})();

window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();

                emailjs.sendForm('service_6hag12f', 'template_j0v08gi', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        alert("Message Sent Successfully");
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert("Message Not Sent");
                    });
            });
        }
