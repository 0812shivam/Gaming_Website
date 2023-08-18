function handleThemeChange() {
    const themeCheckbox = document.getElementById('checkbox');
    const selectedTheme = themeCheckbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', selectedTheme);
    const body = document.body;
    if (selectedTheme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const body = document.body;
        if (savedTheme === 'dark') {
          body.classList.add('dark');
          document.getElementById("checkbox").checked=true;
        } else {
          body.classList.remove('dark');
        }
    }
  });

const quizData = [{
    question: "What's the main ingredient in chocolate?",
    a: "Love",
    b: "Unicorn tears",
    c: "Cocoa beans",
    d: "Fairy dust",
    correct: "c",},
{
    question: "How do you communicate with a dolphin?",
    a: "Send a text message",
    b: "Use underwater telepathy",
    c: "Speak in dolphin language",
    d: "Just smile and wave",
    correct: "d",},
{
    question: "If cats ruled the world, what would be their official currency?",
    a: "Meowcoins",
    b: "Purrbucks",
    c: "Feline francs",
    d: "Kitty cash",
    correct: "b",},
{
    question: "What's a group of flamingos called?",
    a: "A flamboyance",
    b: "A flamingle",
    c: "A flock",
    d: "A pink parade",
    correct: "a",},
{
    question: "What's a koala's favorite instrument?",
    a: "Eucalyptus flute",
    b: "Bamboo saxophone",
    c: "Leafy guitar",
    d: "Bear-itone",
    correct: "c",},
{
    question: "Why did the chicken join a band?",
    a: "To impress the hens",
    b: "Because it had perfect pitch",
    c: "It was good at clucking to the beat",
    d: "It wanted to play the egg-shaker",
    correct: "b",},
{
    question: "How do you spot a hidden ninja?",
    a: " Listen for stealthy giggles",
    b: "Look for a trail of shurikens",
    c: "You can't, that's the point",
    d: "Search for a 'Ninja Crossing' sign",
    correct: "c",},
{
    question: "Why did the computer go to therapy?",
    a: "Too many bugs in its code",
    b: "It had too many unresolved algorithms",
    c: "It couldn't find its inner 'Ctrl'",
    d: "It felt bytesized by life's problems",
    correct: "c",},
{
    question: "How do you organize a space party?",
    a: "Rent a rocket ship",
    b: "Ask the aliens to RSVP",
    c: "You can't, space is infinite!",
    d: "Just 'planet' and see who shows up",
    correct: "d",},
{
    question: "What's a vampire's favorite fruit?",
    a: "Blood orange",
    b: "Apple (with a bite taken out)",
    c: "Garlic bulb (to keep away other vampires)",
    d: "Count Chocula cereal",
    correct: "a",},
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
    if(total === index){
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

// document.querySelector("#prev").addEventListener(
//     "click",
//     function() {
//         const data = quizData[index]
//         const ans = getAnswer()
//         if (ans === data.correct) {
//             correct++;
//         } else {
//             incorrect++;
//         }
//         index--;
//         loadQuestion()
//     }
//     )

document.querySelector("#reset").addEventListener(
        "click",
        function(){
            allInputs.forEach(
                (inputEl) => {
                    inputEl.checked = false;
                }
            )
        }
)


const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Quiz Completed! </h3>
        <h2 class="w-100"> You've scored ${correct} / ${total} </h2>
        <button class="reload" type='button' onclick=location.reload(); > Reload </button>
    </div>`
}

loadQuestion(index);