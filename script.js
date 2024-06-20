// JavaScript goes here. 
let crashOut = 0
let weirdKid = 0
let superBum = 0
let wanCool = 0 
let answer1Btn = document.querySelector(".Answer1") 
let answer2Btn = document.querySelector(".Answer2")
let answer3Btn = document.querySelector(".Answer3") 
let answer4Btn = document.querySelector(".Answer4")  
let answer5Btn = document.querySelector(".Answer5")  
let answer6Btn = document.querySelector(".Answer6")  
let answer7Btn = document.querySelector(".Answer7")  
let answer8Btn = document.querySelector(".Answer8")   
let answer9Btn = document.querySelector(".Answer9")   
let answer10Btn = document.querySelector(".Answer10")   
let answer11Btn = document.querySelector(".Answer11")  
let answer12Btn = document.querySelector(".Answer12")   
let answer13Btn = document.querySelector(".Answer13")  
let answer14Btn = document.querySelector(".Answer14") 
let answer15Btn = document.querySelector(".Answer15") 
let answer16Btn = document.querySelector(".Answer16")   
let answer17Btn = document.querySelector(".Answer17") 
let answer18Btn = document.querySelector(".Answer18") 
let answer19Btn = document.querySelector(".Answer19") 
let answer20Btn = document.querySelector(".Answer20") 
let submitAnswer = document.querySelector(".submit")
let result = document.querySelector(".result")








///Question 1
answer1Btn.addEventListener("click", function(){
wanCool++
}); 

answer2Btn.addEventListener("click", function(){
weirdKid++
}); 

answer3Btn.addEventListener("click", function() {
    superBum++
});

answer4Btn.addEventListener("click" , function() {
    crashOut++
}); 

///Question 2 

answer5Btn.addEventListener("click" , function(){
    wanCool++

}); 

answer6Btn.addEventListener("click" , function() {
    weirdKid++
});

answer7Btn.addEventListener("click" , function() {

superBum++
}); 

answer8Btn.addEventListener("click", function() {
    crashOut++
}); 

///Question 3

answer9Btn.addEventListener("Click" , function() {
    wanCool++
});

answer10Btn.addEventListener("Click" , function() {
    weirdKid++
}); 

answer11Btn.addEventListener("Click" , function() {
    superBum++
});  

answer12Btn.addEventListener("Click" , function() {
    crashOut++
});

///question 4

answer13Btn.addEventListener("Click" , function() {
    wanCool++
}); 

answer14Btn.addEventListener("Click" , function() {
    weirdKid++
}); 

answer15Btn.addEventListener("Click" , function() {
    superBum++
}); 

answer16Btn.addEventListener("Click" , function() {
    crashOut++
}); 

///question 5 

answer17Btn.addEventListener("Click" , function() {
    wanCool++
});  

answer18Btn.addEventListener("Click" , function() {
    weirdKid++
}); 

answer19Btn.addEventListener("Click" , function() {
    superBum++
}); 

answer20Btn.addEventListener("Click" , function() {
    crashOut++
}); 

submitAnswer.addEventListener("click" , function()

if(wanCool > crashOut && wanCool> superBum && wanCool > weirdKid) {
    result.innerhtml = "You're the wannabe cool kid. You try to come off as cool and different but just end up being embrassing. Maybe trying just being yourself?"
} 

if(weirdKid > crashOut && weirdKid> superBum && weirdKid > wanCool) {
    result.innerhtml = "You're the weird kid. You're strange and awkward but really aren't that bad. You have the courage to express yourself in way many others don't"
}  

if(superBum > crashOut && superBum > wanCool && superBum > weirdKid) {
    result.innerhtml = "Get a job, because it is obvious that you're not doing anything in school, and you're gpa's probably in the negatives."
}   

if(crashOut> wanCool  && crashOut > weirdKid && crashOut> superBum) {
    result.innerhtml = "You're crazy. How you aren't in a jail cell is beyond me." 
}

)};
