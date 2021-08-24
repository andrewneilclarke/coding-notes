import { Button } from "./Button"
import { Link } from 'react-router-dom'

const Header = ( { showaddform, setshowaddform } ) => {

    const handleClick = () => {
        setshowaddform(!showaddform)
    }

    return (
        <>
        <header className="header">
            <div>
                <Link to="/"><h1>Coding Notes</h1></Link>
                <h6>Keep on track</h6>
            </div>
            <Button text={!showaddform ? "Add" : "Close"} onClick={handleClick}/>
         </header>
        <p className="updated">Last Updated:</p>
      </>
    )
}

export default Header;
