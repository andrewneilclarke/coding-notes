import { Button } from "./Button"

const Header = () => {

    const onClick = () => {
        console.log('click')
    }
    return (
        <header className="header">
        <h1 style={{ color: "#94d0cc"}}>Coding Notes</h1>
        <Button color="#94d0cc" text="Add" onClick={onClick}/>
      </header>
    )
}

export default Header;
