document.addEventListener('DOMContentLoaded', function () {

  var navbar = document.querySelector('.navbar');
  var lastScrollTop = 0;

  // Hide navbar on scroll down, show on scroll up
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var threshold = navbar ? navbar.offsetHeight * 2 : 150;

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
      navbar.classList.add('scrollUp');
    } else if (scrollTop < lastScrollTop) {
      navbar.classList.remove('scrollUp');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, { passive: true });


  // Hamburger icon animation (toggle active class)
  var toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

});
