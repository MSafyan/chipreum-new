import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  options?: ApexOptions;
};

const AreaChart = ({ options }: PropsType) => {
  const responsive = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const { theme, setTheme } = useTheme();

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  let fillColors = [];
  let strokeColors = [];
  let marks = { colors: "#fff", strokeColors: "#8E59FF" };

  theme === "light"
    ? (marks = { colors: "#fff", strokeColors: "#8E59FF" })
    : (marks = { colors: "#fff", strokeColors: "#448aff" });

  theme === "light" ? (fillColors = ["#8E59FF"]) : (fillColors = ["#448aff"]);
  theme === "light"
    ? (strokeColors = ["#8E59FF"])
    : (strokeColors = ["#448aff"]);

  // const settings = {
  const series = [
    {
      name: "",
      data: [2, 1, 2, 2.6, 2, 3.8],
    },
  ];
  const defaultOptions: ApexOptions = {
    fill: {
      type: "gradient",
      colors: fillColors,
      gradient: {
        shade: theme,
        shadeIntensity: 1,
        opacityFrom: 4,
        opacityTo: 0.9,
        stops: [20, 100],
      },
    },
    chart: {
      background: theme === "light" ? "#fff" : "#1a1d1f",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: strokeColors,
      width: 3.5,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      min: 0,
      max: 4,
      labels: {
        formatter: function (value: any) {
          return `${value}M`;
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(111, 118, 126, 0.1)",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 30,
        bottom: 0,
        left: 20,
      },
    },
    markers: {
      size: 7,
      ...marks,
      strokeWidth: 3.48,
      strokeOpacity: 1,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      enabled: true,
      // theme: false,
      style: {
        //   fontSize: "24px",
        fontFamily: undefined,
      },
      x: {
        show: true,
        //   format: "MMMM",
        formatter: function (value: any, timestamp: any) {
          return "February 5, 2023 1:22 PM";
        },
      },
      y: [
        {
          formatter: undefined,
          title: {
            formatter: (val: string) => `${val}`,
          },
        },
      ],
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: false,
      },
    },
  };
  // };
  const chartOptions = options ?? defaultOptions;

  return (
    <ApexCharts
      type="area"
      options={chartOptions}
      series={series}
      height={responsive ? 582 : 282}
      //   height={282}
    />
  );
};

export default AreaChart;
