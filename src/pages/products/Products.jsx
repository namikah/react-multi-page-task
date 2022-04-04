import React, { useCallback, useEffect, useState } from "react";
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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";
import Banner from "../../components/layouts/banner/Banner";
import { range } from "range";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  const [productsData, setProductsData] = useState();
  const [curPage, setCurPage] = useState(1);
  const history = useHistory();

  const getData = useCallback((page) => {
    axios
      .get(`https://reqres.in/api/products/?page=${page}&per_page=4`)
      .then((res) => {
        setProductsData(res.data);
      });
  }, []);

  useEffect(() => {
    getData(curPage);
  }, [getData, curPage]);

  const handlePageChange = React.useCallback(
    (ev) => {
      const val = ev.target.value;
      history.push(`?page=${val}`);
      setCurPage(val);
    },
    [history]
  );

  const handlePagePrev = React.useCallback(
    (curPage) => {
      const prevPage = curPage - 1;
      if (prevPage >= 1) {
        history.push(`?page=${prevPage}`);
        setCurPage(prevPage);
      }
    },
    [history]
  );

 const maxPageCount = React.useMemo(
    () => !!productsData && productsData.total_pages,
    [productsData]
  );
  
  const handlePageNext = React.useCallback(
    (curPage) => {
      const nextPage = Math.round(curPage) + 1;
      if (nextPage <= maxPageCount) {
        history.push(`?page=${nextPage}`);
        setCurPage(nextPage);
      }
    },
    [history,maxPageCount]
  );

 

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
              <Button style={{ backgroundColor: item.color }}>Button</Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
      <div className="d-flex justify-content-center mt-5">
        <Pagination>
          <PaginationItem>
            <PaginationLink onClick={() => handlePagePrev(curPage)} previous />
          </PaginationItem>
          {!!maxPageCount &&
            range(1, maxPageCount + 1).map((i) => (
              <PaginationItem key={i}>
                <PaginationLink value={i} onClick={handlePageChange}>
                  {i}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem>
            <PaginationLink onClick={() => handlePageNext(curPage)} next />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
}

export default Products;
