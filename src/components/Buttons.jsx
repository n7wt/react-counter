import reset from "../images/Reset.png";

function Buttons() {
  return (
    <div className="buttons__menu">
      <button className="buttons__menu-item increase">+</button>
      <button className="buttons__menu-item reset">
        <img className="reset-img" src={reset} alt="Reset" />
      </button>
      <button className="buttons__menu-item decrease">-</button>
    </div>
  );
}

export default Buttons;
