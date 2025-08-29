// Header
document.addEventListener("DOMContentLoaded", function() {
    fetch('src/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Now add hamburger toggle logic
            const btn = document.getElementById('menu-btn');
            const menu = document.getElementById('mobile-menu');
            if (btn && menu) {
                btn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }
        });
});
// Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('src/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

function initNavScrolling() {
    const navLinks = document.querySelectorAll('#header nav a');
    const sections = Array.from(navLinks).map(a => {
      const id = a.getAttribute('href').slice(1);
      return document.getElementById(id);
    });

    // on click: smooth scroll
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId)
          .scrollIntoView({behavior: 'smooth', block: 'start'});
      });
    });

    // on scroll: toggle “active” class
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 200; // offset for header
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          navLinks.forEach(l => l.classList.remove('active'));
          navLinks[i].classList.add('active');
        }
      });
    });
}

// Entrance
window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          document.getElementById('entrance-page').classList.add('hide');
          setTimeout(function() {
            document.getElementById('entrance-page').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 1000);
        }, 2200);

});