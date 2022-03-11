# Countries Of South America

'Countries of South America' will test people's knowledge on countries of South America. In the game there are 12 points to collect, 12 countries in South America, and you will earn these points by getting the answers right. As soon as you start playing the game a quesition that relates to the answer/country will appear, you have to guess which country we are describing or asking you about. If you get the answer right, you will earn a point and will be able to move on to the next question, the goal is to get as many points as you can. There will be a timer, so users can test themselves by seeing who can finish the game the quickest with the highest points.

![Am I responsive picture](assets/images/amiresponsive-country-game.jpeg)

## Objective
<li>This site is targeted to people who love to test their knowledge, have an interest in geography and especially those who have an interest in the South American countries.</li>

<li>You can view the live link here - "add website link here when completed"</li>

## Features
<hr>

### <u>Home page</u>
<ul>
<li>In this page you have the name of the game in red, this will instantly give the user an idea of what the game is about. There will be an input where users can enter their names to be able to play the game and record there scores,  there will be a 'Play Game' button to be able to start the game.</li> 
<li>Below these features there will be a 'Rules of The Game', if you press on this button a box with the rules will appear on the screen, this will contain the rules and explain to users how the game works, how earn points and how to complete the game, and if they want, they can also quit or restart the game.<li>

![Home page appearance on a laptop](assets/images/laptop-main-page.jpg)
![Home page appearance on a mobile](assets/images/home-page-mobile.jpg)

### <u>Within the Game</u>

<li>In this area the game will keep track of what question the user is on, there will be a timer that will make it feel like quiz, this will add more pressure to the game, it is going to be a 15 second timer, when the timer hits 0 the correct answer will be revealed, options will be disabled and user will have to move on to the next question.</li>

![](assets/images/question-timer.jpg)

<li>In this area there is going to be the question AND the options that users will be able to select from, users will have to read the question and guess which country they are being asked about or which country is being described.</li>
<li>Users can hover over the question, the cursor will become a pointer on the options they can select, the color of he boxes will also change.</li>

![Questions and options](assets/images/question-area-laptop.jpg)


<li>After users select their answer, the options will be disabled and they can only select  home, restart or the next question. Pointer will get disabled.</li> 
<li>If the user select the correct answer then their option will turn green, next button will appear</li>

![Users option turns green](assets/images/select-correct-answer.jpg)


<li>This is the mobile verison of the game, when answer is correct it turns green, will act the same as on the laptop</li>

![QUestions and options of the game on a mbile screen](assets/images/game-mobile-version.jpg)

<li>If users select the wrong answer then their answer will turn red, and the correct answer will appear green</li>

![User option turns red when wrong and corret answer turns green](assets/images/wrong-answer-laptop.jpg)

<li>If user does not manage to beat the time then options will get disabled and correct answer will turn green</li>

![Correct answer turns green automatically when user cannot answer withing 15 secons](assets/images/time-run-out-laptop.jpg)


<li>In this part of the game there will be a Home button, a next question button and the Restart button.</li>
<li>The home button feature will be there incase the user wants to quit the game or to look at the rules again</li>
<li>The 'next' question button will only appear after the user has selected an answer, they won't be able to skip the question, this button will move on to the next question.</li>
<li>The restart feature will restart the game from question one, this will not take the user to the home screen
</ul>

![Here will a nav bar with a home button, next button and restart button](assets/images/home-next-retart-bar-laptop.jpg)

<li>After question is selected next button will appear</li>

![Here will a nav bar with a home button, next button and restart button](assets/images/home-next-retart-bar-laptop2.jpg)

<li>When all question have been answered a results box will appear on top of the questions with how many correct answers you got, and then two buttons at the bottom, one to go to the home page or to restart the game and play the game again</li>

![Results box with number of correct answers users scored](assets/images/results-box-end-game.jpg)

<li>This is how the results will appear on a mobile device</li>

![Results box with number of correct answers users scored on mobile device](assets/images/results-box-mobile.jpg)


<details><summary><h1>Wireframes</h1></summary>

<hr>

<li>So for my game my initial design was for it to guess the country by the flag, but as I got on with the project it was just difficult to have my idea blossom, I ran into so many obstacles with finding a way to implement the image when the question was called out at random from the array 'questions'.</li>
<li>So I went for a basic quiz question game.</li>
<li>But, even though it doesnt meet my inital wireframe design my game was still inspired by the wireframe, I still have the hidden Bolivian Flag, my game has a timer, instead of keeping track of the score my game keeps track of the question they are on. Unfortunatly I had to bin the 'hint' button, the sound toggling, and the highscore section.</li>

<li>But, I still have a home button, the next question button after user answers, and a restart button</li>


<img src="assets/images/home-screen-phone.jpeg" height="400" width="200"/>

![User assist bar](assets/images/users-assist-bar.png)

<img src="assets/images/game-section-correct.jpeg" height="400" width="400"/> <img src="assets/images/game-section-incorrect.jpeg" height="400" width="400"/>

![home-restart-next](assets/images/home-restart-next.jpeg)

</details>


## Design 
<hr>
<ul>
    <li>Fonts</li>
    <p>The fonts that will be used for this project are 'Smooch Sans' and 'Fredoka'</p>
    <li>Colors</li>
    <p>The main color for the game used was yellow (#DECC2A), the title will be in a red container and the 'Play Game' Button is in green container. The main page has a hidden flag within it and these are the colors of Bolivia.</p>
</ul>

## Technolgies Used
<hr>
<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
</ul>

# Testing

<h3>Browser Compatability</h3>
<ul>Testing done on these search engines, website opened as it should and executed all questions and features without issues
    <li>Chrome</li>
    <li>Safari</li>
    <li>Internet Explorer</li>
</ul>

## Code Validation
<h3>To test my project I used W3C HTML Validator, W3C CSS Validator and JSHint Validator, between the index.html and game.html there were 4 errors found, the CSS had a few mistake as well with e.g. 'border: solid red;' and the validator said I had to write this differently, 'border: solid; border-color: red;' this was solved but apart from that, no errors. With JSHint I got several errors regarding "	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)."
</h3>

<li>W3C HTML Validator</li>

![Image showing that my HTML has no errors](assets/images/html-validator.jpg)

<li>W3C CSS Validator</li>

![Image showing that there are no errors in my css](assets/images/css-validator.jpg)

<li>JSHint</li>

![](assets/images/js-warnings-validator.jpg)

<h2>Lighthouse Testing</h2>

<li>I tested my website using the lighthouse function on Google</li>
<li>These are the results I got</li>

<li>This image is showing the results of the home page of the game</li>

![This image is showing the results of the home page of the game](assets/images/lighthouse.jpg)

<li>This image is showing the results of the lighthouse testing of the questions area on a desktop</li>

![](assets/images/game-page-desktop-LH.jpg)

<li>This final image is showing the lighthouse results for the questions area on a mobile</li>

![](assets/images/game-page-mobile-LH.jpg)

<h3>These are the lighthouse results using Microsoft edge</h3>

![Image of lighthouse reults for Microsoft Edge, home page](assets/images/IE-lighthouse-desktop.jpg)

![Image of lighthouse reults for Microsoft Edge, game page](assets/images/IE-lighthouse-desktop-game.jpg)

![Image of lighthouse reults for Microsoft Edge, home page on a mobile screen](assets/images/IE-lighoutse-mobile-home.jpg)

![Image of lighthouse reults for Microsoft Edge, game page on aa mobile screen](assets/images/IE-lighoutse-mobile-game.jpg)



<ul>Bugs
    <li>Resolved bugs</li>
    <li>One of the bugs I got was the console error.favicon, after searching what the problem was it was easy to fix, the website now has a favicon and the error has gone away
    <li>Unresolved bugs</li>
    <li>I have this on my console when I load the index.html, but when I load the game up the console error dissapears and the code is fine....</li>

   ![Unsolved bug](assets/images/unsolvedd-bugs.jpg)

</ul>

## Deployment
<hr>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

## Credits
<hr>
<ul>Content
    <li>Font taken from Google Fonts</li>
    <li>Icons used from Font Awesome [Font Awesome](https://fontawesome.com/icons) </li>
    <li></li>
</ul>

## Acknowledgements 
<hr>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

## Future plans 
<hr>
<ul>
    <li>World wide scope</li>
    <li>Game</li>
    <p>Users will be able to skip questions and come back to them later once they rememeber, but this feature will only happen when the game gets bigger, so maybe for countries of Europe or all 50 states of America, otherwise, if the game was only 12 questions they can go ahead of the game a narrow all the countries down</p>
    <li></li>
</ul>




