// // // // // // // export function Databinding(){

import { useState } from "react";

// // // // import { scryRenderedComponentsWithType } from "react-dom/test-utils"

// // // // // // //     var categories=["All","Electronics","Footwear"];
// // // // // // //     var sales = ["30000.00", "46987.90","41000.00","20000.00"]

// // // // // // //     return(
// // // // // // //         <div className="container-fluid">
// // // // // // //            <ol>
// // // // // // //             {
// // // // // // //                 categories.map(category=> <li key={category}>{category}</li>)
// // // // // // //             }
// // // // // // //            </ol>
// // // // // // //             <select>
// // // // // // //                 {
// // // // // // //                     categories.map(category=> <option key={category}>{category}</option>)
// // // // // // //                 }
// // // // // // //             </select>
// // // // // // //             <ul className="list-unstyled mt-4">
// // // // // // //                 {
// // // // // // //                     categories.map(category => 
// // // // // // //                     <li key={category}> 
// // // // // // //                         <input type="checkbox" value={category}></input> <label>{category}</label>
// // // // // // //                     </li>
// // // // // // //                     )
// // // // // // //                 }
// // // // // // //             </ul>
// // // // // // //             <ol>
// // // // // // //                 {
// // // // // // //                     sales.filter(value=> value>40000).map(item=><li key={item}>{item}</li>)
// // // // // // //                 }
// // // // // // //             </ol>
// // // // // // //             <ol>
// // // // // // //                 {
// // // // // // //                     sales.filter(value=> value>40000).map((item,index)=><li key={index}>[{index}]{item}</li>)
// // // // // // //                 }
// // // // // // //             </ol>
// // // // // // //         </div>
// // // // // // //     )
// // // // // // // }

// // // // // // export function Databinding(){
// // // // // //     var data = [
// // // // // //         {Category: 'Electronics', Products:["Mobile","TV","Watches"]},
// // // // // //         {Category: 'Footwear', Products:["Sneakers","Boots","Casuals"]},
// // // // // //     ]
// // // // // //     return(
// // // // // //         <div className="container-fluid">
// // // // // //             {/* <ol>
// // // // // //                 {
// // // // // //                     data.map(item=> 
// // // // // //                         <li key={item.Category}>
// // // // // //                             {item.Category}
// // // // // //                             <ul >
// // // // // //                                 {
// // // // // //                                     item.Products.map(product=>
// // // // // //                                         <li key={product}>
                                            
// // // // // //                                             {product}
// // // // // //                                         </li>
// // // // // //                                         )
// // // // // //                                 }
// // // // // //                             </ul>
// // // // // //                         </li>
// // // // // //                         )
// // // // // //                 }
// // // // // //             </ol> */}
// // // // // //                 <select>
// // // // // //                     <option>Select a Product</option>
// // // // // //                     {
// // // // // //                         data.map(item=>
// // // // // //                             <optgroup label={item.Category} key={item.Category}>     
                                
// // // // // //                                     {
// // // // // //                                         item.Products.map(product=><option>{product}</option> )
// // // // // //                                     }
                               
                            
// // // // // //                             </optgroup>
// // // // // //                             )
// // // // // //                     }
// // // // // //                 </select>

// // // // // //         </div>

        
// // // // // //     )
// // // // // // }

// // // // // export function Databinding(){
// // // // //     var data = [
// // // // //         {Name: "Samsung TV", Price: 45000.55},
// // // // //         {Name: "Mobile", Price:12000.44}
// // // // //     ];
// // // // //     return(
// // // // //         <div className="container-fluid">
// // // // //             <table className="table table-hover">
// // // // //                 <thead>
// // // // //                 <tr>
// // // // //                     <th>
// // // // //                         Name
// // // // //                     </th>
// // // // //                     <th>Price</th>
// // // // //                 </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
                
// // // // //                     {
// // // // //                         data.map(item=>
// // // // //                             <tr key={item.Name}>
// // // // //                                 <td>{item.Name}</td>
// // // // //                                 <td>{item.Price}</td>
// // // // //                             </tr>
// // // // //                             )
// // // // //                     }
                
// // // // //                 </tbody>
// // // // //             </table>
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // export function Databinding(){

// // // //     var products = [
// // // //         {
// // // //         title : "Apple iPhone 15 (Black, 128 GB)",
// // // //         image : "images/iphone.jpg",
// // // //         price : 57999,
// // // //         rating : {rate:4.6,ratings:17998, reviews:1223},
// // // //         offers : [

// // // //             "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",

// // // //             "Bank Offer₹1500 Off On HDFC Bank Credit Card Non EMI Transactions. Min Txn Value: ₹150,000",

// // // //             "Bank Offer₹3000 Off On HDFC Bank Credit Card Non EMI Transactions",

// // // //             "special PriceGet extra ₹11901 off (price inclusive of cashback/coupon)"
// // // //         ]
// // // //     },
// // // //     {
// // // //         title : "Apple iPhone 14 (Black, 128 GB)",
// // // //         image : "images/iphone.jpg",
// // // //         price : 57999,
// // // //         rating : {rate:4.7,ratings:17998, reviews:1223},
// // // //         offers : [

// // // //             "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",

// // // //             "Bank Offer₹1500 Off On HDFC Bank Credit Card Non EMI Transactions. Min Txn Value: ₹150,000",

// // // //             "Bank Offer₹3000 Off On HDFC Bank Credit Card Non EMI Transactions",

// // // //             "special PriceGet extra ₹11901 off (price inclusive of cashback/coupon)"
// // // //         ]
// // // //     }
// // // //     ]





// // // // //     return(
// // // // //         <div className="container-fluid">
// // // // //             {
// // // // //                 products.map(product=>
// // // // //                     <div className="row my-4" key={product.title}>
// // // // //                         <div className="col-3">
// // // // //                             <img width="100%" src={product.image} />
// // // // //                         </div>    
// // // // //                         <div className="col-9">
// // // // //                             <div className="h4">
// // // // //                                 {product.title}
// // // // //                             </div>
// // // // //                             <div className="my-2">
// // // // //                                 <span className="badge bg-success text-white me-2">{product.rating.rate} <span className="bi bi-star-fill"></span></span>
// // // // //                                 <span className="text-secondary fw-bold">{product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews.toLocaleString()} Reviews</span>
// // // // //                             </div>   
// // // // //                             <div className="my-2" >
// // // // //                                <div className="h3">{product.price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</div>
// // // // //                                <div>10% Off <strike>79999</strike></div>
// // // // //                             </div>  
// // // // //                             <div>
// // // // //                                  <div className="h5 fw-bold">  Available Offers </div>  
// // // // //                                  <div className="mt-2">
// // // // //                                     <ul className="list-unstyled">
// // // // //                                         {
// // // // //                                             product.offers.map(offer=>
// // // // //                                                 <li className="bi bi-tag-fill text-success my-3">
// // // // //                                                     <span className="text-secondary">{offer}</span>
// // // // //                                                 </li>
// // // // //                                                 )
// // // // //                                         }
// // // // //                                     </ul>
// // // // //                                  </div>


// // // // //                             </div>
// // // // //                         </div>      
                    
// // // // //                     </div>
                     
               
                    
                    
// // // // //                     )

// // // // //             }
            

// // // // //         </div>
// // // // //     )
// // // //  //           


// // // export function Databinding(){

// // //     var products = [
// // //         {
// // //         title : "Apple iPhone 15 (Black, 128 GB)",
// // //         image : "images/iphone.jpg",
// // //         price : 57999,
// // //         rating : {rate:4.6,ratings:17998, reviews:1223},
// // //         offers : [

// // //             "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",

// // //             "Bank Offer₹1500 Off On HDFC Bank Credit Card Non EMI Transactions. Min Txn Value: ₹150,000",

// // //             "Bank Offer₹3000 Off On HDFC Bank Credit Card Non EMI Transactions",

// // //             "special PriceGet extra ₹11901 off (price inclusive of cashback/coupon)"
// // //         ]
// // //     },
// // //     {
// // //         title : "Apple iPhone 14 (Black, 128 GB)",
// // //         image : "images/iphone.jpg",
// // //         price : 57999,
// // //         rating : {rate:4.7,ratings:17998, reviews:1223},
// // //         offers : [

// // //             "Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card",

// // //             "Bank Offer₹1500 Off On HDFC Bank Credit Card Non EMI Transactions. Min Txn Value: ₹150,000",

// // //             "Bank Offer₹3000 Off On HDFC Bank Credit Card Non EMI Transactions",

// // //             "special PriceGet extra ₹11901 off (price inclusive of cashback/coupon)"
// // //         ]
// // //     }
// // //     ]
// // //     return(

// // //         <div className="container-fluid">
// // //             <section className="d-flex">
// // //                 {
// // //                     products.map(product=>
// // //                         <div className="card w-25 p-2 m-2">
// // //                             <img height="350" src={product.image}></img>
// // //                             <div className="card-header">
// // //                                 <div className="h4">{product.title}</div>
// // //                             </div>
// // //                             <div className="card-body">
// // //                                 <dl>
// // //                                     <dt>Price:</dt>
// // //                                     <dd>{product.price}</dd>
// // //                                     <dt>Ratings:</dt>
// // //                                     <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
// // //                                     <dt>Reviews:</dt>
// // //                                     <dd>{product.rating.reviews}</dd>
// // //                                 </dl>
// // //                                 <div>
// // //                                     <a href="#">More</a>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="card-footer">
// // //                                 <button className="btn btn-success bi bi-cart w-100"> Add to Cart </button>
// // //                             </div>
// // //                         </div>
                        
// // //                         )
// // //                 }
// // //             </section>

// // //         </div>
// // //     )


// // // }

// // export function Databinding(){
// //     var data = [
// //         { title: "HTML", description: "It is a markup language" },
// //         { title: "CSS", description: "It configures styles for HTML" },
// //         { title: "Javascript", description: "It is lightweight JIT compiled programming language." }
// //     ];
// //     return(
// //         <div className="container-fluid">
// //             {
// //                 data.map(item=>
// //                     <details key={item.title}>
// //                         <summary>{item.title}</summary>
// //                         <p className="ms-2">{item.description}</p>
// //                     </details>
                    
// //                     )
// //             }
// //         </div>
// //     )
// // }
// import "./databinding.css"
// export function Databinding(){
//     var categories = ["Electronics", "Footwear", "Fashion", "Kids", "Women Fashion"];
//     return(
//         <div className="container-fluid">
//             <ul className="list-box list-unstyled">
//                 {
//                     categories.map(category=>
//                         <li key={category} className="form-switch">
//                             <input className="form-check-input" type="checkbox"/>
//                             {category}
//                         </li>
//                         )
//                 }
//             </ul>
//         </div>
//     )
// }

export function Databinding(){
        const[name,setname]=useState('TV');
        const[price, setprice]=useState(45000);
        const[stock,setstock]=useState(false);
        const[city,setcity] =useState('-1');
        const[product,setproduct] =useState({Name:name, Price:price, Stock:stock, City:city});
       function nameChange(e){
        
            setname(e.target.value);
       }
        function priceChange(e){
            setprice(e.target.value);
        }
        function stockChange(e){
            setstock(e.target.checked);
        }
        function cityChange(e){
            console.log('coming here', e);
            setcity(e.target.value);
        }
        function saveClick(){
            setproduct({
                Name: name,
                Price: price,
                Stock: stock,
                City:city

        })
        }
    return(
        <div className="container-fluid">
            <div className="row m-2">
                <div className="col-3">
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" value={name} onChange={nameChange} className="form-control"></input></dd>
                        <dt>Price</dt>
                        <dd><input type="number" value={price} onChange={priceChange} className="form-control"></input></dd>
                        <dt>Stock</dt>
                        <dd><input type="checkbox" checked={stock} onChange={stockChange} className="form-check-input"></input><label>Available</label></dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select value={city} onChange={cityChange} className="form-select">
                                <option value="-1">Select City</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyd</option>
                                <option value="Chennai">Chennai</option>
                            </select>

                        </dd>
                    </dl>
                    <button onClick={saveClick} className="btn btn-warning w-25">Save</button>
                </div>
                <div className="col-9">
                    <dl className="row">
                        <dt className="col-3">Name</dt>
                        <dd className="col-9">{product.Name}</dd>
                        <dt className="col-3">Price</dt>
                        <dd className="col-9">{product.Price}</dd>
                        <dt className="col-3">Stock</dt>
                        <dd className="col-9">{(product.Stock===true)?"Available":"Out of Stock"}</dd>
                        <dt className="col-3">Shipped to</dt>
                        <dd className="col-9">{(product.City==="-1")?"Please select City":product.City}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}