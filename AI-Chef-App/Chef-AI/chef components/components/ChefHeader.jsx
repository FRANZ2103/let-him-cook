import chefLogo from "../assets/chef-claude-icon.png"
export default function ChefHeader(){
    function handleMouseHover(){
        console.log("Mouse hovered over image!\n")
    }
    return(
        <nav className="dg-nav">
            <div className="dg-logo">
                <img className="dg-logo-icon" src={chefLogo} alt="logo"onMouseOver={handleMouseHover} />
                DishGen
            </div>
            <span className="dg-badge">
                Beta </span>
        </nav>
    )
}