import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./dataset/weather";

const chartSetting = {
  height: 300,
};

export default function GridDemo() {
  return (
    <div className="flex-1 lg:ml-7 w-full h-full dark:bg-[#484554]">
      <div>
        <div>
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "registrations", valueFormatter, color: "#8576FF" },
            ]}
            sx={{
              [`& .${axisClasses.left} .${axisClasses.line}`]: {
                display: "none", // Hide left axis lines
              },
              [`& .${axisClasses.bottom} .${axisClasses.line}`]: {
                display: "none", // Hide bottom axis lines
              },
              [`& .${chartsGridClasses.line}`]: {
                display: "none", // Hide grid lines
              },
              [`& .${axisClasses.left} .${axisClasses.ticks}`]: {
                display: "none", // Hide left axis ticks
              },
              [`& .${axisClasses.bottom} .${axisClasses.ticks}`]: {
                display: "none", // Hide bottom axis ticks
              },
            }}
            {...chartSetting}
          />
        </div>
      </div>
    </div>
  );
}

//checks
