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

Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Most Tweeted Consistuent Counts'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Companies',
    colorByPoint: true,
    data: [{
      name: 'Deutsche Bank',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Adidas',
      y: 11.84
    }, {
      name: 'BMW',
      y: 10.85
    }, {
      name: 'Volkswagen',
      y: 4.67
    }, {
      name: 'Siemens',
      y: 4.18
    }, {
      name: 'Bayer',
      y: 1.64
    }, {
      name: 'Continental',
      y: 1.6
    }, {
      name: 'DAX',
      y: 1.2
    }, {
      name: 'EON',
      y: 2.61
    }]
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