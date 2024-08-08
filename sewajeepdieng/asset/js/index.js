// document.addEventListener('DOMContentLoaded', function() {
    
//     function loadHarga() {
//         fetch('asset/layout/harga_pesan.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('main').innerHTML = data;
//                 setActiveNavLink();
//             })
//             .catch(error => console.error('Error loading main:', error));
//     }

//     function loadHome() {
//         fetch('asset/layout/home.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('main').innerHTML = data;
//                 setActiveNavLink();
//             })
//             .catch(error => console.error('Error loading footer:', error));
//     }
// });

function setActiveNavLink() {
    const currentUrl = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (linkUrl === currentUrl) {
            link.classList.add('active');
        }
    });
}
setActiveNavLink();