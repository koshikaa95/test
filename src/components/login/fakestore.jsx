import { useEffect, useState } from "react";
import axios from "axios";

export function Fakestore() {
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([{id:0 , title: "", price:0 , description:"", image:"", category:"", rating:{rate:0, count:0} }])
  const[cartitems, setcartitems] = useState([]);
  const[cartcount,setcartcount] = useState(0);

  function LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setcategories(response.data);
      });
  }
  function LoadProducts(url){
    axios.get(url)
    .then(response =>{
        
        setproducts(response.data);
    })
  }
  function handleCategoryChange(e){

    if(e.target.value==='all'){
       
        LoadProducts('https://fakestoreapi.com/products');
    }else{
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
       
  }

 function handlecartclick(product){
    
    cartitems.push(product);
    getcartcount();
    
  }

  function getcartcount(){
    setcartcount(cartitems.length);
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts('https://fakestoreapi.com/products');

  }, []);
  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between bg-dark text-white p-2">
        <h2>Fakestore</h2>
        <div className="fw-bold fs-5">
          <span className="me-3">Home</span>
          <span className="me-3">Electronics</span>
          <span className="me-3">Men's Fashion</span>
          <span className="me-3">Women's Fashion</span>
          <span className="me-3">Jewellery</span>
        </div>
        <div>
          <span className="bi bi-heart-fill me-3"></span>
          <span className="bi bi-person me-3"></span>
          <button data-bs-target="#Cart" data-bs-toggle="modal" className="bi bi-cart4 btn btn-warning position-relative me-2"><span className="badge bg-danger rounded rounded-circle position-absolute">{cartcount}</span></button>
          <div className="modal fade" id="Cart">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="text-primary">Your Cart Items</h2>
                                <button className="btn btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Preview</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartitems.map((item,index)=>
                                                <tr key={item.id}>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    <td> <img src={item.image} width="50" height="50" /> </td>
                                                    {/* <td> <button onClick={()=>{handleRemoveClick(index)}} className="btn btn-danger bi bi-trash"></button> </td> */}
                                                </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                      </div>
                      </div>
         
        </div>
      </header>
      <section className="mt-4 row">
        <nav className="col-2">
          <div>
            <label className="form-label fw-bold">Select Category</label>
          </div>

          <select className="form-select" onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>{category.toUpperCase()}</option>
            ))}
          </select>
        </nav>
        <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'800px'}}>
            {
                products.map(product=>
                    <div className="card p-2 m-2" key={product.id} style={{width:'300px'}}>
                        <img src={product.image} height={300} className="card-img-top"></img>
                        <div className="card-header fw-bold" style={{height:'90px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price:</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd >{product.rating.rate}<span className="bi bi-star-fill text-success ms-1"></span></dd> 
                                <dt>Reviews</dt>
                                <dd>{product.rating.count}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>{handlecartclick(product)}} className="bi bi-cart4 w-100 btn btn-dark">Add to Cart</button>
                        </div>
                </div>
                    
                    )
            }   
        </main>
      </section>
    </div>
  );
}
