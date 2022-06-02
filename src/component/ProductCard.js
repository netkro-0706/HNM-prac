import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {

    const navigate = useNavigate();
    
    const showDetail=()=>{
        navigate(`/product/${item.id}`);
    }

    return (
        <div className="card-wrap" onClick={showDetail}>
            <img className="card-img" src={item?.img} />
            <div>{item?.choice ? "Conscious choice" : <br />}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new ? "신제품" : <br />}</div>
        </div>
    )
}

export default ProductCard