const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sta inviando';

   const serviceID = 'service_a8d1bxp';
   const templateID = 'template_ce99ea5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Invia';
      alert('Inviata!');
    }, (err) => {
      btn.value = 'Invia';
      alert(JSON.stringify(err));
    });
});