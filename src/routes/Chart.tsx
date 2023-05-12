import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

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
  const {isLoading, data} =useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),{
    refetchInterval:10000,
  }
  );
  return <div>{isLoading ? "Loading chart..." : 
  <ApexCharts type="line"
  series={[
    {
      name: "price",
      data: data?.map((price) => Number(price.close)) as number[]
    },
  ]} 
  options={{
    theme:{
     mode:"dark" 
    },
    chart:{
    height:300,
    width:500,
    toolbar:{
      show:false
    },
    background:"transparent",
  },
  grid:{
    show:false
  },
  yaxis: {
    show:false
  },
xaxis: {
  axisBorder:{show:false},
  axisTicks:{show:false},
  labels:{show:false},
  type:"datetime",
  categories:data?.map((price) => price.time_close)
},
  stroke:{
    curve:"smooth",
    width:4,
  },
  fill:{
    type:"gradient", gradient:{gradientToColors: ["#0be881"],stops: [0,100]},
  },
  colors:["#0fbcf9"],
  tooltip:{
    x:{
      // formatter:
    }
  }
}} />}</div>
 
}
export default Chart;