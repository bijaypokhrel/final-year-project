import React from 'react';
import data from './data';


function App() {
  return (
       <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">eBajar</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
        <div>
            <div className="row center">
            {
              data.products.map(product => (
                <div key={product._id} className="card">
                    <a className="medium" href={`/product/${product._id}`}><img src={product.image} alt={product.name} width="300" height="450"/>
                    </a>
                    <div className="card-body">
                      <a className="medium" href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                      </a>
                        <div className="rating">
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star-half-o"></i>
                            </span>
                            <span>
                                <i className="fa fa-star-o"></i>
                            </span>
                        </div>
                        <div className="price">
                            Rs{product.price}
                        </div>
                    </div>
                </div>
              ))
            }
                
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
