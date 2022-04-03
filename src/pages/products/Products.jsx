import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./products.css";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Banner from "../../components/layouts/banner/Banner";
import { productService } from "../../API/services/productService";
import { INITIAL_ASYNC_VALUES } from "../../Constants/consts";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import axios from "axios";


function Products() {
  const [productsData, setProductsData]=useState()

    const getData = useCallback(()=>{
      axios.get("https://reqres.in/api/products/?page=1&per_page=4").then((res)=>{
        setProductsData(res.data)
      })
    },[])

    useEffect(()=>{
      getData();
    },[])

  console.log(productsData?.data);

  return (
    <div className="container mt-3">
      <Banner body="/products" title="Products" />
      <CardGroup>
        {productsData?.data.map((item) => (
          <Card key={item.id}>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Year: {item.year}
              </CardSubtitle>
              <CardText>Pantom Value: {item.pantone_value}</CardText>
              <Button style={{ backgroundColor: item.color }}>Button</Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Products;
