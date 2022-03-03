const quotes = [
{
  quote: "어느 누구도 과거로 돌아가서 새롭게 시작할 수는 없지만, 지금부터 시작해서 새로운 결실을 맺을 수는 있다.",
  author: "karl Barth"
},
{
    quote: "꿈을 이루고자 하는 용기만 있다면, 모든 꿈을 이룰 수 있다.",
    author: "Walt Disney"
},
{
    quote: "더 깔끔하고 밝은 사람이 되도록 노력하라. 자기 자신이 바로 세상을 보는 창이다.",
    author: "George Bernard Shaw"
},
{
    quote: "할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람 역시 그렇게 된다.",
    author: "Charles de Gaulle."
},
{
    quote: "꿈을 이루고자 하는 용기만 있다면, 모든 꿈을 이룰 수 있다.",
    author: "월트디즈니"
},
{
    quote: "생각하는 대로 살지 않으면, 사는 대로 생각하게 된다.",
    author: "Paul Valery"
},
{
    quote: "자신의 행동에 대해 너무 고민하지 마라. 모든 인생은 실험이다. 실험은 많이 할 수록 더 나아진다",
    author: "Ralph Waldo Emerson"
},
{
    quote: "시작하는 방법은 그만 말하고 이제 행동하는 것이다",
    author: "Walt Disney"
}
]

const quote = document.querySelector("#random span:first-child");
const author = document.querySelector("#random span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;