import { useEffect, useState } from 'react';
import { getDataByCategory } from '../api'
import Cards from '../Components/Cards';

export default function Home() {

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const data = await getDataByCategory();
    setProducts(data)
  }

  useEffect(() => {
    getProducts();
  }, [])


  

  return (
    <>
      <h2 className='text-center'>Products</h2>
      <div className='flex flex-wrap gap-5'>
        {
          products.map(item => (
            <Cards key={item.id} items={item} />
          ))
        }
      </div>

    </>
  )
}
