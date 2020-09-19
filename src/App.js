import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-apexcharts';
import axios from 'axios';
import moment from 'moment';
import {Typography} from '@material-ui/core';

function App() {
  const [chartData,setChartData] = useState([]);
  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/harian")
    .then(res => {
      setChartData(res.data.data.filter(data => data.jumlahKasusKumulatif !== null))
    })
    .catch(err => alert(err.response.data));
  }, []);

  const options = {
    colors: ["#E74C3C","#3498DB"],
    stroke: {
      curve: 'straight',
      width: 1.5,
    },
    legend: {
      labels: {
        colors: "#fff"
      }
    },
    chart: {
      type: 'area',
      stacked: false,
        height: 350,
      zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
      },
      toolbar: {
          autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      title: {
        text: 'Jumlah',
        style: {
          color: "#fff"
        }
      },
      labels: {
        show: true,
        style: {
          colors: "#fff"
        }
      },
      axisTicks: {
        color: "#fff"
      }
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.map(res => res.tanggal),
      labels: {
        formatter: function (value, timestamp){
          return moment(new Date(value)).format("DD MMM") // The formatter function overrides format property
        }, 
        style: {
          colors: "#fff"
        }
      }
    },
  }
  
  const series = [
    {
      name: 'Jumlah Kasus Baru',
      data: chartData.map(res => res.jumlahKasusBaruperHari)
    },
    {
      name: 'Jumlah Sembuh',
      data: chartData.map(res => res.jumlahKasusSembuhperHari)
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Typography variant="h5" style={{color:"#fff"}}>Perkembangan COVID-19 Indonesia</Typography>
          <Chart
            options={options}
            series={series}
            type="area"
            width="800px"
          />
          <Typography variant="body2" style={{color:"#fff",marginTop:"20px"}}>&#169; VDP</Typography>
        </div>
      </header>
    </div>
  );
}

export default App;
