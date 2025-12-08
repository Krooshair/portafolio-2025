export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const header = document.querySelector('header'); // O usa un id específico si lo tienes
  
  if (section && header) {
    const headerHeight = header.offsetHeight;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionTop - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};