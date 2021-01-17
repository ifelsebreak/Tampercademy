// ==UserScript==
// @name         codecadmey course completer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto clicks the right spots to make it complete a course
// @match        https://www.codecademy.com/*
// @author       albi
// @grant        none

// ==/UserScript==

//data-testid="start-btn"

//setTimeout(beginclick,30000);

console.log("Started!");
Notification.requestPermission();



function sleep(s){
  var now = new Date().getTime();
  while(new Date().getTime() < now + (s*1000)){ /*console.log('waiting');*/ }
}



setInterval(autoClickButtons,1000);
setInterval(notifyMe,2000);
setInterval(mettiSpunte,3000);
setInterval(getCodeSolution,5000);



var needsCoding = false;
var isQuiz = false;
var notificationDisplayed = false;




function notifyMe() {

    var isQuiz = document.getElementsByClassName('quizAssessmentContainer__UZayJNA1KvwykjNWosYQP')
    if (isQuiz.length > 0) {isQuiz = true;};

    console.log(isQuiz.length);

    if (Notification.permission === "granted" && isQuiz == true && notificationDisplayed == false) {
    // If it's okay let's create a notification
    var notification = new Notification("It's time to take a quiz!");
    notificationDisplayed = true;
  }

    else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
    });
  }

}





function mettiSpunte() {
    //controllo se sono nella pagina dell'editor
    var isEditorPage = document.querySelectorAll('div[aria-label="Code Editor"]')
    //var isEditorPage = divs.hasAttribute('aria-label');
    console.log('ho trovato ' + isEditorPage.length + ' code editors');

    //nel caso, clicco tutte le spunte
    if (isEditorPage.length > 0) {
        notificationDisplayed = false;
        var spunteHTML = document.querySelectorAll('div[role="checkbox"]');
        var spunte = Array.from(spunteHTML);

        console.log('I found ' + spunte.length + ' checkboxes!!');
        console.log(spunte.length);

        if (spunte.length > 0) {needsCoding = false;} else {needsCoding = true;};

        var c = 0;
        for (c = 0; c < spunte.length; c++) {

            //if (spunte[c].aria-checked="false") {

                spunte[c].click();
                console.log("I CLICKED on a checkbox!!");
                console.log(c);

            }
    }

        /*function clickCheckboxes(item, index) {
            spunte[index].click();
            console.log("I CLICKED on a checkbox!!");
        }

        spunte.forEach(clickCheckboxes);*/
}





function getCodeSolution() {
    //controllo se sono nella pagina dell'editor
    var isEditorPage = document.querySelectorAll('div[aria-label="Code Editor"]');
    //var isEditorPage = divs.hasAttribute('aria-label');
    console.log('I found ' + isEditorPage.length + ' code editors');


    if (needsCoding == true) {

    //nel caso, cerco la soluzione
    if (isEditorPage.length > 0) {
    notificationDisplayed = false;

    console.log('I look for the solution...');

    var GetUnstuckHTML = document.getElementsByTagName('span');
    var GetUnstuck = Array.from(GetUnstuckHTML);

    console.log('Ho trovato ' + GetUnstuck.length + ' tasto UNSTUCK');

    for (var u = 0, len_u = GetUnstuck.length; u < len_u; ++u) {
        if (GetUnstuck[u].textContent == "Get Unstuck") {

                GetUnstuck[u].click();
                console.log("'Get Unstuck' clicked!");


                var solution_buttonsHTML = document.querySelectorAll('button[aria-expanded="false"]');
                var solution_buttons = Array.from(solution_buttonsHTML);
                console.log('ho trovato ' + solution_buttons.length + ' tasti EXPANDABLE');

                for (var i = 0, len = solution_buttons.length; i < len; ++i) {
                    //if (solution_buttons[i].textContent == "Solution") {
                        solution_buttons[i].click();
                        console.log("Soulution clicked!");

                        var codeSolution_buttonsHTML = document.getElementsByTagName('button');
                        var codeSolution_buttons = Array.from(codeSolution_buttonsHTML);

                        for (var j = 0, len_code = codeSolution_buttons.length; j < len_code; ++j) {
                            if (codeSolution_buttons[j].textContent == "Get Code Solution") {
                                codeSolution_buttons[j].click();
                                console.log("GET CODE clicked!");

                                var replaceHTML = document.getElementsByTagName('span');
                                var replace = Array.from(replaceHTML);

                                for (var d = 0, len_d = replace.length; d < len_d; ++d) {
                                   if (replace[d].textContent == "Replace with Solution") {
                                       replace[d].click();
                                       console.log("REPLACE clicked!");

                                       var closeHelpHTML = document.querySelectorAll('button[aria-label="Close help options menu"]');
                                       var closeHelp = Array.from(closeHelpHTML);

                                       console.log('Ho trovato ' + closeHelp.length + ' tasti X');
                                       var h
                                       for (h = 0; h < closeHelp.length; h++) {
                                           closeHelp[h].click();
                                           console.log('Ho cliccato il tasto X');

                                           sleep(2);
                                           var runHTML = document.querySelectorAll('button[aria-label="Run Code for Exercise"]');
                                           var run = Array.from(runHTML);

                                           console.log('Ho trovato ' + run.length + ' tasti RUN');
                                           var r
                                           for (r = 0; r < run.length; r++) {
                                               run[r].click();
                                               console.log('Ho cliccato il tasto RUN');

                                               sleep(7);
                                           }

                                       }


                                   }
                                }

                            }
                        }
                    //}
                }






        }
    }
}

}

}


//document.addEventListener("DOMContentLoaded", mettiSpunte);






function autoClickButtons() {


    var standard_buttonsHTML = document.getElementsByTagName('button');
    var A_buttonsHTML = document.getElementsByTagName('a');

    var standard_buttons = Array.from(standard_buttonsHTML);
    var A_buttons = Array.from(A_buttonsHTML);

    var buttons = standard_buttons.concat(A_buttons);


    for (var i = 0, len = buttons.length; i < len; ++i) {
        console.log("I found " + buttons.length + " PROGRESS buttons!");

        /*if (buttons[i].textContent == "Start" || "Next" || "Start next lesson" || "Start next tutorial" || "Start next article" || "Start next info" || "Start next reading" || "Start next documentation" || "Start next resource" || "Up Next" || "Start next quiz") {
        buttons[i].click();
        console.log("I clicked a button!");

    }*/

        
        if (buttons[i].textContent == "Start") {
            buttons[i].click();
            console.log("Start button clicked!");

        }

        else if (buttons[i].textContent == "Next") {
            buttons[i].click();
            console.log("'Next' button clicked!");

        }

        else if (buttons[i].textContent == "Start next lesson") {
            buttons[i].click();
            console.log("'Next lesson' button clicked!");

        }

        else if (buttons[i].textContent == "Start next tutorial") {
            buttons[i].click();
            console.log("'Next tutorial' button clicked!");

        }

        else if (buttons[i].textContent == "Start next article") {
            buttons[i].click();
            console.log("'Next article' button clicked!");

        }

        else if (buttons[i].textContent == "Start next info") {
            buttons[i].click();
            console.log("'Next info' button clicked!");

        }

        else if (buttons[i].textContent == "Start next reading") {
            buttons[i].click();
            console.log("'Next reading' button clicked!");

        }

        else if (buttons[i].textContent == "Start next documentation") {
            buttons[i].click();
            console.log("'Next doc.' button clicked!");

        }

        else if (buttons[i].textContent == "Start next resource") {
            buttons[i].click();
            console.log("'Next resource.' button clicked!");

        }

        else if (buttons[i].textContent == "Up Next") {
            buttons[i].click();
            console.log("'Up Next' button clicked!");

        }

        else if (buttons[i].textContent == "Start next quiz") {
            buttons[i].click();
            console.log("'Next quiz' button clicked!");

        }

        else if (buttons[i].textContent == "Start next project") {
            buttons[i].click();
            console.log("'Next quiz' button clicked!");

        }

    }



        //var c = 0;
        //for (c = 0; c < spunte.length; c++) {

            /*if (spunte[c].aria-checked="false") {

                spunte[c].click();
                console.log("I CLICKED on a checkbox!!");
                console.log(c);

            }/*



/*
            var spuntateHTML = document.querySelectorAll('div[aria-checked="false"]');
            var spuntate = Array.from(spuntateHTML);

            var cd
            for (cd = 0; cd < spuntate.length; cd++) {
                spunte[cd].click();
            }
*/






    /*
    var GetUnstuckHTML = document.getElementsByTagName('span');
    var GetUnstuck = Array.from(GetUnstuckHTML);

    for (var u = 0, len_u = GetUnstuck.length; u < len_u; ++c) {
        if (GetUnstuck[u].textContent == "Get Unstuck") {
            GetUnstuck[u].click();
            console.log("'Get Unstuck' button clicked!");
            break;
        }
    }


*/

    //}


    //var spunte = document.querySelectorAll('div[checkbox]');






}

