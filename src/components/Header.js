import { Button } from "./Button"


const Header = ( {setshowaddform, showaddform, handleClick } ) => {
    
    return (
        <header className="header">
        <div>
        <h1>Coding Notes</h1>
        <h6>Keep on track</h6>
        {/* <p>Click title to expand</p> */}
        </div>
        <Button text="Add" onClick={handleClick}/>
      </header>
    )
}

export default Header;
