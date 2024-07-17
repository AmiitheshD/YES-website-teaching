var layout = {
  
  title: {
    text:'Spectrocopy Values',
    font: {
      family: 'Courier New, monospace',
      size: 22,
      color: '#ffffff'
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: '#000000',
  xaxis: {
    title: {
      text: 'Wavelength',
      color: '#ffffff',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#ffffff'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Refelctance (%)',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#ffffff'
      }
    }
  }
};
var data = [
    {
      x: [470,
       525,
       560,
       585,
       600,
       645,
       700,
       735,
       810,
       880,
       940],
      y: [9.577922078,
       8.873239437,
       12.67409471,
       31.18741059,
       47.73722628,
       74.13533835,
       87.82343988,
       88.0910683,
       97.6340694,
       103.2258065,
       105.8479532],
    type: 'line'
      
    }
  ];
data[0].y = data[0].y.map((v, i) => {
  const color = ['red', 'blue', 'green'][i % 3];
  return `${v} <span style="color: ${color};">&#11044;</span>`
})
TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  data,
  layout
);
