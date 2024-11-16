import { useState, useEffect } from "react";
import $ from 'jquery';

export default function MountDemo() {
    const[products,setProducts] = useState([{Name:"",Price:0, Stock:false}]);

    


    function LoadProducts(){

        $.ajax({
            method:'get',
            url: 'products.json',
            success:(response)=>{
                setProducts(response);
            }
        })
    }

//         fetch("products.json")

//         .then(response => response.json)
//         .then(products=>{
//             setProducts(products);
//         })
//    }

   
        useEffect(()=>{
            LoadProducts();
        },[]);
    return(
        <div className="container-fluid">
            <h2> Products Table </h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => 
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    {(product.Stock===true)?"Available":"Out of Stock"}
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}