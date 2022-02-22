import React, { useState } from "react";
import {onIncrement , onDecrement} from "./actions";
import {useSelector , useDispatch} from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.conter);
  const date = useSelector((state) => state.date);
  const actionDate = useSelector((state) => state.actionDate);

  const dispatch = useDispatch();
  
  return (
    <div>
      <p>
        Counter : {counter}{" "}
        <button
        onClick={() => {dispatch(onIncrement())}}
        >
          +
        </button>{" "}
        <button
        onClick={() => {dispatch(onDecrement())}}
        >
          -
        </button>
      </p>
      Date: {date}{" "}
      Action Date: {actionDate}
    </div>
  );
}
