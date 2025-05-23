document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const investBtn = document.getElementById('invest-btn');
    const investModal = document.getElementById('invest-modal');
    const closeModal = document.querySelector('.close-modal');
    const cryptoOptions = document.querySelectorAll('.crypto-option');
    const depositContainer = document.getElementById('deposit-container');
    const cryptoAddress = document.getElementById('crypto-address');
    const selectedCrypto = document.getElementById('selected-crypto');
    const copyAddressBtn = document.getElementById('copy-address');
    const depositDoneBtn = document.getElementById('deposit-done');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeConfirmation = document.getElementById('close-confirmation');
    
    // Direcciones de depósito (simuladas)
    const depositAddresses = {
        'USDT': 'TXYZ1234567890abcdefghijklmnopqrstuvw',
        'BTC': '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        'SOL': 'SolanaAddress1234567890abcdefghijklmnopqrstuvwxyz',
        'TRX': 'TXYZ1234567890abcdefghijklmnopqrstuvw',
        'TON': 'EQABC1234567890abcdefghijklmnopqrstuvwxyz1234567890abcd'
    };
    
    // Abrir modal de inversión
    investBtn.addEventListener('click', function() {
        investModal.style.display = 'flex';
    });
    
    // Cerrar modal de inversión
    closeModal.addEventListener('click', function() {
        investModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === investModal) {
            investModal.style.display = 'none';
        }
        if (event.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
    
    // Seleccionar criptomoneda
    cryptoOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remover selección previa
            cryptoOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Añadir selección actual
            this.classList.add('selected');
            
            // Obtener la criptomoneda seleccionada
            const crypto = this.getAttribute('data-crypto');
            
            // Mostrar dirección correspondiente
            cryptoAddress.textContent = depositAddresses[crypto];
            selectedCrypto.textContent = crypto;
            
            // Mostrar contenedor de depósito
            depositContainer.style.display = 'block';
        });
    });
    
    // Copiar dirección al portapapeles
    copyAddressBtn.addEventListener('click', function() {
        const textToCopy = cryptoAddress.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Cambiar icono temporalmente para mostrar confirmación
            const icon = this.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
            }, 2000);
        });
    });
    
    // Confirmar depósito realizado
    depositDoneBtn.addEventListener('click', function() {
        investModal.style.display = 'none';
        confirmationModal.style.display = 'flex';
    });
    
    // Cerrar modal de confirmación
    closeConfirmation.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    
    // Navegación inferior
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Aquí podrías añadir lógica para cargar diferentes secciones
            const section = this.getAttribute('href').substring(1);
            console.log(`Mostrar sección: ${section}`);
        });
    });
});
