const quotes = [
    "Pies je. Kot jada.",
    "Na myszy zawsze łasy kot.",
    "Psy mają swoich panów, koty – służących",
    "Kot działa według zasady: proś, a może Ci dam.",
  "Kot ma zbyt wielką duszę, by nie mieć serca.",
    "Koty są istotami tajemniczymi, w ich umysłach jest więcej niż możemy sobie wyobrazić.",
"Kotom bez trudu udaje się to, co nie jest dane człowiekowi: iść przez życie nie czyniąc hałasu"
];

function changeQuote() 
{
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}