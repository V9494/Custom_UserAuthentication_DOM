/*
--> Basically the Object will be come from the 'page.js'.
1.Creating the Class in JavaScript.
2.Name the Class NewModal
3.Defining the Constructor inside it.
4.The Constructor takes the Object as the Parameter.
5.Assigning the the values inside the Constructor.
6.this keyword refers the values of current object.
 */

//class is the basically the blue print of the object it holds the functios,varibles etc.
//It is store inside the object

class NewModal {
  //constructor invokes atomatically when the instance/object of the class is created.
  /* 1. Using the this Operator to assigning the values inside the values.
       2. this keyword is used to get the value of current instance values that has called.
       3. Instance is basically the Object that called.
    */

  constructor({ titleText, messageText, confirmText, cancelText }) {
    this.titleText = titleText;
    this.messageText = messageText;
    this.confirmText = confirmText;
    this.cancelText = cancelText;
  }

  /* Regular Method: A regular method is any function defined within a class that is not the constructor. Regular methods are used to define behaviors or actions that objects created from the class can perform. They are called explicitly on an instance of the class. */

  //createAndOpen() regular method.

  /*  passing the paramerters inside the createAndOpen() function that came from promise. Nothing but the Resolve and Reject
      Resolve = confirmButton
      Reject = cancelButton
  */

  createAndOpen(confirmButton, cancelButton) {
    /* 1. Creating the Black Background overly when the user click on the button.
       2. So creating the new 'Div' dynamically inside the JavaScript.
       3. After the creating the 'Div' backgroundOverly we just assign the class 'modal'.
       4. The class 'modal' is already styles in Style.css
       5. using the 'ClassList.add()' function inside it.
       6. After adding the class 'modal' inside it then it also shows on the body.
       7. So uses the 'appendChild(backgroundOverly)' the 'appendChild' method applies on the body.
       8. Now our Black Overly is ready to seen.
       9. Logic behind is that the bacground overly opens when the user click on the button and also take time to open.
       10. SO in backgroundOVerly class we pass the Opacity: 0; which Not Visible. Until the User Click on it.
       11. After user Click on the button the We add new Class 'open' which has the Opacity:1; which is visible.  
    */

    //creating the div name called backgroundOverly.
    this.backgroundOverly = document.createElement("div");

    /*1. Using the ClassList we can Assign the new class or add the new Class to perticular 'Div' or Element.
      2. ClassList can consists of 3 functions
                1.add('className'):     Adding the Class inside the Element.
                2.remove('className'):  Removeing the class inside the Element.
                3.toggle('className'):  Basically toggle() class check the perticular class is present or not.
                                        If it is not Present then it adds, If it present it reomoves. In the form of Boolean operations.
    */

    this.backgroundOverly.classList.add("backgroundOverly");

    //adding the open class to take sometime to open it when it click.
    setTimeout(() => {
      this.backgroundOverly.classList.add("open");
    }, 500);

    //appendchild is the show the div on the body. Shows on the body.
    document.body.appendChild(this.backgroundOverly);

    //Creating the Card frame of the Modal.
    /* 1. Next Step to add the Card or Modal inside the Black OVerly.
        2. SO just like up we now created Modal / Card Frame.
        3. Which also to do same thing like classList, appendChild().
        4. But now we do appendChilde() inside the backgroundOverly.
        5. The modal card consits of two div's one is "Front" & second is "Back"
        6. That help us to flip the card.
  */
    this.modalCard = document.createElement("div");
    this.modalCard.classList.add("modalCard");

    //appendchild shows the modalcard on the backgroundOverly.
    this.backgroundOverly.appendChild(this.modalCard);

    /* 1.Now we make the front div 
       2.Front is consist all the content inside it like, textTitle, textMessage, Buttons etc.
       3.The all the content inside the front div.
       4. So make the all div element and only we have to do the appendChild inside the front div.
    */

    //front
    this.front = document.createElement("div");
    this.front.classList.add("front");
    this.modalCard.appendChild(this.front);

    /* 1. Now We Making the Content like Heading, messgae, Buttons.
       2. The proccess is the same, But we asssigning the values that comes form the Object or Constructor inside it.
       3. Creating the Each Element.
       4. Adding thier peritcular class inside it.
       5. Assining the values inside it using "DivName.texContent = this.perticularValues".
       6. AppendChild() inside the Front Div. "front.appendChild(DivName)".
       7. Now inside the Cancel and Accept button we have to add the Event Listeners.
       8. That take the user values.
       9. Also the Call the Perticular Promises and furthur Methods.
     */

    //Heading
    //Creating pragarph tag to showing the title on the card.
    const textTitle = document.createElement("p");

    //giving the class name 'textTitle'
    textTitle.classList.add("textTitle");

    //setting the Title text inside textTitle
    textTitle.textContent = this.titleText;

    //appendchild shows the textTitle in the front.
    this.front.appendChild(textTitle);

    //message
    const textMessage = document.createElement("p");
    textMessage.classList.add("textMessage");
    textMessage.textContent = this.messageText;
    this.front.appendChild(textMessage);

    //Cancel Button
    /*
      1.Now we in Cancel button after user clicking the on it. 
      2.We just call the methods like "this.close()" and Promises like "cancelButton("Fail")".
      4.When user click the cancel button it passes the argument Fail to 'Catch()' block in page.js. 
      3.Promise furthur goes to the "Page.js" and display the value into the Console.
      5."this.Close()" function reomves the class called 'open' and 'backgroundoverly' from the body.

    */

    const cancelButtonText = document.createElement("button");
    cancelButtonText.classList.add("cancelButtonText");
    cancelButtonText.textContent = this.cancelText;
    this.front.appendChild(cancelButtonText);

    // Consolidate event listeners for cancel button
    const cancelAction = () => {
      cancelButton("Fail");
      this.close();
    };
    cancelButtonText.addEventListener("click", cancelAction);
    cancelButtonText.addEventListener("touchend", cancelAction);

    //Confirm Button

    /*
      1.Now we in Confirm button after user clicking the on it.
      2.We just call the methods like "rotate()" and "gameLogic(confirmButton)" 
      3.Calling the Rotate Method which rotate the card.
      4.Calling the gameLogic Method which takes the argument that came from the Promises which is also Know as Resolve.
      5.This Resolve goes until the User Not Authuanticate successfully or until user complete the game.
     */
    const confirmButtonText = document.createElement("button");
    confirmButtonText.classList.add("confirmButtonText");
    confirmButtonText.textContent = this.confirmText;
    this.front.appendChild(confirmButtonText);

    //Taking the user Action from the Confirm Button
    /* When user click the Confirm/Absolutly button it passes the argument Success to 'then()' block in page.js */
   // Consolidate event listeners for confirm button
   const confirmAction = () => {
    this.rotate();
    this.gameLogic(confirmButton);
  };
  confirmButtonText.addEventListener("click", confirmAction);
  confirmButtonText.addEventListener("touchend", confirmAction);
    //Back Card Code.
    /*
      1.Now we just completed the Front card Code.
      2.Now we have to code back card after the user Press "ConfirmButton".
      3.The card get flips & user Play the game "Whack A  Mole".
      4.Now Just like the Create the Element Front now also create the Element Back.
      5.Which appendchild() inside the modalCard. Because the Modal Card contain 2 div first "FRONT", 2nd "Back".
      6.Now I just Writ the HTML insid the Back now doing making the every element and then asssign it class also display it.
      7.So I directly uses the property called "innerHTML". You can define the HTML inside JavaScript. 
    */

    //Asscees the back using 'this' keyword because access it globally.

    this.back = document.createElement("div");
    this.back.classList.add("back");
    this.modalCard.appendChild(this.back);

    this.back.innerHTML = `
        <div class="Score-Card" ">
        <h2 >Your Score:</h2>
        <h2 class="user-score"></h2>
        <h2>Valid Score: 7</h2>
      </div>
      <div class="grid">
        <div class="square" id="1"></div>
        <div class="square" id="2"></div>
        <div class="square" id="3"></div>
        <div class="square" id="4"></div>
      </div>
      <div class="WackAmoleInfo" ">
        <h2>Hit the Whack A Mola</h2>
      </div>

        `;
  }

  /*
     Promises: 
              1.The Promise is just like the promise we do in our real life.
              2. example. You have the friend which promise you that 'When I complete my homework I give you a Gift'.
              3.Which promise right.
              4.In javaScript the promise are just like that when function complete their work it returns the values.
              5.It returns values in the form Resolve or Rejct.
              6. Resolve and Reject is nothing but.
                    1.Resolve: Your friends Homework is complete after that he gives you a gift. Means his promise fullfill or success 
                    2.Rejcet: Your friends Homework not complete for some inconvinece or anything so your he doesn't give any gift.Means he fail 
                    3.Pending:Your friends doing Homework he yet not complete it but he also not get the error then your gift is pending state.
              7.After getting the resolve or reject it returns it.
              8.Resolve value goes into the "then((value) => (console.log(value)))".
              9.Reject value goes into the ".catch((value)) =>(console.log(value)))".
    */

  /* 1.Now our Create And Open function work is completed.
     2.We want the function that called "CreateAndOpen()" function and return some values to the "page.js"
     3.So we create the "Open()" which call from the "page.js" with the help of Object of "NewModal".
     4.We that "Open()" functions return the promise.
     5.That helps to get values like "user is authuanticate" or "Fail".
     6.So we create the Promise.
     7.Inside promise we call the "createAndOpen()" function with passing the arguments 'Resolve, Reject' for user values.
  */

  open() {
    return new Promise((resolve, reject) => {
      this.createAndOpen(resolve, reject);
    });
  }

  //Creating the Close() named Functon.
  /*
    1.Now we have to create the Close Function.
    2.After Completeing the user Actions.
    3.We have to remove the modal Card and backgroundOverly.
    4.Now we just remove the 'open' class whose Opacity:1;
    5.The backgroundOverly Consists of entier Card.
    6.So we can only remove it fromt the body.
    7.It not remove fast so place inside into setTimeout().
    8.romves from the body so 'body.removeChild(this.backgroundOverly)';
   */
  close() {
    this.backgroundOverly.classList.remove("open");
    setTimeout(() => {
      document.body.removeChild(this.backgroundOverly);
    }, 1000);
  }

  /*1.Now we Create the Rotate Function.
    2.Which can only add the Class when to the Modalcard div when user click on the 'ConfirmButton'.
    3.'flipped' card consist of 'transform: translateY(180deg).
    4.Which rotate the card 180 degree back.
  */
  rotate() {
    this.modalCard.classList.toggle("flipped");
  }


  /*
    1.Now create the gameLogic function.
    2.When user click on the 'confirmButton' the card flipped and then game also start.
    3.The logic of the game is that.
    4.we have to hit the 'Whack A Mole'. If user hit Whack A Mole it gets the point.
    5.The Whack A Mole randomly change their position inside the block.
    6.When the user Score hits is equal to the valid score then game stop card again flip 180 deg.
    7.Then user get the access of the website. 
  */

    gameLogic(confirmButton) {
      const square = document.querySelectorAll(".square");
      const score = document.querySelector(".user-score");
      let result = 0;
      let hitPositions;
      let validScore = 7;
      let timerId = null;
  
      function randomSqaure() {
          square.forEach((square) => {
              square.classList.remove("mole");
          });
  
          let randomSqaure = square[Math.floor(Math.random() * 4)];
          console.log(randomSqaure);
          randomSqaure.classList.add("mole");
          hitPositions = randomSqaure.id;
      }
  
      square.forEach((square) => {
        const handleInteraction = () => {
          if (square.id === hitPositions) {
            result++;
            score.textContent = result;
            hitPositions = null;
            if (result === validScore) {
              clearInterval(timerId);
              this.frontRemoveAndLoader(confirmButton);
            }
          }
        };
  
        square.addEventListener("mousedown", handleInteraction);
        square.addEventListener("touchend", handleInteraction);
      })
  
      function moveMole() {
          timerId = setInterval(randomSqaure, 500);
      }
      moveMole();
  }
  

  frontRemoveAndLoader(confirmButton) {
    this.modalCard.classList.toggle("flipped");
    if (this.modalCard.contains(this.front)) {
      this.modalCard.removeChild(this.front);
  }
  
    this.front.innerHTML = `
    <div class="wrapper">
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  </div>
  `;
    this.modalCard.appendChild(this.front);

    setTimeout(() => {
      this.close();
      confirmButton();
    }, 1000);
  }
}
