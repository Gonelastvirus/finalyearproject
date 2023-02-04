
var dataObj={
  type: 'line',
  data: {
      labels: [1,2,3,4,5,6],
      datasets: [{
          label: 'Node1',
          borderColor:'red',
          data: [0,50,45,65,80,100],
      },
      {
          label: 'Node 2',
          borderColor:'blue',
          data: [0,80,65,90,60,80],
      },
      {
          label: 'Node 3',
          borderColor:'green',
          data: [0,35,65,35,40,60],
      },
      {
          label: 'Node 4',
          borderColor:'yellow',
          data: [0,40,65,70,10,100],
      },
      {
          label: 'Node 5',
          borderColor:'black',
          data: [0,20,60,80,70,110],
      }
      ]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
            }
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  window.myLine = new Chart(ctx,dataObj );



  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
    });
  });
  


  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  

  /* Progress Chart*/
  var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
  
    series: [89],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Performance"]
  };
  
  var chart = new ApexCharts(document.querySelector("#progress_chart"), options);
  
  chart.render();
  /* Progress Chart */




  /* Login */
  const loginButton = document.querySelector("#loginButton");
  const loginModal = document.querySelector("#loginModal");

  loginButton.addEventListener("click", function(){
    $("#loginModal").modal("show");
  });
  /* Login */