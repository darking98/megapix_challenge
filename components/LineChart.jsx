import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'
import Annotation from 'chartjs-plugin-annotation'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
const LineChart = ({ customOptions, labels, data }) => {
  /* Se necesitan registrar los plugins para poder usarlos */
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Annotation
  )
  /* Estado para agregar la línea vertical luego de que el usuario clickea en alguno de los puntos del gráfico */
  const [clickedDot, setClickedDot] = useState(null)
  const options = {
    ...customOptions,
    responsive: true,
    maintainAspectRatio: false,
    onClick: (ev) => {
      if (ev.chart._active[0]?.index) {
        const currentIdx = ev.chart._active[0].index
        const todayMaxY = ev.chart._metasets[0].data[currentIdx].$context.raw
        const averageMaxY = ev.chart._metasets[1].data[currentIdx].$context.raw
        /* Setea en un objeto el índice del punto en el gráfico y la altura máxima que hay en ese índice */
        setClickedDot({
          idx: currentIdx,
          yMax: todayMaxY > averageMaxY ? todayMaxY : averageMaxY
        })
      }
    },
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          /* Se muestran los labels de el primer récord y el último (1 Ene - 15 Ene) */
          callback: (_value, idx, values) =>
            idx === values.length - 1 || idx === 0 ? labels[idx] : null
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      labels: {
        display: false
      },
      annotation: {
        annotations: {
          /* Acá se dibuja la línea en el gráfico con los valores que se obtuvieron haciendo click en el punto deseado */
          line1: () => {
            return {
              type: 'line',
              xMin: clickedDot !== null && labels[clickedDot.idx],
              xMax: clickedDot !== null && labels[clickedDot.idx],
              yMax: clickedDot !== null && clickedDot.yMax,
              borderColor: '#62FEE2',
              borderWidth: 2
            }
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#323232',
        bodyFontSize: '12px',
        xAlign: 'center',
        yAlign: 'top',
        displayColors: false,
        bodyAlign: 'flex',
        position:'nearest',
        bodyFont: {
          size: 14
        },
        callbacks: {
          title: () => null,
          label: (tooltipItems, data) => {
            return `${tooltipItems.dataset.label} ${tooltipItems.raw}`
          }
        }
      }
    }
  }
  return (
    <Box>
      <Line data={data} options={options} />
    </Box>
  )
}

export default LineChart
