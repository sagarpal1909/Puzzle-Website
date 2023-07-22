const quizDB = [
    {
        level: "LEVEL 1",
        question: " Q1 Read the passage and answer the question given below:\nThis country now needs a new equilibrium, a new spirit of national reconciliation that can be brought about only by moving forward to the new frontiers of true equality, fuller opportunity and greater compassion for the weaker sections of its people. Our goal is total freedom for the people that can fully reflect their urges and aspirations for a better life. We cannot remain content by merely reliving our past even under the condition of complete freedom, without a matching concept of the present and the future. We can survive only by seizing every constructive opportunity that can offer a creative alternative to the legacies of the past. It is only through such a lofty endeavour that the country can discover itself with a new sense of adventure and faith in ourselves.\n The aim of the nation is _________.",
        ans: "better life",
        uni: "SOLUTION: better life"
    },
    {
        level: "LEVEL 2",
        question: "Q2 Look at this series:\n 21, 9, 21, 11, 21, 13, 21, ... What number should come next?",
        ans: "15",
        uni: "CLUE: See the Difference" 
    },
    {
        level: "LEVEL 3",
        question: "Q3 Check the Grammer:\nI could not put up at a hotel.",
        ans: "Grammar",
        uni: "CLUE: Read the question again" 
    },
    {
        level: "LEVEL 4",
        question: "Q4 A man has $ 10,000 to invest. He invests $ 4000 at 5 % and $ 3500 at 4 %. In order to have a yearly income of $ 500, he must invest the remainder at: (DO NOT WRITE % IN ANSWER)",
        ans: "6.4",
        uni: "CLUE: Interest = Principal * Rate * Time" 
    },
    {
        level: "LEVEL 5",
        question: "Q5 Go to the official YouTube page of Mr. Narendra Modi and Answer is in About Section.",
        ans: "Description",
        uni: "CLUE: The sub-section starting with D" 
    },
    {
        level: "LEVEL 6",
        question: "Q6 Find the Treasure.",
        ans: "Ans",
        uni: "CLUE: It is in this Page" 
    },
    {
        level: "LEVEL 7",
        question: "Q7 Four jolly men sat down to play and played all night,'til the break of day. They played for cash and not for fun, with a separate score for everyone. When it came time to square accounts, they'd all had made quite fair amounts. Not one had lost and all had gained, so tell me how.\n Can you explain?",
        ans: "The men were in a band",
        uni: "dead_end1" 
    },
    {
        level: "LEVEL 8",
        question: "Q8 What word contains all of the twenty-six letters?",
        ans: "Alphabet",
        uni: "dead_end2" 
    }
];

const question = document.querySelector('.question');
const level = document.querySelector('.level')
const uni = document.querySelector('#uni');
const myInput = document.getElementById("myInput");
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let submitCount = 0;
let loadHintCount = 0;
let questionCount = 0;
let score = 0;
let accuracy = 100 - ((submitCount/8)*100);
const array = []

let cminutes = 0;
let csec = 0;
let chours = 0;

var timer;
var ele = document.getElementById('timer');

var sec = 0;
var minutes = 0;
var hours = 0;

(function (){
    clearInterval(timer);
    timer = setInterval(()=>{
        ele.innerHTML = hours + ':' + minutes + ':' + sec;

        sec ++;

        if (sec == 60){
            sec = 0;
            minutes++;

        }

        if ( minutes == 60 ){
            minutes = 0;
            hours++;
        }
    cminutes = minutes;
    csec = sec;
    chours = hours;

    }, 1000)
})()


const loadQuestion = () =>{
    //const uniList = quizDB[questionCount];
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    level.innerText = questionList.level;
    //answers.innerText = questionList.ans;
    //uni.innerText = questionList.uni;

}




loadQuestion();

const loadHint = () => {
    const questionList = quizDB[questionCount];
    uni.innerText = questionList.uni;
    loadHintCount++;
}



myInput.addEventListener("input", () =>{
    array.push(myInput.value);
    });



uni.addEventListener('click', () =>{
    loadHint();
    
    //<h3> You Score ${score}/${quizDB.length} </h3>

})



const getCheckAnswer = () => {
    
    
    return array;
}

myInput.addEventListener("input", () =>{
    array.push(myInput.value);
    });

restart.addEventListener('click', () =>{
    questionCount = 0;
    sec = 0;
    minutes = 0;
    hours = 0;
    score = 0;
    submitCount = 0;
    loadHintCount = 0;
    loadQuestion();
})

// const exithome = () => {

// }
 
// exit.addEventListener('click', () =>{
//     <a href="file:///C:/elitmus/home/home.html"></a>
//     // exithome();
// })


let flag = 0;
submit.addEventListener('click', () => {
    submitCount++;
    const checkedAnswer = getCheckAnswer();
    let flag = 0;
    if (array[array.length - 1] === quizDB[questionCount].ans){
        flag = 1
    }
   
    
    if (flag === 1){
        score++;
        questionCount++;
    }



const deselectAll = () => {
    // myInput.innerText.reset() ;
    uni.innerHTML = "HINT";

}


deselectAll();


if(questionCount < quizDB.length){
    if(questionCount === 5){
        q6.innerHTML = `
        <h3> Ans </h3>
        `;
        q6.classList.remove('q6');

    }

    loadQuestion();

    if (questionCount !== 5){
        q6.innerText = ``
    }


}else{
    clearInterval(timer);
    
    showScore.innerHTML = `
        <h3>!You found all ${score} Clues!</h3>
        <h3>HINTS USED: ${loadHintCount}</h3>
        <h3>ACCURACY: ${accuracy}% </h3>
        <h3>TIME TAKEN ${chours}:${cminutes}:${csec}</h3>


        <h3>solve puzzle to find the</h3>
        <h3>TREASURE CHEST</h3>
        <a href="file:///C:/elitmus/puzzle%20game/puzzlegame.html">SOLVE PUZZLE</a>
    `;
    showScore.classList.remove('scoreArea');
    }
})




// const exit = () => {
//     <a href="file:///C:/elitmus/home/home.html"></a>
// } 

// quit.addEventListener('click', () => {
//     exit();

// })

// const preventDefault = () => {
//     questionCount = questionCount;
//     score = score;
// }

// window.onbeforeunload = (event) => {
//     event.preventDefault();
//     return"";

// }


// const quizDB = [
//     {
//         question: "Q1",
//         ans: "1",
//         uni: "1"
//     },
//     {
//         question: "Q2",
//         ans: "2",
//         uni: "clue1" 
//     },
//     {
//         question: "Q3",
//         ans: "3",
//         uni: "clue2" 
//     },
//     {
//         question: "Q4",
//         ans: "4",
//         uni: "clue3" 
//     },
//     {
//         question: "Q5",
//         ans: "5",
//         uni: "clue4" 
//     },
//     {
//         question: "Q6",
//         ans: "6",
//         uni: "clue5" 
//     },
//     {
//         question: "Q7",
//         ans: "7",
//         uni: "dead_end1" 
//     },{
//         question: "Q8",
//         ans: "8",
//         uni: "dead_end2" 
//     }
// ];

// const question = document.querySelector('.question');
// const uni = document.querySelector('#uni');
// const myInput = document.getElementById("myInput");
// const submit = document.querySelector('#submit');

// const answers = document.querySelectorAll('.answer');

// const showScore = document.querySelector('#showScore');

// let questionCount = 0;
// let score = 0;
// const array = [];
// const loadQuestion = () =>{
//     //const uniList = quizDB[questionCount];
//     const questionList = quizDB[questionCount];
//     question.innerText = questionList.question;
//     answer.innerText = questionList.ans;
//     //uni.innerText = questionList.uni;

// }

// const loadHint = () => {
//     const questionList = quizDB[questionCount];
//     uni.innerText = questionList.uni;
// }

// uni.addEventListener('click', () =>{
//     loadHint();
    
//     //<h3> You Score ${score}/${quizDB.length} </h3>

// })

// loadQuestion();

// const getCheckAnswer = () => {
//     return array;
// }

// myInput.addEventListener("input", () =>{
//     array.push(myInput.value);
// });

// let flag = 0;
// let i = 0
// submit.addEventListener('click', () => {
//     const checkedAnswer = getCheckAnswer();
//     let flag = 0;
//     if (array[array.length - 1] === quizDB[questionCount].ans){
//         flag = 1
//     }
//     i += 2
    
//     if (flag === 1){
//         score++;
//         questionCount++;
//     }
    

    

//     if(questionCount < quizDB.length){
//         loadQuestion();
//     }else{
//         showScore.innerHTML = `
//             <h3> You Score ${score}/${quizDB.length} </h3>
//             <button class = "btn" onclick = "location.reload()"> LAST LEVEL </button>
//         `;
//         showScore.classList.remove('scoreArea');
//     }
// })











// // const quizDB = [
// //     {
// //         question: "Q1",
// //         ans: "a" 
// //     },
// //     {
// //         question: "Q2",
// //         ans: "b" 
// //     },
// //     {
// //         question: "Q3",
// //         ans: "c" 
// //     },
// //     {
// //         question: "Q4",
// //         ans: "d" 
// //     },
// //     {
// //         question: "Q5",
// //         ans: "e" 
// //     },
// //     {
// //         question: "Q6",
// //         ans: "f" 
// //     },
// //     {
// //         question: "Q7",
// //         ans: "g" 
// //     },{
// //         question: "Q8",
// //         ans: "h" 
// //     }
// // ];

// // const question = document.querySelector('.question');
// // const myInput = document.getElementById("myInput");
// // const submit = document.querySelector('#submit');

// // const answers = document.querySelectorAll('.answer');

// // const showScore = document.querySelector('#showScore');

// // let questionCount = 0;
// // let score = 0;
// // const array = [];
// // const loadQuestion = () =>{
// //     const questionList = quizDB[questionCount];
// //     question.innerText = questionList.question;
// //     // answer.innerText = questionList.ans;

// // }
// // loadQuestion();

// // myInput.addEventListener("input", () =>{
// //     array.push(myInput.value);
// //     });
    

// // const getCheckAnswer = () => {
// //     return array;
// // }

// // let flag = 0;

// // submit.addEventListener('click', () => {
// //     myInput.addEventListener("input", () =>{
// //         array.push(myInput.value);
// //     });

// //     if (array.length === quizDB[questionCount].ans.length){
// //         let i = 0;
// //         let j = 0;

// //         while(i < array.length && j < quizDB[questionCount].ans.length){
// //             if (array[i] !== quizDB[questionCount].ans[i]){
// //                 flag = 1;
// //                 break;
// //             }
// //             i += 1;
// //             j += 1;
// //         }
// //     }else{
// //         flag = 1;
// //     }


// //     for(let i = 0; i < quizDB[questionCount].ans.length; i++){
// //         for(let j = 0; j < array.length; j++ ){
// //             if(quizDB[questionCount].ans[i] === array[j]){
// //                 flag = 1;
                
// //             }else{
// //                 flag = 0;
// //                 break;
// //             }
// //         }
        
// //     }
// //     if (flag === 0){
// //         score++;
// //         questionCount++;
// //     }
    

    

// //     if(questionCount < quizDB.length){
// //         loadQuestion();
// //     }else{
// //         showScore.innerHTML = `
// //             <h3> You Score ${score}/${quizDB.length} </h3>
// //             <button class = "btn" onclick = "location.reload()"> LEVEL 9 </button>
// //         `;
// //         showScore.classList.remove('scoreArea');
// //     }
// // })