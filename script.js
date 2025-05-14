let count = 0;
let answer = 0;
let current = 1;
function checkother(id){
    for(let i= 1;i<=4;i++){
        index = i.toString()
        if(id[2] != index){
            let option = document.getElementById("q" + id[1] + index);
            option.checked = false
        }
    }
}

function answer_checker(correct,qno){
    for(let i= 1;i<=4;i++){
    index = i.toString()
    let q_no = qno.toString()
    option = document.getElementById("q" + q_no + index);
    if(option){
        if(option.checked){
            answer = index;
            break;
        }
    }
    }
    if(correct == parseInt(answer)){
        count++;
    }
}

function restart(){
    let answer_page = document.getElementById("final_score")
    answer_page.innerHTML = ""
    let refreshing = document.querySelectorAll(".question")
    let len = refreshing.length;
    for(let i =1;i<=len;i++){
        let ques = i.toString()
        for(let j = 1;j<=4;j++){
            index = j.toString()
            option = document.getElementById("q" + ques + index);
            if(option){
                    option.checked = false
                }
            }
        }
    let question = document.getElementById("question6")
    let next_question = document.getElementById("question1")
    question.style.display = "none"
    next_question.style.display = "block"
    count = 0
}

function button_on(correct,qno){
    answer_checker(correct,qno)
    nqno = qno + 1
    let q_no = qno.toString()
    let nq_no = nqno.toString()
    let question = document.getElementById("question" + q_no)
    let next_question = document.getElementById("question" + nq_no)
    question.style.display = "none"
    next_question.style.display = "block" 
}


function finished(correct,qno){
    answer_checker(correct,qno)
    nqno = qno + 1
    let q_no = qno.toString()
    let question = document.getElementById("question" + q_no)
    question.style.display = "none"
    let score = document.createElement("div")
    score.innerHTML = "Your score is : "
    score.innerHTML += count; 
    score.innerHTML += " out of 6."; 
    let answer_page = document.getElementById("final_score")
    answer_page.appendChild(score)
    let retry = document.createElement("button")
    retry.innerHTML = "Retry";
    retry.id = "retry_button"
    retry.setAttribute("onclick","restart()")
    answer_page.appendChild(retry)
}
