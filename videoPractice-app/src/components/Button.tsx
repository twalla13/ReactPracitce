interface Props {
  buttonTag: string;

  //function to update parent component list item has been selected

  onClickButton: () => void;
}

const Button = ({ buttonTag, onClickButton }: Props) => {
  const handleButtonClick = () => {
    onClickButton();
  };
  return (
    <>
      <button type="button" className="btn" onClick={() => handleButtonClick()}>
        {buttonTag}
      </button>
    </>
  );
};

export default Button;
