import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

Highcharts.chart("main", {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fruit Consumption'
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
    title: {
      text: 'Fruit eaten'
    }
  },
  series: [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }]
});

export default class Home extends React.Component<any, any> {

  render() {
    return (
      <div>
        {myChart}
      </div>
    )
  }
}