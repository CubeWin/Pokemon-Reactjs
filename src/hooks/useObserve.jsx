const observerOptions = {
  rootMargin: '0px 0px 250px 0px',
  threshold: 1.0,
};

const loadContent = ([entradas]) => {
  // if (apiURL && entradas.isIntersecting) callmer();
};

const observador = new IntersectionObserver(loadContent, observerOptions);

export default observador;
