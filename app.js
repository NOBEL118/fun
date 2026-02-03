const noBtn = document.querySelector(".no-btn");
const container = document.querySelector(".container");

noBtn.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

document.querySelector(".yes-btn").onclick = () => {
  window.open(
    "https://web.whatsapp.com/send?phone=919268632278&text=I%20said%20YES%20💖",
    "_blank"
  );
};

