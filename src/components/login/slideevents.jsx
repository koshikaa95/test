import axios from "axios";
import { useState, useEffect, useRef } from "react";

export function SlideEvents() {
  const [product, setproduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });
  
  let prodId = useRef(1);
  let prodThread = useRef(null);
  const [status, setstatus] = useState('');

  function LoadProducts(id) {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setproduct(response.data);
      });
  }
  function LoadProductsAuto(){
    console.log('@@')
     const currentItem = prodId.current++;
    LoadProducts(currentItem);

  }
  function handlePrevClick() {
    prodId.current = prodId.current - 1;
    LoadProducts(prodId.current);
  }

  function handleNextClick() {
    prodId.current = prodId.current + 1;
    LoadProducts(prodId.current);
  }

  function handlePlayClick(){
        prodThread.current = setInterval(LoadProductsAuto, 1000);
        setstatus('Slide Show - Played');
  }

  function handlePauseClick(){
    clearInterval(prodThread.current);
    setstatus('Slide Show - Paused');
  }

  useEffect(() => {
    LoadProducts(1);
  },[]);

  //test
  return (
    <div className="container-fluid text-center d-flex justify-content-center">
      <div className="card w-50 mt-4 row">
        <div className="card-header">
          <div className="card-title">{product.title}</div>
          <div className="h3">{status}</div>
        </div>
        
        <div className="card-body row position-relative">
            <div className="badge bg-danger rounded rounded-circle position-absolute" style={{width:'70px', right:'10px'}}>${product.price}</div>
          <div className="col-1 d-flex align-items-center justify-content-center">
          
            <button
              onClick={handlePrevClick}
              className="btn btn-dark bi bi-chevron-left"  disabled={product.id <= 1}
            ></button>
          </div>
          <div className="col-10">
            <img src={product.image} width="400" height="400"></img>
          </div>
          <div className="col-1 d-flex align-items-center justify-content-center">
            <button
              onClick={handleNextClick}
              className="btn btn-dark bi bi-chevron-right"
              
            ></button>
          </div>
        </div>
        <div className="card-footer">
            <button onClick={handlePlayClick} className="btn btn-primary bi bi-play me-2"></button>
            <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause"></button>
        </div>
      </div>
    </div>
  );
}
