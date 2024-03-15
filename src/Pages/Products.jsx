import Cards from '../Components/Cards'
import { getData } from '../api'
import { useEffect, useState } from 'react'

export default function Products() {

  const [products, setProducts] = useState([])

  async function getProducts() {
    const data = await getData()
    setProducts(data)
  }

  useEffect(() => {
    getProducts();
  }, [])




  return (
    <>
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
