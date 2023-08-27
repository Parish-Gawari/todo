/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";

const List = () => {
  return (
    <>
      {/* <div
        className="container d-flex  flex-column flex-sm-row  mt-2 border border-primary-subtle rounded align-items-center"
        style={{ width: "92%" }}
      >
        <div
          className="container d-flex justify-content-evenly align-items-center "
          style={{ height: "4rem" }}
        >
          <span>
            Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
          <span>Due Date: 12/12/24</span>
          <input type="checkbox" />
        </div>
        <div
          className="container d-flex justify-content-evenly align-items-center "
          style={{ height: "4rem" }}
        >
          <Button
            variant="transparent"
            className="border border-info-subtle rounded"
          >
            Edit
          </Button>
          <Button
            variant="transparent"
            className="border border-danger-subtle rounded"
          >
            Delete
          </Button>
        </div>
      </div> */}
      <div className="container d-flex flex-column flex-md-row gap-2">
        <div className="border border-primary-subtle rounded p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt
          autem nostrum atque enim alias eligendi totam odio voluptatem soluta
          modi aperiam, velit veniam.
        </div>
        <div className="border border-primary-subtle rounded p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt
          autem nostrum atque enim alias eligendi totam odio voluptatem soluta
          modi aperiam, velit veniam.
        </div>
        <div className="border border-primary-subtle rounded p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt
          autem nostrum atque enim alias eligendi totam odio voluptatem soluta
          modi aperiam, velit veniam.
        </div>
      </div>
    </>
  );
};

export default List;
