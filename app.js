const accordionButtons = document.querySelectorAll(".acc-btn")
console.log(accordionButtons)
accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active")
    const accordionDescription = this.nextElementSibling
    const minusIcon = this.querySelector(".minus-icon")
    const plusIcon = this.querySelector(".plus-icon")

    if (accordionDescription.style.maxHeight ) {
      accordionDescription.style.maxHeight = null
      minusIcon.style.display = 'none'
      plusIcon.style.display = 'block'
    } else {
      console.log('entre en el else', accordionDescription.style.maxHeight);
      accordionDescription.style.maxHeight = accordionDescription.scrollHeight + "px" 
      plusIcon.style.display = 'none'
      minusIcon.style.display = 'block'
    }
  })
})
