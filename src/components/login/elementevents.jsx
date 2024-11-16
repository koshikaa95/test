import axios from "axios";
import { useState, useEffect} from "react";

export function ElementState(){
// const[msg, setmsg] = useState("");
//     function handleFocus(){
//         setmsg("Username Required");
//     }
//     function handleBlur(){
//         setmsg("");
//     }
//     function handleChange(e){
//         if(e.target.value.length==0){
//             setmsg("Username Required");
//         }else{
//             setmsg("");
//         }
//     }

//     return(
//         <div>
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input></dd>
//                 <dd>{msg}</dd>
//             </dl>
//         </div>
//     )
// const[msg,setmsg] = useState("");
// const[gradevalue,setgradevalue] = useState(1);
// const[Errorclass, seterror] = useState("");

// function handlepassword(e){
//     var regexp = /(?=.*[A-Z])\w{4,15}/;
//     if(e.target.value.match(regexp)){
//         setmsg("Strong Password");
//         setgradevalue(100);
//         seterror("text-success");
//     } else{
//         if(e.target.value.length<4){
//             setmsg("Poor Password - Min 4 Chars required");
//             setgradevalue(20);
//             seterror("text-warning");
//         }else{
//             setmsg("Weak Password");
//             setgradevalue(1);
//             seterror("text-danger");
//         }
//     }
// }

// return(
//     <div>
//         <dl>
//             <dt>Password</dt>
//             <dd><input type="password" onChange={handlepassword}></input></dd>
//             <dd>
//                 <meter min="1" value={gradevalue} max="100" style={{width:'200px'}}></meter>
//             </dd>
//             <dd className={Errorclass}>{msg}</dd>
//         </dl>
//     </div>
// )

const[msg,setmsg] = useState("");
const[color, setcolor] = useState("");
const[status,setstatus] = useState({width:""})
function handlePasswordChange(e){
    var regexp = /(?=.*[A-Z])\w{4,15}/;
    if(e.target.value.match(regexp)){
        setmsg("Strong Password");
        setcolor("bg-success");
        setstatus({width:"100%"});
    }else{
        if(e.target.value.length<4){
            setmsg("Poor Password - Min 4 Chars required");
            setcolor("bg-danger");
            setstatus({width:"30%"});
        }else{
            setmsg("Weak Password");
            setcolor("bg-warning");
            setstatus({width:"60%"});
        }
    }
}


return(
    <div>
        <dl>
            <dt>Password</dt>
            <dd><input type="password" onChange={handlePasswordChange} ></input></dd>
            <dd className="progress" style={{width:"200px"}}>
                <div style={status} className={`progress-bar progress-bar-animated progress-bar-striped ${color}`}>
                {msg}
                </div>
                </dd>    
        </dl>
    </div>
)


}