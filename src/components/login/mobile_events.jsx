import { useEffect, useState } from "react";
import axios from "axios";
import './mobilevents.css';

export function MobileEvents(){

    const[images,setimages] = useState([{img_src:""}]);
    const[previewsrc, setpreview] = useState('images/m1.jpg');

    useEffect(()=>{
        axios.get("mobiles.json")
        .then(response =>{
            setimages(response.data);
            
        })
    },[])

    function handlemouseover(e){
        setpreview(e.target.src);
    }

    return(
        <div className="row mt-2">
            <div className="col-2">
                {
                    images.map(image =>
                        <div key={image.img_src} className="border border-2 my-3" style={{width:"90px"}}>
                            <img onMouseOver={handlemouseover} src={image.img_src} width="80" height="80"></img>
                        </div>
                    )
                }
            </div>
            <div className="col-10">
                <img width="500" src={previewsrc} height='500'></img>
            </div>
        </div>
    )
}