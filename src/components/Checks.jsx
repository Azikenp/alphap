import { BarChart } from "@mui/x-charts/BarChart";

const Chart = () => {
  return (
    <div className="flex-1 px-5 w-full h-full">
      <div>
        <h3 className="text-[#000000] font-medium text-[17px] leading-3">
          Event Registrations per month
        </h3>
        <div>
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: [
                  "Jn",
                  "Fb",
                  "Mr",
                  "Ap",
                  "Ma",
                  "Ju",
                  "Jl",
                  "Au",
                  "Se",
                  "Oc",
                  "No",
                  "De",
                ],
                scaleType: "band",
                
              },
            ]}
            series={[
              {
                data: [
                  650, 950, 780, 420, 1000, 580, 860, 380, 850, 650, 980, 600,
                ],
                color: "#8576FF", 
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
