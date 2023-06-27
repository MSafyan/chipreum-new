import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  options?: ApexOptions;
};

const MultipleRadialbars = ({ options }: PropsType) => {
  const { theme, setTheme } = useTheme();

  let fillColors = [];
  let outerFillColor = "#EFEFEF";

  theme !== "light"
    ? (fillColors = ["#448AFF", "#E34234", "#3BDC68"])
    : (fillColors = ["#448AFF", "#E34234", "#0B6725"]);

  theme === "dark" && (outerFillColor = "#3A3C3E");

  const series = [71, 55, 67];

  const defaultOptions: ApexOptions = {
    chart: {
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          margin: 10,
          background: outerFillColor,
        },
        dataLabels: {
          name: {
            fontSize: "18px",
          },
          value: {
            color: "#6F767E",
            fontSize: "18px",
          },
          total: {
            show: true,
            label: "USD",
            color: "#448AFF",
            formatter: function (): any {
              return "82%";
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["BTC", "DASH", "NANO"],
    fill: {
      colors: fillColors,
    },
  };

  const chartOptions = options ?? defaultOptions;

  return (
    <ApexCharts
      type="radialBar"
      options={chartOptions}
      series={series}
      height={350}
    />
  );
};

export default MultipleRadialbars;
