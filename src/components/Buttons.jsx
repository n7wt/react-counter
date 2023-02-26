import reset from "../images/Reset.png";

function Buttons({ counter, setCounter }) {
  function increase() {
    setCounter(counter + 3);
  }

  function decrease() {
    if (counter - 2 < 0) {
      alert("Число не может быть отрицательным!");
    } else {
      setCounter(counter - 2);
    }
  }

  function refresh() {
    setCounter(0);
  }

  return (
    <div className="buttons__menu">
      <button className="buttons__menu-item increase" onClick={increase}>
        +
      </button>
      <button className="buttons__menu-item reset" onClick={refresh}>
        <img className="reset-img" src={reset} alt="Reset" />
      </button>
      <button className="buttons__menu-item decrease" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Buttons;
