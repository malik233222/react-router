import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getDataDetail } from '../api';
export default function Detail() {

    const [product, setProduct] = useState({})

    const { id } = useParams();
    

    async function getProduct() {
        const data = await getDataDetail(id)
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <img className='w-[400px]' src={product.image} alt="" />
            <p>{product.description}</p>
        </div>
    )

}
