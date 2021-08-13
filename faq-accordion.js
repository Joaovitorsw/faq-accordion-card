const $faqItems = document.querySelectorAll(".faq-item");
const $titlesItems = document.querySelectorAll(".title-item");
const $paragraphItems = document.querySelectorAll(".paragraph-item");

$faqItems.forEach(($faqItem) => {
  $faqItem.addEventListener("click", () => toggleClass($faqItem));
});

function toggleClass($element) {
  $element.classList.toggle("active");
}
