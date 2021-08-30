var feedbackOptions = {
    "1": "מה אתה עושה?!",
    "2": "זה לא מה שביקשתי!",
    "3": "לא נכון!",
    "4": "טעית! איזה באסה!",
    "5": "לא נורא! נסה שוב!",
    "6": "אופס! תאונה!",
    "7": "זה לא היום שלך...",
    "8": "חחח... ממש לא..."
}


//השאלות של התרגול הראשון
var questions1 = {
   "1": "מספיק! עכשיו עצור!",
   "2": "תותח! עכשיו תוריד את כבל הכננת עד הסוף!",
   "3": "מצוין! שלוף את הזרוע הטלסקופית",
   "4": "אלוף! צודד את המנוף שמאלה",
   "5": "רב-אלוף! עצור והפסק כל פעולה!",
   "6": "סיימת את המסלול!",
   "curr": 1,
   "last": 6
}

//השאלות של התרגול השני שמופיע רק את המשמתמש נכשל בתרגול הראשון
var questions2 = {
    "11": "תוריד את כבל הכננת",
    "12": "מצוין! עכשיו תרים אותו",
    "13": "תותח! צדד ימינה",
    "14": "מצוין! שלוף את הזרוע הטלסקופית",
    "15": "אלוף! תגביה את הזרוע הראשית",
    "16": "רב-אלוף! עכשיו תנמיך אותה",
    "17": "מצטיין נשיא! עצור והפסק כל פעולה!",
    "18": "סיימת את המסלול!",
    "curr": 11,
    "last": 17
 }

 //השאלות של התרגול השלישי שמופיע רק את המשמתמש נכשל בתרגול השני
 var questions3 = {
    "21": "תרים את הזרוע הראשית",
    "22": "מעולה! שלוף את הזרוע הטלסקופית",
    "23": "תותח! עכשיו תוריד את כבל הכננת",
    "24": "מצוין! צדד שמאלה",
    "25": "אלוף! עכשיו תרים את הכבל",
    "26": "כמעט סיימת! כנס את הזרוע הטלסקופית",
    "27": "סיימת את המסלול!",
    "curr": 21,
    "last": 26
 }

var bAbout = false;
var sCurrNum = "part1";
var nCurrNum = 1;
var nCurrpage = 1;
var sCurrSign = "";
var nCurrAnswer = 1;
var nCurrRoad = 0;
var sPickedSign = 0;
var nCurrArray = 1;
var nMistakes = 0;

//פונקצית טעינה
window.onload = () => {
   document.querySelector(".about-x").addEventListener("click", About);
   document.querySelector(".content-about-btn").addEventListener("click", About);
   for(let i = 1; i<3; i++) {
       document.querySelector(".part" + i).addEventListener("click", onClickPart);
   }
   document.querySelector(".next").addEventListener("click", onClickNext);
   document.querySelector(".page1-exer .next").addEventListener("click", onClickNext);
   document.querySelector(".part2-content .part-prev").addEventListener("click", onClickpartPrev);
   for(let i = 1; i<10; i++) {
       document.getElementById("sign"+i).addEventListener("click", onClickSign);
   }
   document.querySelector(".prev").addEventListener("click", onClickPrev);
   document.querySelector(".start").addEventListener("click", onClickStart);
   document.querySelector(".go-to-exer").addEventListener("click", goToExer);
}

//כשהמשתמש לוחץ על כפתור האודות
function About(event) {
   if(!bAbout) {
       bAbout = true;
       document.querySelector(".about").classList.add("transition");
   } else {
       bAbout = false;
       document.querySelector(".about").classList.remove("transition");
   }
}

//כשהמשתמש לוחץ על אחד מחלקי השיעור
function onClickPart(event) {
   document.querySelector("."+ sCurrNum).classList.remove("curr");
   event.currentTarget.classList.add("curr");
   document.querySelector("." + sCurrNum + "-content").classList.add("inactive");
   sCurrNum =  event.currentTarget.classList[0];
   nCurrNum = Number(sCurrNum.charAt(4));
   document.querySelector("." + sCurrNum + "-content").classList.remove("inactive");
   nCurrpage = 1;
   document.querySelector(".page1").classList.remove("inactive");
   document.querySelector(".page2").classList.add("inactive");
}

//כשהמשתמש לוחץ על כפתור ההבא
function onClickNext(event) {
   // אם המשתמש נמצא בדף ההוראות או חלק "שילוט"
   if(sCurrNum === "part1" || sCurrNum === "part4") {
       document.querySelector("."+sCurrNum+"-content .page" + nCurrpage).classList.add("inactive");
       nCurrpage++;
       document.querySelector("."+sCurrNum+"-content .page" + nCurrpage).classList.remove("inactive");
       if(nCurrpage === 3) {
           animateRoad();
       }
   //אם המשתמש נמצא בחלק הראשון של התרגול
   } else if(sCurrNum === "part1-exer" || sCurrNum === "part2-exer"){
       document.querySelector("."+sCurrNum +" .page" + nCurrpage +"-exer").classList.add("inactive");
       nCurrpage++;
       document.querySelector("."+sCurrNum +" .page" + nCurrpage +"-exer").classList.remove("inactive");
   } else {
       document.querySelector("."+ sCurrNum).classList.remove("curr");
       document.querySelector("." + sCurrNum + "-content").classList.add("inactive");
       nCurrNum = Number(sCurrNum.charAt(4));
       nCurrNum++;
       sCurrNum = "part"+nCurrNum;
       document.querySelector(".part"+ nCurrNum).classList.add("curr");
       document.querySelector(".part"+ nCurrNum + "-content").classList.remove("inactive");
       nCurrpage = 1;
       document.querySelector(".page1").classList.remove("inactive");
       document.querySelector(".page2").classList.add("inactive");
       if(nCurrNum === 4) {
           nCurrpage = 1;
       }
   }
}

//כשהמשתמש לוחץ על כפתור הקודם בתוך אותו חלק שיעור
function onClickPrev(event) {
   document.querySelector("." + sCurrNum + "-content .page" + nCurrpage).classList.add("inactive");
   nCurrpage--;
   document.querySelector("." + sCurrNum + "-content .page" + nCurrpage).classList.remove("inactive");
}

//כשהמשתמש לוחץ "בואו נתחיל"
function onClickStart(event) {
   sCurrNum = "part2";
   nCurrNum = 2;
   document.querySelector(".part1-content").classList.add("inactive");
   document.querySelector(".part2-content").classList.remove("inactive");
   document.querySelector(".part1").classList.remove("curr");
   document.querySelector(".part2").classList.add("curr");
}

//כשהמשתמש לוחץ על כפתור הקודם שמפריד בין חלקי שיעור
function onClickpartPrev(event) {
   document.querySelector(".part"+ nCurrNum).classList.remove("curr");
   document.querySelector(".part"+ nCurrNum + "-content").classList.add("inactive");
   nCurrNum --;
   sCurrNum = "part"+ nCurrNum;
   document.querySelector(".part"+ nCurrNum).classList.add("curr");
   document.querySelector(".part"+ nCurrNum + "-content").classList.remove("inactive");
}

//כשהמשתמש לוחץ על כפתור ההבא שמוביל לתרגול בדף הלמידה האחרון
function goToExer(event) {
   document.querySelector(".content-container").style.display = "none";
   document.querySelector(".exer-container").style.display = "flex";
   document.querySelector(".navbar").innerHTML = '<div class="curr">תרגול</div>';
   sCurrNum = "part1-exer";
   nCurrNum = 1;
   nCurrpage = 1;
   for(let i = 1; i<11; i++) {
       document.querySelector(".answer"+i).addEventListener("click", onClickAnswer);
   }
}

//הופך את הציור של הסימן לגיף שמראה את התנועה בדף הראשון של התרגול
function onClickSign(event) {
   //מחזיר את התמונה הקודמת להיות תמונה ולא גיף אם זאת לא הפעם הראשונה שלחצו על תמונה
   if(sCurrSign != "") {
       document.querySelector("."+sCurrSign).setAttribute("src", "assets/images/text-"+sCurrSign+".svg");
   }
   sCurrSign = event.currentTarget.classList[0];
   document.querySelector("."+sCurrSign).setAttribute("src", "assets/GIFS/"+sCurrSign+".gif");
}

//בודק שהתשובה שהמשתמש לחץ עליה נכונה בחלק הראשון של התרגול
function onClickAnswer(event) {
    let sAnswerClicked = event.currentTarget.classList[nCurrArray-1];
    //אם המשתמש צדק
    if(Number(sAnswerClicked.substring(6,sAnswerClicked.length)) === nCurrAnswer) {
        document.querySelector(".feedback").innerHTML = "";
        document.querySelector(".speech"+nCurrAnswer).style.backgroundImage = "url(assets/images/green-bubble.svg)";
        let bubble = document.createElement("div");
        bubble.classList.add("speech");
        document.querySelector(".speech"+nCurrAnswer).after(bubble);
        if(nCurrArray ===1) {
            bubble.innerHTML = eval("questions"+nCurrArray)[nCurrAnswer];
        } else {
            bubble.innerHTML = eval("questions"+nCurrArray)[nCurrAnswer+1];
        }
        //אם המשתמש סיים את כל התרגול
        if(nCurrAnswer === eval("questions"+nCurrArray)["last"]) {
        for(let i=1; i<11; i++) {
            document.querySelector(".answer"+i).removeEventListener("click", onClickAnswer);
        }
        //מוסיף תרגול חוזר אם המשתמש טעה בחצי מהשאלות או יותר
        if(nMistakes > (Object.keys(eval("questions"+nCurrNum)).length/2) || nMistakes === (Object.keys(eval("questions"+nCurrNum)).length/2)) {
            nCurrArray++;
            document.querySelector(".filler-btn").style.fontSize = "100%";
            if(nCurrArray === 4) {
                document.querySelector(".filler .big-square h1").innerHTML = "לא הצלחתם... חזרו על החומר ונסו שוב.";
                document.querySelector(".filler-btn").addEventListener("click", function(){
                    window.location.href = "http://127.0.0.1:5500/index.html";
                });
            } else {
                nCurrAnswer = eval("questions"+nCurrArray)["curr"];
                document.querySelector(".filler .big-square h1").innerHTML = "לא הצלחתם... נסו שוב!";
            }
            document.querySelector(".filler-btn").addEventListener("click", onClickFiller);
        } else {
            document.querySelector(".filler .big-square h1").innerHTML = "כל הכבוד! סיימתם את הלומדה!";
            document.querySelector(".filler-btn").addEventListener("click", function(){
                window.location.href = "https://madortill.github.io/web_AgreedSigns_bhd20/";
            });
        }
        setTimeout(function() {
            document.querySelector(".filler").classList.add("transition");  
        }, 1000);
    } else {
        nCurrAnswer++;
        bubble.classList.add("speech"+nCurrAnswer);
    }
   } else {
       nMistakes++;
       let nRandomFeedback = Math.floor(Math.random()*8) +1;
       document.querySelector(".feedback").append(feedbackOptions[nRandomFeedback]);
       let br =  document.createElement("br");
       document.querySelector(".feedback").appendChild(br);
   }
   let div = document.querySelector(".part1-exer .page2-exer .small-square:first-of-type");
   div.scrollTop = div.scrollHeight;
}

function onClickFiller(event) {
    document.querySelector(".filler-btn").removeEventListener("click", onClickFiller);
    document.querySelector(".filler").classList.remove("transition");
    document.querySelector(".page2-exer .small-square").innerHTML = "";
    let div =  document.createElement("div");
    div.classList.add("speech");
    div.classList.add("speech"+ String(nCurrAnswer));
    document.querySelector(".page2-exer .small-square").appendChild(div);
    let feedback =  document.createElement("div");
    feedback.classList.add("feedback");
    document.querySelector(".page2-exer .small-square").appendChild(feedback);
    div.innerHTML = (eval("questions"+nCurrArray)[String(nCurrAnswer)]);
    for(let i=1; i<11; i++) {
        document.querySelector(".answer"+i).addEventListener("click", onClickAnswer);
    }
    nMistakes = 0;
}
