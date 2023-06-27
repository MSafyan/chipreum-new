import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  lightColor: string;
  darkColor: string;
  options?: ApexOptions;
};

const RadialBar = ({ lightColor, darkColor, options }: PropsType) => {
  const { theme, setTheme } = useTheme();

  let fillColors = [];
  let outerFillColor = "#EFEFEF";

  theme !== "light" ? (fillColors = [darkColor]) : (fillColors = [lightColor]);
  theme === "dark" && (outerFillColor = "#3A3C3E");

  const defaultOptions: ApexOptions = {
    chart: {
      height: 110,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: outerFillColor,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [""],
    fill: {
      colors: fillColors,
    },
  };

  const chartOptions = options ?? defaultOptions;

  const series = [59];

  return (
    <ApexCharts
      type="radialBar"
      options={chartOptions}
      series={series}
      height={110}
    />
  );
};

export default RadialBar;
