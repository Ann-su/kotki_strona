const quotes = [
  "Pies je. Kot jada.",
  "Na myszy zawsze łasy kot.",
  "Psy mają swoich panów, koty – służących",
  "Kot działa według zasady: proś, a może Ci dam.",
  "Kot ma zbyt wielką duszę, by nie mieć serca.",
  " Wiecie jak to jest z kotami: nie mają właścicieli, tylko służbę",
  "Baba jak ten kot: kto pogłaszcze, ten panem",
  "Wszystko, co dobre, zaczyna się od kota."
];

function changeQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}