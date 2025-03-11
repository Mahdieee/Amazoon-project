import { Routes, Route, Link } from 'react-router-dom';
import dollar from '../components/assets/dollar.svg'
import star from   '../components/assets/star.png'
// import Products from '../pages/Products';
function Card ({ product }) {
  const { thumb, name, price1, price2, price, description, rate } = product;
  return (
    <div className="card">
      <img className="img-cls" src={thumb} alt="" />
      <p className="name">{name}</p><hr />
      <p className="price1"><img src={dollar} alt="dollar" />{price1}<span className="price2">{price2}</span></p>
      <p className="price"><img className='dollar' src={dollar} alt="dollar" />{price}</p>
      <p className="des-cls">{description}</p>
      <container className='star-con'>
      <p className='star-rate'><img className='star-img' src={star} alt="star" />{rate}</p>
      </container>
<ul>
  <li className='products-link'>
    <Link className='see-more' to={`/Products/${product.id}`}>see more ...</Link>
  </li>
</ul>
    </div>
  );
}

export default Card;