import React from 'react'
import { useParams } from 'react-router-dom';

function Products() {
  const { id } = useParams();
  console.log(id);
  return <h2>{id}</h2>
}

export default Products;