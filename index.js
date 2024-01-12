const xValues = [20, 25, 30, 35, 40, 60, 65];
const yValues = [0, 100, 200, 300];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("bar-chart", {
  type: "bar",
  data: {
    labels: [20, 25, 30, 35, 40, 60, 65],
    datasets: [
      {
        label: "Employer: K 73500",
        data: [10000, 20000, 30000, 40000, 50000, 60000, 70000],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
      },
      {
        label: "Employee: K 52000",
        data: [5000, 10000, 15000, 20000, 25000, 30000, 35000],
        backgroundColor: "rgba(23, 162, 184, 0.5)",
      },
      {
        label: "Total Interest: K 244,313",
        data: [5000, 15000, 25000, 35000, 45000, 55000, 65000],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});

var createProgressChart = function (canvasId, label, percentage) {
  var ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ["rgba(23, 162, 184, 1)", "rgba(0, 0, 0, 0.1)"],
          
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: label,
          position: "bottom",
        },
      },
    },
  });
};

createProgressChart("averageProgress", "Average", 78);
createProgressChart("topProgress", "Top", 95);
createProgressChart("meProgress", "Me", 59);
