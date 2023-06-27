import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  options?: ApexOptions;
};

const PriceChart = ({ options }: PropsType) => {
  const responsive = useMediaQuery({
    query: "(min-width: 992px)",
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

  const defaultOptions: ApexOptions = {
    fill: {
      type: "gradient",
      colors: fillColors,
      gradient: {
        shade: theme,
        shadeIntensity: 1,
        opacityFrom: 4,
        opacityTo: 0.4,
        //   stops: [20, 100],
        stops: [0, 100],
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
      categories: ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat"],
      offsetX: -10,
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
      min: 300,
      max: 1500,
      labels: {
        formatter: function (value: any) {
          return `$${value}`;
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(111, 118, 126, 0.1)",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        //   right: 30,
        bottom: 0,
        left: 20,
      },
    },
    markers: {
      // size: 7,
      ...marks,
      strokeWidth: 3.48,
      strokeOpacity: 1,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      enabled: true,
      style: {
        //   fontSize: "24px",
        fontFamily: undefined,
      },
      x: {
        show: true,
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

  const asd = defaultOptions ?? options;

  const series = [
    {
      name: "",
      data: [500, 1250, 490, 870, 700, 1410],
    },
  ];

  return (
    <ApexCharts
      type="area"
      options={asd}
      series={series}
      // options={settings.options}
      // series={settings.series}
      height={responsive ? 331 : 282}
    />
  );
};

export default PriceChart;
