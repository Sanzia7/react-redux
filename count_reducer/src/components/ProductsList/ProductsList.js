import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import s from './ProductsList.module.css'


function ProductsList() {
   const products = useSelector(state => state.products)
   
   return (
      <>
         <h1>Products:</h1>
         <div className={s.container}>   
            {
               products.map(elem =>
                  <ProductItem
                     key={elem.id}
                     id={elem.id}
                     title={elem.title}
                     count={elem.count}
                  />)
            }
         </div>
      </>
   )
}

export default ProductsList