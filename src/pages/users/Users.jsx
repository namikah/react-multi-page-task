import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";
import Banner from "../../components/layouts/banner/Banner";

function Users() {

    const [users,setUsers] = useState();

    const getData = useCallback(() => {
        axios
          .get("https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1/users")
          .then((res) => {
            setUsers(res.data.slice(0,4));
          });
      }, []);
    
      useEffect(() => {
        getData();
      }, [getData]);

  return (
    <div className="container mt-3 mb-5">
      <Banner body="/users" title="Users" />
      <div>
      {users?.map((item)=>(
            <Card key={item.id} body color="secondary" outline>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardText>{item.image}</CardText>
            <Button>Button</Button>
          </Card>
      ))}
      </div>
    </div>
  );
}

export default Users;
