import { Button } from "./Button"

const Header = () => {

    const onClick = () => {
        console.log('click')
    }
    return (
        <header className="header">
        <div>
        <h1 style={{ color: "#94d0cc"}}>Coding Notes</h1>
        <p>Double-click to expand</p>
        </div>
        <Button color="#94d0cc" text="Add" onClick={onClick}/>
      </header>
    )
}

export default Header;
