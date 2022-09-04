import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, FILTER_TODO } from "../Constants/Constants";

function AddTask() {
  const todos = useSelector((intialState) => intialState);
  const [inputDescription, setInputDescription] = useState("");
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <InputGroup
            className="mb-3"
            style={{ width: "100%" }}
            onChange={(e) => setInputDescription(e.target.value)}
          >
            <Form.Control
              placeholder="Task to add"
              aria-label="Task to add"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col lg={2}>
          <Button
            variant="success"
            onClick={() =>
              dispatch({
                type: FILTER_TODO,
                payload: true,
              })
            }
            style={{ marginRight: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: FILTER_TODO,
                payload: false,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Button>
        </Col>
        <Col lg={2}>
          <Button
            variant="primary"
            style={{ width: "100%", marginLeft: "12px" }}
            onClick={() => {
              if (inputDescription.trim() !== "")
                dispatch({
                  type: ADD_TODO,
                  payload: {
                    id: todos[todos.length - 1].id + 1,
                    description: inputDescription,
                    isDone: false,
                  },
                });
            }}
          >
            Add Task
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default AddTask;
