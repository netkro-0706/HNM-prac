import React, { useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetail = () => {

  let { id } = useParams();
  let loading = useSelector((state)=>state.loading.loading);
  const product = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();
  console.log("id", id);

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        {loading === true
          ? (
            <div className='loader-wrap'>
              <ClipLoader color="#dd0000" loading={loading} size={150} />
            </div>
          ) : (
            <Row>
              <Col className="product-img">
                <img src={product?.img} alt="cloth" />
              </Col>
              <Col className="product-info">
                <div>{product?.title}</div>
                <div>₩ {product?.price}</div>
                <div>{product?.choice === true ? "Conscious choice" : ""}</div>
                <div>
                  <select>
                    {product?.size.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Button variant="dark" type="submit">
                    추가
                  </Button>
                </div>
              </Col>
            </Row>
          )
        }


      </Container>
    </div>
  )
}

export default ProductDetail;