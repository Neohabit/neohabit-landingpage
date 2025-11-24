// Mesmo script de lógica simples para o form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');

    const sendContactForm = (formData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() < 0.9 ? resolve() : reject();
            }, 1500);
        });
    };

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        alertSuccess.classList.add('d-none');
        alertError.classList.add('d-none');
        submitBtn.disabled = true;
        btnText.textContent = 'Enviando...';
        btnLoader.classList.remove('d-none');

        try {
            await sendContactForm({}); // Mock send
            alertSuccess.classList.remove('d-none');
            form.reset();
        } catch (error) {
            alertError.classList.remove('d-none');
        } finally {
            submitBtn.disabled = false;
            btnText.textContent = 'Solicitar Contato';
            btnLoader.classList.add('d-none');
        }
    });
});
