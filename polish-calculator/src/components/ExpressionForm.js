import React from "react";

//Return the result of the calculation by passing a callback function as a prop
//Passing props from child to parent
//Bc its JS dont need to define onResult, parent will handle result
const ExpressionTextBox = ({ onResult }) => {
  //Event Handlers like onSubmit that will call this function pass an event object (e),
  //to the handler function like the one below
  const handleCalculator = (e) => {
    console.log(`Clicked Calculate`);

    e.preventDefault(); // Prevent the default form submission behavior

    //Use e.target to get Form element on the event (e)
    const form = e.target;

    //Create new formData object to use get methods by fieldName
    const formData = new FormData(form);

    //Get the expression input from formData object
    const expression = formData.get("expressionInput");
    console.log("Current expression:", expression);

    if (!expression) {
      console.error("Expression input is empty or not found.");
      return;
    }

    //Spilt the expression by spaces and put into an array
    const expArray = expression.split(" ");

    console.log("Current expression:", expArray);
    //To solve reverse polish notation, need a stack
    //If the current token is any operator (*,/,+,-)
    //then pop the numbers off the stack and perform operation
    //Else the token is a number and we push it onto the stack
    //JS arrays are every and basically stacks so thats what we use
    let resultStack = [];

    for (let token of expArray) {
      switch (token) {
        case "+":
          let operand1 = resultStack.pop();
          let operand2 = resultStack.pop();
          resultStack.push(operand1 + operand2);
          break;
        case "-":
          let operand3 = resultStack.pop();
          let operand4 = resultStack.pop();
          resultStack.push(operand3 - operand4);
          break;
        case "*":
          let operand5 = resultStack.pop();
          let operand6 = resultStack.pop();
          resultStack.push(operand5 * operand6);
          break;
        case "/":
          let operand7 = resultStack.pop();
          let operand8 = resultStack.pop();
          resultStack.push(operand7 / operand8);
          break;

        default:
          //Convert token to float when pushing onto the stack
          resultStack.push(parseFloat(token));
      }
    }

    // The final result is the last item in the stack
    const result = resultStack.pop();
    console.log("Chld final result:", result);
    onResult(result);
  };

  return (
    <>
      {/* // Use onSubmit instead of action so react uses custom function */}
      <form onSubmit={handleCalculator}>
        <label>
          Enter an Expression:
          <textarea
            name="expressionInput"
            defaultValue="3 11 5 + -"
            rows={4}
            cols={40}
          />
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Calculate</button>
      </form>
    </>
  );
};

export default ExpressionTextBox;
