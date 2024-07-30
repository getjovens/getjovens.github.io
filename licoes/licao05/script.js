document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close');

    function openModal(verse) {
        let text;

        switch (verse) {
            case 'Lucas 4:14-22':
                text = 'Texto do versículo Lucas 4:14-22...'; // Substitua pelo texto real
                break;
            case 'Mateus 10:16-20':
                text = 'Texto do versículo Mateus 10:16-20...'; // Substitua pelo texto real
                break;
            case 'Lc 1:5-16':
                text = 'Texto do versículo Lc 1:5-16...'; // Substitua pelo texto real
                break;
            case 'Lc 1:26-38':
                text = 'Texto do versículo Lc 1:26-38...'; // Substitua pelo texto real
                break;
            case 'Lc 1:39-45':
                text = 'Texto do versículo Lc 1:39-45...'; // Substitua pelo texto real
                break;
            case 'Lc 2:25-32':
                text = 'Texto do versículo Lc 2:25-32...'; // Substitua pelo texto real
                break;
            case 'Mt 1:18-21':
                text = 'Texto do versículo Mt 1:18-21...'; // Substitua pelo texto real
                break;
            case 'Mt 4:1-11':
                text = 'Texto do versículo Mt 4:1-11...'; // Substitua pelo texto real
                break;
            case 'Mt 13:13-17':
                text = 'Texto do versículo Mt 13:13-17...'; // Substitua pelo texto real
                break;
            case 'Lucas 1:35':
                text = 'Texto do versículo Lucas 1:35...'; // Substitua pelo texto real
                break;
            case 'Lucas 2:25-32':
                text = 'Texto do versículo Lucas 2:25-32...'; // Substitua pelo texto real
                break;
            case 'Lucas 2:36-38':
                text = 'Texto do versículo Lucas 2:36-38...'; // Substitua pelo texto real
                break;
            case 'João 16:13-14':
                text = 'Texto do versículo João 16:13-14...'; // Substitua pelo texto real
                break;
            default:
                text = 'Texto não encontrado.';
                break;
        }

        modalText.textContent = text;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('a[onclick^="openModal"]').forEach(citation => {
        citation.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            const verse = citation.getAttribute('onclick').replace("openModal('", "").replace("')", "");
            openModal(verse);
        });
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
