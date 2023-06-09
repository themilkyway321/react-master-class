import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId: string;
  
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: String;
  high: String;
  low: String;
  close: String;
  volume: String;
  market_cap: number;
}

function Chart({coinId}: ChartProps){
  const isDark = useRecoilValue(isDarkAtom);
  const {isLoading, data} =useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId)
  );
  return (
    <>
  
  <div>{isLoading ? "Loading chart..." : 
  <><ApexCharts type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => Number(price.close)) as number[]
            },
          ]}
          options={{
            theme: {
              mode: isDark? "dark": "light"
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false
              },
              background: "transparent",
            },
            grid: {
              show: false
            },
            yaxis: {
              show: false
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close)
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            fill: {
              type: "gradient", gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
          }} />
         
          
          
          </>

}</div>

</>
)
 
}
export default Chart;