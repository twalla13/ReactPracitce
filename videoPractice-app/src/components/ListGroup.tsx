import { useState } from "react";

//Lets make this listGroup reusable! by adding some props to specify items and list name
//Bc typescript need to make an interface for props

interface Props {
  items: string[];
  heading: string;

  //function to update parent component list item has been selected
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //Lets render list items dynamicalys
  // use map for looping through object and converting it to li element
  //use curly braces to render item dynamically
  //to add JSX in return block below wrap in {}
  //Each item in list needs an id, real world would be something like item.id
  // {items.map(item => <li key= {item}> {item} </li>)}

  //   const items = ["NY", "MN", "WI", "CA", "NV"];

  //Dont want to write to much in return block in {}
  //Use functions or const to return things

  let i = 0;
  //Instead of using ? : operator
  // const message = i === 0 ? <p>message, no parameters</p> : null;
  //Better way is to use && operator with logical statements bc
  //true && <p></p> = <p></p>
  const message = i === 0 && <p>message, no parameters</p>;
  const funMessage = (num: number) => {
    return <p>Your number is {num}</p>;
  };

  //Click events in components

  //Want the element to be highlighted when clicked, use active attribute in html in return block
  //To render highlighted when clicked (dynamically)

  // Use state for the selected item index
  // Use state manages the variable and the re-rendering of the component when it changes
  // since the active state depends on this varaible we use useState
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Initialize selectedIndex to `null` (no item selected initially)

  const handleItemClick = (item: string, index: number) => {
    //Use ${} in template literals backticks
    //For embedding variables or expressions inside a string.
    //Used for strings in Javascript
    // const name = "Emma";
    // console.log(`Hello, ${name}`); // Output: Hello, Emma

    // () is JSX expressions that render dynamically in react
    setSelectedIndex(index);
    onSelectItem(item);

    return console.log(
      `Clicked on list item with index ${index}! ${selectedIndex}`
    );
  };

  return (
    //For returning multiple lines wrap the return in ();

    //Component cannot not return more than one element
    //To solve this wrap the entire in div,
    //Highlight section to wrap, go to command palette
    //search for wrap with abbreivation and enter tag

    //Better way without adding extra element to DOM,
    //Use Fragment <> </> to wrap child elements
    <>
      {message}
      {funMessage(2)}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          // Note only want to pass reference to onClick attribute, not call it with () at the end
          //Use selectedIndex variable, that is updated in handleItemClick to change the selectedIndex
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleItemClick(item, index)}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
