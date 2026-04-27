import chefLogo from "../assets/2chef-claude-icon.svg"
export default function ChefHeader(){
    function handleMouseHover(){
        console.log("Mouse hovered over image!\n")
    }
    return(
        <>
            <div className="header-bar">
                <img className="chef-logo" src={chefLogo} alt="logo"onMouseOver={handleMouseHover} />
                <h1 className="header-text">DishGen</h1>
            </div>
        </>
    )
}