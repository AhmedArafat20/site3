const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// WhatsApp Form
const whatsappForm =
  document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function (e) {

  e.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const service =
    document.getElementById("service").value;

  const message =
    document.getElementById("message").value.trim();


  const whatsappNumber = "966557583587";


  const text =
`السلام عليكم

الاسم: ${name}

الخدمة المطلوبة:
${service}

تفاصيل الطلب:
${message || "لا توجد تفاصيل إضافية"}`;


  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


  window.open(whatsappURL, "_blank");

});