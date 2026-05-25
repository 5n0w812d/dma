// SCRIPT.JS
const reasons = [
  {
    title: "You Make Me Feel Safe",
    text: "Like finally finding the right side of the Force after wandering the galaxy.",
    emoji: "✨",
  },
  {
    title: "You Always Make Me Laugh",
    text: "Even on hard days, you somehow pull me out of my head.",
    emoji: "🚀",
  },
  {
    title: "You Understand Me",
    text: "You’ve seen every version of me and still choose me.",
    emoji: "🌌",
  },
  {
    title: "You’re My Favorite Adventure",
    text: "Every day with you feels exciting.",
    emoji: "🪐",
  },
  {
    title: "You Love Me Gently",
    text: "You handle my heart with patience and care.",
    emoji: "💫",
  },
  {
    title: "You’re My Home",
    text: "Being with you feels like home.",
    emoji: "⭐",
  },
];

const cardsContainer = document.getElementById("cards");

reasons.forEach((reason) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div style="font-size: 50px">${reason.emoji}</div>
    <h3>${reason.title}</h3>
    <p>${reason.text}</p>
  `;

  cardsContainer.appendChild(card);
});

function showMessage() {
  alert("I love you endlessly 💛");
}
