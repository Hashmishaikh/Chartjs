import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Input.css";

const Inputs = () => {
  const [months, setMonths] = useState([]);
  const [taskss,setTaskss] = useState([]);
  const [inputs, setInputs] = useState({
    month: "",
    task: "",
  });
  const [items, setItems] = useState([]);
 
  const data = {
    labels: months,
    // "Jan",
    // "Feb",
    // "March",
    // "Apr",
    // "May",
    // "June",
    // "July",
    // "Aug",
    // "Sep",
    // "Oct",
    // "Nov",
    // "Dec",
    // ],

    datasets: [
      {
        label: "Task Completed by Employees",
        data: taskss,
        // [12, 19, 3, 5, 2, 3, 6, 10, 13, 16, 9, 8],

        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const change = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setInputs((prev) => {
      if (name === "month") {
        return {
          month: value,
          task: prev.task,
        };
      } else if (name === "task") {
        return {
          task: value,
          month: prev.month,
        };
      }
    });
  };
  const Clickevent = (e) => {
    //   e.preventDefault();
    setItems((olditems) => {
      return [...olditems, inputs];
    });
    setMonths(items.map((resl) => (
     resl.month
    )));
    setTaskss(items.map((results) => (
      results.task
    )))
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          name="month"
          value={inputs.month}
          placeholder="Enter the Month"
          onChange={change}
        />
        <input
          type="number"
          name="task"
          value={inputs.task}
          placeholder="Enter the number of task"
          onChange={change}
        />
        <button className="btn" onClick={Clickevent}>
          Enter
        </button>
      </div>
      <br />

      {items.map((result) => (
        <div>
          <h2>
            {result.month} : {result.task}
          </h2>
        
        </div>
      ))}
      <div className="container">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default Inputs;
