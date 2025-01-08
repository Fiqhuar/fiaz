


window.addEventListener('scroll', function () {
  const socialLinks = document.querySelectorAll('.social-link');
  const lightBackgroundThreshold = 650;  // First threshold

  const lightBackgroundThreshold2 = 5050; // Second threshold
  const lightBackgroundThreshold3 = 5595;
  const lightBackgroundThreshold4 = 6000;

  socialLinks.forEach(link => {
    const rect = link.getBoundingClientRect();
    const linkPosition = rect.top + window.scrollY; // Get the position of the text element

    if (linkPosition < lightBackgroundThreshold) {
      // Below 650px: Apply white text
      link.classList.add('white-text');
      link.classList.remove('gradient-text');
    } else if (linkPosition >= lightBackgroundThreshold && linkPosition < lightBackgroundThreshold2) {
      // Between 650px and 5050px: Apply gradient text
      link.classList.add('gradient-text');
      link.classList.remove('white-text');
    }  else if (linkPosition >= lightBackgroundThreshold3 && linkPosition < lightBackgroundThreshold4) {
      // Between 5595px and 6000px: Apply gradient text
      link.classList.add('gradient-text');
      link.classList.remove('white-text');
    } 
    else {
      // Above 1050px: Apply white text again
      link.classList.add('white-text');
      link.classList.remove('gradient-text');
    }
  });
});


document.addEventListener('scroll', () => {
  const fiaz = document.getElementById('fiaz');
  const khan = document.getElementById('khan');
  const container = fiaz.parentElement.getBoundingClientRect();

  // Check if the container is in the viewport
  if (container.top < window.innerHeight && container.bottom > 0) {
      fiaz.classList.add('visible', 'left');
      khan.classList.add('visible', 'right');
  } else {
      fiaz.classList.remove('visible', 'left');
      khan.classList.remove('visible', 'right');
  }
});


  
  