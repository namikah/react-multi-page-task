import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Button, ButtonGroup, Label } from "reactstrap";
import { todos } from "../../API/services/todosService";
import "./todos.css";

function Todos() {
  const [state, setState] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    todos.getTodos().then((res) => {
      setState(res.data);
    });
  }, []);

  const todosMemo = useMemo(() => {
    return state?.slice(0, 10);
  }, [state]);

  return (
    <div className="row mt-5">
      <div className="title">
        <h1 className="mb-5">TODOS</h1>
        {todosMemo?.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))}
        <ButtonGroup aria-label="Basic example" className="mt-3 gap-3">
          <Button
            onClick={() =>
              counter > 0 ? setCounter(counter - 1) : setCounter(counter)
            }
            variant="secondary"
          >
            -
          </Button>
          <Label variant="secondary">{counter}</Label>
          <Button onClick={() => setCounter(counter + 1)} variant="secondary">
            +
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Todos;
