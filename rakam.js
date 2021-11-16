var popUps = [
    {
           "width" : "30%",
           "title" : "אור כחול אחד בודד",
           "text" : "<b>האור הכחול מסמל כיוון תנועה</b>. על הנהג לנסוע משמאל לאור הכחול ולהתקדם לכיוון האור הכחול הבא במסלול."
   },
   {
       "width" : "85%",
       "title" : "שלושה אורות אדומים או יותר",
       "text" : "<b>מסמלים סוף מסלול או תהום.</b> <br> הנהג לא יתקדם לכיוון הזה."
   },
   {
       "width" : "60%",
       "title" : "שני אורות ירוקים מימין ומשמאל למסלול",
       "text" : "<b>מסמלים לנהג שהוא נמצא בצומת</b>. עליו לנוע בין האורות ולבצע פניה לפי האור הכחול הבא."
   },
   {
       "width" : "85%",
       "title" : "אורות ירוקים ואדומים מימין ומשמאל למסלול",
       "text" : "</b>מסמלים לנהג שהוא נמצא במעבר מסוכן אך הכרחי<b>. עליו לנסוע באיטיות בין האורות."
   }
]

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

//השאלות של תרגול היום הראשון
var questions1 = {
   "1": "מעולה, עכשיו תתקדם אליי",
   "2": "אחלה! עכשיו פנה ימינה",
   "3": "כל הכבוד! עכשיו פנה שמאלה",
   "4": "אלוף! עכשיו עצור",
   "5": "רב-אלוף! סע אחורה",
   "6": "מצטיין נשיא! עצור שוב",
   "7": "אל תשכח לתפוס בלם!",
   "8": "כמעט סיימת! עכשיו דומם מנוע",
   "9": "סיימת את המסלול!",
   "curr": 1,
   "last": 9
}

//השאלות של תרגול היום השני שמופיע רק אם המשתמש לא עבר את התרגול הראשון
var questions2 = {
   "14": "מעולה, עכשיו תתקדם אליי",
   "15": "אחלה! עכשיו תאיץ!",
   "16": "כל הכבוד! עכשיו האט",
   "17": "אלוף! עכשיו עצור",
   "18": "רב-אלוף! תסתובב בהילוך פיבוט",
   "19": "מצטיין נשיא! פנה ימינה",
   "20": "אל תשכח לתפוס בלם!",
   "21": "כמעט סיימת! עכשיו דומם מנוע",
   "22": "סיימת את המסלול!",
   "curr": 14,
   "last": 22
}

//השאלות של תרגול היום השלישי שמופיע רק אם המשתמש לא עבר את התרגול השני
var questions3 = {
   "26": "מעולה, עכשיו סע אחורה",
   "27": "אחלה! תעיבר לניוטראל",
   "28": "כל הכבוד! עכשיו פנה שמאלה",
   "29": "אלוף! עכשיו תסתובב בהילוך פיבוט",
   "30": "רב-אלוף! תתקדם אלי",
   "31": "מצטיין נשיא! עצור!",
   "32": "אל תשכח לתפוס בלם!",
   "33": "כמעט סיימת! עכשיו דומם מנוע",
   "34": "סיימת את המסלול!",
   "curr": 26,
   "last": 34
}

//השאלות של תרגול הלילה הראשון
var questions5 = {
   "1": "מעולה, עכשיו תתקדם אליי",
   "2": "אחלה! עכשיו פנה שמאלה",
   "3": "כל הכבוד! עכשיו סע אחורה",
   "4": "אלוף! עכשיו עצור",
   "5": "רב-אלוף! פנה ימינה",
   "6": "מצטיין נשיא! עצור שוב",
   "7": "כמעט סיימת! עכשיו דומם מנוע",
   "8": "סיימת את המסלול!",
   "curr": 1,
   "last": 8
}

//השאלות של תרגול הלילה השני שמופיע רק אם המשתמש לא עבר את התרגול הראשון
var questions6 = {
   "9": "מעולה, עכשיו תתקדם אליי",
   "10": "אחלה! עכשיו סע אחורה",
   "11": "כל הכבוד! עכשיו פנה ימינה",
   "12": "אלוף! עכשיו עצור",
   "13": "כמעט סיימת! עכשיו דומם מנוע",
   "14": "סיימת את המסלול!",
   "curr": 9,
   "last": 14
}

//השאלות של תרגול הלילה השלישי שמופיע רק אם המשתמש לא עבר את התרגול השני
var questions7 = {
   "16": "מעולה, עכשיו תתקדם אליי",
   "17": "אחלה! עכשיו פנה שמאלה",
   "18": "כל הכבוד! עכשיו סע אחורה",
   "19": "אלוף! פנה ימינה",
   "20": "מצטיין נשיא! עצור",
   "21": "כמעט סיימת! עכשיו דומם מנוע",
   "22": "סיימת את המסלול!",
   "curr": 16,
   "last": 22
}

var bAbout = false;
var sCurrNum = "part1";
var nCurrNum = 1;
var nCurrpage = 1;  
var sCurrSign = "";
var nCurrAnswer = 1;
var nCurrRoad = 0;
const lightArray = ["blue", "red", "green", "red"];
var pickedlightArray = ["","","",""];
var sPickedSign = "";
var sCurrLight = 0;
var bWasWrong = false;
var nMistakes = 0;
var nCurrArray = 1;


//פונקצית טעינה
window.onload = () => {
   document.querySelector(".about-x").addEventListener("click", About);
   document.querySelector(".content-about-btn").addEventListener("click", About);
   for(let i = 1; i<5; i++) {
       document.querySelector(".part" + i).addEventListener("click", onClickPart);
   }
   document.querySelector(".next").addEventListener("click", onClickNext);
   for(let i=2; i<5; i++) {
       document.querySelector(".part"+i+"-content .next").addEventListener("click", onClickNext);
       if(i === 4) {
           for(let j = 1; j<3; j++) {
               document.querySelector(".part4-content .page"+j + " .next").addEventListener("click", onClickNext);
           }
           for(let j = 2; j<4; j++) {
               document.querySelector(".part4-content .page"+j + " .prev").addEventListener("click", onClickPrev);
           }
       }
   }
   for(let i=2; i<5; i++) {
       document.querySelector(".part"+i+"-content .part-prev").addEventListener("click", onClickpartPrev);
   }
   for(let i = 1; i<12; i++) {
       document.getElementById("sign"+i).addEventListener("click", onClickSign);
   }
   document.querySelector(".prev").addEventListener("click", onClickPrev);
   document.querySelector(".start").addEventListener("click", onClickStart);
   document.querySelector(".go-to-exer").addEventListener("click", goToExer);
   for(let i=1; i<4; i++){
       document.querySelector(".part"+i+"-exer .page1-exer .next").addEventListener("click", onClickNext);
   }
   for(let i=1; i<5; i++){
       document.querySelector(".road .answer"+i).addEventListener("click", onClickQuestion);
   }
   document.querySelector(".check").addEventListener("click", onClickCheck);
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

//כשהמשתמש לוחץ על אחד מחלקי השיעור(הכותרות שלמעלה)
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
   //אם המשתמש נמצא בתרגול
   } else if(sCurrNum === "part1-exer" || sCurrNum === "part2-exer" || sCurrNum === "part3-exer"){
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

//כשהמשתמש לוחץ על כפתור הקודם
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

//כשהמשתמש לוחץ על כפתור הקודם שמפריד בין חלקי שיעור ולא דפים של אותו חלק
function onClickpartPrev(event) {
   document.querySelector(".part"+ nCurrNum).classList.remove("curr");
   document.querySelector(".part"+ nCurrNum + "-content").classList.add("inactive");
   nCurrNum --;
   sCurrNum = "part"+ nCurrNum;
   document.querySelector(".part"+ nCurrNum).classList.add("curr");
   document.querySelector(".part"+ nCurrNum + "-content").classList.remove("inactive");
}

//הפונקציה שמפעילה את הגיפים של המסלול
function animateRoad() {
   let nLight = nCurrRoad +1;
   document.querySelector(".pop-title").innerHTML = popUps[nCurrRoad].title;
   document.querySelector(".pop-text").innerHTML = popUps[nCurrRoad].text;
   document.querySelector(".pop-img").style.width = popUps[nCurrRoad].width;
   document.querySelector(".pop-img").setAttribute("src", "assets/images/light"+ nLight + ".svg");
   setTimeout(function() {
       document.querySelector(".pop-up").classList.remove("inactive");
       document.querySelector("#road").classList.add("inactive");
   }, 1700);

   document.querySelector(".got-it").addEventListener("click", onPressGotIt);
}

//כשהמשתמש לוחץ על "הבנתי" בפופאפים של שילוט
function onPressGotIt(event) {
   if(nCurrRoad < 3) {
       nCurrRoad++;
       let nGif = nCurrRoad +1;
       document.querySelector(".pop-up").classList.add("inactive");
       document.querySelector("#road").classList.remove("inactive");
       document.querySelector(".road").setAttribute("src", "assets/GIFS/road"+nGif+".gif");
       document.querySelector(".got-it").removeEventListener("click", onPressGotIt);
       animateRoad();
   } else {
       document.querySelector(".pop-up").classList.add("inactive");
       document.querySelector("#road").classList.remove("inactive");
       document.querySelector(".go-to-exer").classList.remove("inactive");
       document.querySelector("#road").innerHTML = "סיימתם את שלב הלמידה! אתם יכולים לעבור לשלב התרגול. <br> שימו לב! לא תוכלו לחזור ללמידה לאחר שתעברו לתרגול.";
   }
}

//כשהמשתמש לוחץ על כפתור ההבא שמוביל לתרגול בדף הלמידה האחרון
function goToExer(event) {
   document.querySelector(".content-container").style.display = "none";
   document.querySelector(".exer-container").style.display = "flex";
   document.querySelector(".navbar").innerHTML = '<div class="curr">תרגול</div>';
   sCurrNum = "part1-exer";
   nCurrNum = 1;
   nCurrpage = 1;
   for(let i = 1; i<14; i++) {
       document.querySelector(".answer"+i).addEventListener("click", onClickAnswer);
   }
}

//הופך את הציור של הסימן לגיף שמראה את התנועה בדף הראשון של התרגול
function onClickSign(event) {
   //אם זאת לא הפעם הראשונה שלחצו על תמונה
   if(sCurrSign != "") {
       document.querySelector("."+sCurrSign).setAttribute("src", "assets/images/text-"+sCurrSign+".svg");
   }
   sCurrSign = event.currentTarget.classList[0];
   document.querySelector("."+sCurrSign).setAttribute("src", "assets/GIFS/"+sCurrSign+".gif");
}


//בודק שהתשובה שהמשתמש לחץ עליה נכונה בחלק הראשון של התרגול
function onClickAnswer(event) {
   if(nCurrArray === 1 || nCurrArray === 2 || nCurrArray === 3) {
       var sAnswerClicked = event.currentTarget.classList[nCurrArray-1];
   } else {
       var sAnswerClicked = event.currentTarget.classList[nCurrArray-5];
   }
   if(nCurrArray === 1 && sAnswerClicked === "answer5" && nCurrAnswer ===7 || nCurrArray === 2 && sAnswerClicked === "answer18" && nCurrAnswer ===7|| nCurrArray === 5 && sAnswerClicked === "answer5" && nCurrAnswer ===7) {
       sAnswerClicked = event.currentTarget.classList[3];
   }
   //אם המשתמש צדק
   if(Number(sAnswerClicked.substring(6,sAnswerClicked.length)) === nCurrAnswer) {
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square .feedback").innerHTML = "";
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square .speech"+nCurrAnswer).style.backgroundImage = "url(assets/images/green-bubble.svg)";
       let bubble = document.createElement("div");
       bubble.classList.add("speech");
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square .speech"+nCurrAnswer).after(bubble);
       bubble.innerHTML = eval("questions"+nCurrArray)[nCurrAnswer];
       //אם המשתמש סיים את כל התרגול
       if(nCurrAnswer === eval("questions"+nCurrArray)["last"]) {
           for(let i=1; i<14; i++) {
               document.querySelector(".answer"+i).removeEventListener("click", onClickAnswer);
           }
           for(let i=1; i<9; i++) {
               document.querySelector(".part2-exer .page2-exer .small-square div .answer"+i).removeEventListener("click", onClickAnswer);
           }
           //מוסיף תרגול חוזר אם המשתמש טעה בחצי מהשאלות או יותר
           if(nMistakes > (Object.keys(eval("questions"+nCurrArray)).length/2) || nMistakes === (Object.keys(eval("questions"+nCurrArray)).length/2)) {
               nCurrArray++;
               //מחזיר לתחילת הלומדה אם המשתמש לא עבר 3 תרגולים באותו נושא
               if(nCurrArray === 4 || nCurrArray === 8) {
                   document.querySelector(".filler .big-square h1").innerHTML = "לא הצלחתם... חזרו על החומר ונסו שוב.";
                   document.querySelector(".filler-btn").style.fontSize = "100%";
                   document.querySelector(".filler-btn").innerHTML = "מההתחלה";
                   document.querySelector(".filler-btn").addEventListener("click", function(){
                       window.location.href = "http://127.0.0.1:5500/index.html";
                   });
               } else {
                   nCurrAnswer = eval("questions"+nCurrArray)["curr"];
                   document.querySelector(".filler .big-square h1").innerHTML = "לא הצלחתם... נסו שוב!";
               }
           } else {
               nCurrAnswer = 1;
               document.querySelector(".filler .big-square h1").innerHTML = "כל הכבוד! סיימתם את המסלול!";
           }
           document.querySelector(".filler-btn").addEventListener("click", onClickFiller);
           setTimeout(function() {
               document.querySelector(".filler").classList.add("transition");
               document.querySelector(".filler-btn").addEventListener("click", onClickFiller);
           }, 1000);
       } else {
           nCurrAnswer++;
           bubble.classList.add("speech"+nCurrAnswer);
       }
   } else {
       nMistakes ++;
       let nRandomFeedback = Math.floor(Math.random()*8) +1;
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square .feedback").append(feedbackOptions[nRandomFeedback]);
       let br =  document.createElement("br");
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square .feedback").appendChild(br);
   }
   let div = document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square");
   div.scrollTop = div.scrollHeight;
}


//מקבלת את סימן השאלה שהמשתמש לחץ עליו
function onClickQuestion(event) {
   //מוסיף אירועי לחיצה לשלטים שלמטה אם זאת הפעם הראשונה שלחצו על סימן שאלה
   if(sPickedSign === "") {
       for(let i = 1; i<5; i++) {
           document.querySelector(".part3-exer .small-square:last-of-type .sign"+i).addEventListener("click", onClickLight);
       }
   } else {
       document.querySelector(".road ."+sPickedSign).style.borderColor = "rgba(0, 0, 0, 0)";
   }
   sPickedSign = event.currentTarget.classList[0];
   document.querySelector(".road ."+sPickedSign).style.borderColor =  "white";
}

//מקבלת את השלט שהמשתמש התאים לסימן השאלה
function onClickLight(event) {
   //אם המשתמש כבר בחר שלט בשביל סימן השאלה הנוכחי, מוריד את הקלאס שלו כדי שיהיה לו את הקלאס הנכון
   if(document.querySelector(".road ."+sPickedSign).classList.length === 3) {
       document.querySelector(".road ."+sPickedSign).classList.remove(sCurrLight);
   }
   sCurrLight = event.currentTarget.classList[0];
   document.querySelector(".road ."+sPickedSign).classList.add(sCurrLight);
   document.querySelector(".road ."+sPickedSign).style.borderColor =  "rgba(0, 0, 0, 0)";
   document.querySelector(".road ."+sPickedSign).setAttribute("src", "assets/images/"+sCurrLight+"-light.svg");
   let nArraySpot = Number(sPickedSign.charAt(6)-1);
   pickedlightArray[nArraySpot] = sCurrLight;
}

//כשהמשתמש לוחץ  על כפתור הבדיקה
function onClickCheck(event) {
   //לולאה שעוברת על כל איבר במערך שהמשתמש יצר ומשווה אותו למערך הקבוע של התשובות הנכונות
   for(let i=0; i<4; i++) {
       //אם אחת מהתשובות לא נכונה
       if(pickedlightArray[i] !== lightArray[i]) {
           bWasWrong = true;
           document.querySelector(".road .answer"+(i+1)).style.borderColor =  "rgb(193, 45, 45)";
       } else {
           document.querySelector(".road .answer"+(i+1)).style.borderColor =  "rgb(57, 191, 46)";
       }
   }
   //אם המשתמש טעה באחת מהתשובות
   if(bWasWrong) {
       document.querySelector(".filler").classList.add("transition");
       document.querySelector(".filler .big-square h1").innerHTML = "יש לכם טעות... נסו שוב!";
       document.querySelector(".filler-btn").addEventListener("click", tryAgain);
   } else {
       document.querySelector(".filler").classList.add("transition");
       document.querySelector(".filler .big-square h1").innerHTML = "כל הכבוד! סיימתם את הלומדה!";
       document.querySelector(".filler-btn").innerHTML = "מההתחלה";
       document.querySelector(".filler-btn").addEventListener("click", function(){
           window.location.href = "https://madortill.github.io/web_AgreedSigns_bhd20/";
      });
   }
   bWasWrong = false;
}

function tryAgain(event) {
   document.querySelector(".filler").classList.remove("transition");
   document.querySelector(".filler-btn").removeEventListener("click", tryAgain)
}

//כשהמשתמש לוחץ על כפתור המשך בין התרגולים
function onClickFiller(event) {
   //מחליף לתרגול נוסף באותו נושא אם המשתמש טעה בחצי מהשאלות או יותר ומעביר לתרגול בנושא הבא אם לא
   if(nMistakes > (Object.keys(eval("questions"+nCurrNum)).length/2)) {
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square").innerHTML = "";
       let div =  document.createElement("div");
       div.classList.add("speech");
       div.classList.add("speech"+ String(nCurrAnswer));
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square").appendChild(div);
       let feedback =  document.createElement("div");
       feedback.classList.add("feedback");
       document.querySelector(".part"+nCurrNum+"-exer .page2-exer .small-square").appendChild(feedback);
       div.innerHTML = "יאללה תתניע את המנוע";
       for(let i=1; i<14; i++) {
           document.querySelector(".answer"+i).addEventListener("click", onClickAnswer);
       }
       for(let i=1; i<9; i++) {
           document.querySelector(".part2-exer .page2-exer .small-square div .answer"+i).addEventListener("click", onClickAnswer);
       }
   } else {
       //מגדיר את מערך השאלות הנוכחי למערך השאלות של תרגול הלילה
       if(nCurrArray < 4) {
           nCurrArray = 5;
       }
       document.querySelector(".part"+nCurrNum+"-exer").classList.add("inactive");
       nCurrNum++;
       sCurrNum = "part"+String(nCurrNum)+"-exer";
       nCurrpage = 1;
       for(let i=12; i<18; i++){
           document.querySelector("#sign"+i).addEventListener("click", onClickSign);
       }
       for(let i=1; i<9; i++) {
           document.querySelector(".part2-exer .page2-exer .small-square div .answer"+i).addEventListener("click", onClickAnswer);
       }
       document.querySelector(".part"+nCurrNum+"-exer").classList.remove("inactive");
   }
   document.querySelector(".filler-btn").removeEventListener("click", onClickFiller);
   document.querySelector(".filler").classList.remove("transition");
   nMistakes = 0;
}
