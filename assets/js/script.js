const modal = document.querySelector(".image-modal");
const previews = document.querySelectorAll(".gallery img");
const originalImg = document.querySelector(".full-image");
const imgTitle = document.querySelector(".image-modal .content h2");
const imgDesciption = document.querySelector(".image-modal .content p");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    originalImg.classList.add("open");
    // Dynamic change content
    const originalSrc = preview.getAttribute("data-original");
    originalImg.src = originalSrc;

    const originaTitle = preview.getAttribute("data-title");
    imgTitle.textContent = originaTitle;

    const originalDes = preview.getAttribute("data-description");
    imgDesciption.textContent = originalDes;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("image-modal")) {
    modal.classList.remove("open");
    originalImg.classList.remove("open");
  }
});
