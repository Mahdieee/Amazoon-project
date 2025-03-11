import React from 'react'
import Card from "../components/Card"
import products from "../components/constants/productsData";
function Home() {
    return (
        <div className="products-list" >
            <p className='p-products'>You are on amazon.com You can also shop on Amazon Iran for millions of products with fast local delivery. Click here to go to
                <span className='amazon'> amazon.de </span></p>
            {products?.map((product) => (
                <Card key={product.id} product={product} />
                
            ))} 
        </div>

    )
}

export default Home;