# Tampercademy
![Platform](https://img.shields.io/badge/Platform-web-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-blueviolet)
![Add-on](https://img.shields.io/badge/Add--on-Tampermonkey-brightgreen)
![Add-on](https://img.shields.io/badge/Add--on-Greasemonkey-important)
![Website](https://img.shields.io/badge/Website-codecademy.com-informational)

# Overview

This is a script for Tampermonkey/Greasemonkey that automatically completes [codecademy.com](http://www.codecademy.com/) courses for you.

Its intended use is to skip the parts that you already know from previous study/experience while still having them marked as completed in your account.

**You still have to take quizzes and tests, so you have to know the topics covered in the lessons to progress.**

Once you get into a course, the scripts starts looking for progress buttons (things like "Next", "Next lesson", "Continue" etc.), when on the code editor pages it will complete the tasks for you, run the code and continue to the next section; if there's no need for code completion it will just check the checkboxes and continue to the next section.

When the script gets to a Quiz where user input is needed, you get a system notification so you know it's not progressing (you might want to double **check if you allowed notifications**).


