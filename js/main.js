let max = 1
let min = 1
let Soal = [];

// ===========================================================================
// =============================== admin login ===============================
// ===========================================================================
function adminfun(){

    (async () => {

        const { value: password } = await Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputLabel: 'Password',
          inputPlaceholder: 'Enter your password',
          value: 'admin',
          inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        })
        
        if (password) {
            if (password==1234){
                document.getElementById("creatq").style.display= "block";
                document.getElementById("main-page").style.display= "none";

            }
        }
        
        })()

}








// ==============================================================================
// =============================== write question ===============================
// ==============================================================================
function subfun() {

    let qnmuber = document.getElementById("q-num").value;
    let x1 = document.getElementById("question").value;
    let x2 = document.getElementById("q1").value;
    let x3 = document.getElementById("q2").value;
    let x4= document.getElementById("q3").value;
    let x5 = document.getElementById("q4").value;
    let x6 = document.querySelector(`input[name="answer"]:checked`).value; //q2

    Soal[qnmuber] = {
        Title: x1,
        Answer1: x2,
        Answer2: x3,
        Answer3: x4,
        Answer4: x5,
        CorrAns: x6,
        CorrTitle: document.getElementById(x6).value
    }

    document.getElementById("q-num").value++;
    document.getElementById("question").value = "";
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";
    document.querySelector(`input[name="answer"]:checked`).checked = false;




    console.log(Soal);


}




// ==========================================================================================
// =============================== writing question is finish ===============================
// ==========================================================================================
function donfun() {
    document.getElementById("creatq").style.display = "none";

    max = Soal.length-1;
    

    Soal.forEach(function (item, index) {
        document.getElementById("QuestionsWillBeHere").innerHTML += `
        <input type="hidden" id="curent" value="${index}">

        <div id="q${index}">

            <h4 id="title-quiz${index}" >
                ${index}. ${item.Title}
            </h4>

            <form>
                <input type="radio" id="q1-${index}" name="quiz${index}" value="q1">
                <label id="label-q1-quiz${index}" for="q1-${index}">${item.Answer1}</label>
                <br>
                <input type="radio" id="q2-${index}" name="quiz${index}" value="q2">
                <label id="label-q2-quiz${index}" for="q2-${index}">${item.Answer2}</label>
                <br>
                <input type="radio" id="q3-${index}" name="quiz${index}" value="q3">
                <label id="label-q3-quiz${index}" for="q3-${index}">${item.Answer3}</label>
                <br>
                <input type="radio" id="q4-${index}" name="quiz${index}" value="q4">
                <label id="label-q4-quiz${index}" for="q4-${index}">${item.Answer4}</label>
            </form>

        </div>
        `

    })


    document.getElementById("main-page").style.display= "block";

    
}



// ==========================================================================================
// =============================== chose cures ===============================
// ==========================================================================================
const cureses = [
    'cureses1'
];



let cname = document.getElementById('cname')
cureses.forEach((item) => {
    var option = document.createElement("option");
    option.text = `${item}`;
    option.value = `${item}`;
    cname.add(option);
});















function done(){
   let correct =  document.querySelectorAll('.correct')

   console.log(correct);


   let result = 0;
   let sum = 0;
   correct.forEach((item) => {
       let user = document.querySelector(`input[name="${item.name}"]:checked`);
       let userAns = (user !== null && user.value !== undefined) ? user.value : 'Nothing';
       let answer = item.value;
       let style = 'color:red';
       sum++;
       if(userAns === answer){
           result++;
           style = 'color:green';

       }
       
       let htitle = document.getElementById(`title-${item.name}`).innerHTML
       document.getElementById('user-answers').innerHTML += `<h4>${htitle}</h4><p style="${style}">Your Answer: ${userAns}</p><p>Correct Answer: ${answer}</p>`;

    });

    let fname =  document.getElementById('fname').value
    let lname =  document.getElementById('lname').value
    let cname =  document.getElementById('cname').value






    result = (result*100)/sum;

    Swal.fire({
        title: `Result ${cname}`,
        text: `${fname} ${lname} : %${result}`,
        icon: result >= 70 ? 'success' : (result > 50 ? 'warning' : 'error')

    })

    Swal.fire({
        title: `Result ${cname}`,
        text: `${fname} ${lname} : %${result}`,
        icon: result >= 70 ? 'success' : (result > 50 ? 'warning' : 'error'),
        confirmButtonText: 'Show Result',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        document.getElementById('user-answers').style.display = 'block';
      })
}






function startfunction() {

    document.getElementById('alerttext').innerHTML = '';

    let cname = document.getElementById('cname').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let validation = true;

    if (cureses.indexOf(cname) === -1) {
        document.getElementById('alerttext').innerHTML += "<p>Please Select Cures</p>";
        document.getElementById('alerttext').style.color = "red"
        validation = false;

    }

    if (!fname) {
        document.getElementById('alerttext').innerHTML += "<p>Please enter first name</p>";
        document.getElementById('alerttext').style.color = "red"
        validation = false;

    }

    if (!lname) {
        document.getElementById('alerttext').innerHTML += "<p>Please Enter last name</p>";
        document.getElementById('alerttext').style.color = "red"
        validation = false;

    }

    if (validation) {
        document.getElementById('start').style.display = 'none';
        document.getElementById('join').style.display = 'block';
    }





 
}

function joinfunction() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    document.getElementById('q1').style.display = 'block';
    document.getElementById('home').style.display = 'inline-flex';

}



function nextfun() {

    document.getElementById('home').style.display = 'none';
    let curent = document.getElementById('curent')
    if (curent.value < max) {

        // console.log(curent)
        document.getElementById('prev').style.display = 'inline-flex';
        document.getElementById(`q${curent.value}`).style.display = 'none';
        document.getElementById(`q${++curent.value}`).style.display = 'block';
        document.getElementById('percent').style.width = `${Math.round(curent.value*100/max)}%`
        document.getElementById('percent').innerHTML = `<p>${Math.round(curent.value*100/max)}%</p>`
       
        if (curent.value == max) {
            document.getElementById('next').style.display = 'none';
            document.getElementById('done').style.display = 'inline-flex';
        }            
        
    }


}

function prevfun() {
    document.getElementById('done').style.display = 'none';
    
    let curent = document.getElementById('curent')
    if (curent.value > min) {
        document.getElementById('next').style.display = 'inline-flex';
        document.getElementById(`q${curent.value}`).style.display = 'none';
        document.getElementById(`q${--curent.value}`).style.display = 'block';
        document.getElementById('percent').style.width = `${Math.round(curent.value*100/max)}%`
        document.getElementById('percent').innerHTML = `<p>${Math.round(curent.value*100/max)}%</p>`

        if (curent.value == min) {
            document.getElementById('prev').style.display = 'none';
            document.getElementById('home').style.display = 'inline-flex';
        }

    }

}

