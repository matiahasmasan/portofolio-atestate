// Modal functionality for gallery images
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  // Open modal
  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector("h3").textContent;
      const description = card.querySelector("p").textContent;

      modalImage.src = img.src;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // Add entrance animation
      modal.classList.add("modal-active");
    });
  });

  // Close modal functions
  const closeModal = () => {
    modal.classList.remove("modal-active");
    modal.classList.add("modal-closing");

    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("modal-closing");
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 300);
  };

  // Close on button click
  modalClose.addEventListener("click", closeModal);

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});

// Add this to your existing JavaScript file
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("translate-x-full");
    document.body.classList.toggle("overflow-hidden");
  };

  burgerMenu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
