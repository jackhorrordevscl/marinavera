const btn = document.getElementById('sendMessageButton');   

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_4wglq3l';

    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
        btn.value = 'Enviando...';
        alert('Enviado!');
     }, (err) => {
        btn.value = 'Enviando...';
        alert(JSON.stringify(err));
     });
});