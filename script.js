function toggleAccordion(header) {
  const content = header.nextElementSibling; 
  const icon = header.querySelector(".icon-img"); 

  const isOpen = content.classList.contains("open");

  if (isOpen) {
    content.classList.remove("open"); 
    icon.src = "./assets/images/icon-plus.svg"; 
  } else {
    content.classList.add("open"); 
    icon.src = "./assets/images/icon-minus.svg"; 
  }
}
