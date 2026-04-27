/**Challenge: Convert the code below to use an array
held in state instead of a local variable. Initialize
the state array as an empty array
Don't worry about fixing 'addFavoriteThing'
quite yet.
 */
import React from "react"
export default function StateChange(){
const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
const allFavoriteThings = ["eat", "sleep", "watch"]
const thingsEIements = myFavoriteThings.map (thing => <p key={thing}>{thing}</p>)

/*** Challenge: you do it!
* Every time "Add item" is clicked,
* "Test" to the list on the page
it should add another string */

function addFavoriteThing(){
    setMyFavoriteThings(prevFaveThing => [...prevFaveThing, "Test"])
}
    
    return(
        <>
        <button onClick={addFavoriteThing } > Add Item</button>
        <section>{thingsEIements}</section>


        </>
    )
}