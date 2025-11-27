// Mesmo script de lógica simples para o form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');
    const API_URL = 'https://devapi.neohabit.com.br/contact/landing-page';
    

    const sendContactForm = async (data) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Falha no envio');
        }
        
        // Tenta processar o JSON de resposta, se houver, ou retorna vazio
        try {
            return await response.json();
        } catch (e) {
            return {};
        }
    };

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        // Coletar dados reais do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            profile: document.getElementById('profile').value,
            message: document.getElementById('message').value
        };

        alertSuccess.classList.add('d-none');
        alertError.classList.add('d-none');
        submitBtn.disabled = true;
        btnText.textContent = 'Enviando...';
        btnLoader.classList.remove('d-none');

        try {
            await sendContactForm(formData);
            alertSuccess.classList.remove('d-none');
            form.reset();
        } catch (error) {
            console.error(error);
            alertError.classList.remove('d-none');
        } finally {
            submitBtn.disabled = false;
            btnText.textContent = 'Solicitar Contato';
            btnLoader.classList.add('d-none');
        }
    });
});
