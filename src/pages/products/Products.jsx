import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./products.css";
import { INITIAL_ASYNC_VALUES } from "../../Constants/consts";
import { createBrowserHistory } from "history";
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
import axios from "axios";
import Banner from "../../components/layouts/banner/Banner";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  const [productsData, setProductsData] = useState();
  const { push } = useHistory();
  const {pathname} = useLocation();


  const getData = useCallback(() => {
    axios
      .get("https://reqres.in/api/products/?page=1&per_page=4")
      .then((res) => {
        setProductsData(res.data);
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-3 mb-5">
      <Banner body="/products" title="Products" />
      <CardGroup className="gap-3">
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
              <Button
                style={{ backgroundColor: item.color }}
                // onClick={() => {
                //   push(pathname + "/?page=2&per_page=4");
                // }}
              >
                Button
              </Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Products;
