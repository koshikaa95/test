import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import { useState, useEffect} from "react";

export function ButtonEvents(){

//     function handleDoubleClick(){
//         window.open("images/m1.jpg", "Phone", "width=400 height=400")
//     }

//     function handlerightclick(){
//         alert("You can't right click");
//         document.onContextMenu = function(){
//             return false;
//         }
//     }

//     return(
//         <div onContextMenu={handlerightclick}>
//             <img onDoubleClick={handleDoubleClick} src="./images/m1.jpg" width="100px" height="100px"></img>
//         </div>
//     )

const[msg, setmsg] = useState("");

function handleCopy(){
    setmsg("Copied to Clipboard");

}

function handleCut(){
    setmsg("Cut to Clipboard");
}
return(
    <div>
        <dl>
            <dt>Account Number</dt>
            <dd onCopy={handleCopy} onCut={handleCut}><input type="text"></input></dd>
            <dd>{msg}</dd>
            <dt>Confirm Account Number</dt>
            <dd><input type="text"></input></dd>
        </dl>
    </div>
)




}