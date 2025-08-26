import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  //With props on ListGroup we can now create multiple lists with different items
  let items = ["NY", "MN", "WI", "CA", "NV"];

  //eventHandler for select item
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleSubmit = () => {
    console.log(`The button was clicked and the app knows!`);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* child component */}
      <Alert>
        BEEELIIEEVEEEE <span> IN YOU SELF</span>
      </Alert>

      <Button onClickButton={handleSubmit} buttonTag="Click Me" />
    </div>
  );
}

export default App;
