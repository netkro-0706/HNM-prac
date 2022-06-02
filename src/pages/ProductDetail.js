import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("id", id);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/netkro-0706/HNM-prac/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data : ", data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col className="product-info">
            <div>{product?.title}</div>
            <div>₩ {product?.price}</div>
            <div>{product?.choice == true ? "Conscious choice" : ""}</div>
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
      </Container>
    </div>
  )
}

export default ProductDetail