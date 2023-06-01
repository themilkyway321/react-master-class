import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
interface Params {
  coinId:string;
}
const Contatiner = styled.div`
padding:0px 20px;
margin: 0 auto;
max-width: 480px;
`;
const Header = styled.header`
position:relative;
span {
  color:${props => props.theme.accentColor};
  position:absolute;
  left: 0;
  font-size: 30px;
  cursor: pointer;
}
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;
const  Title = styled.h1`
  color:${props => props.theme.accentColor};
  font-size: 40px;
`;
const Loader = styled.span`
  font-size: 30px;
  text-align: center;
`;

const Tabs = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
  margin: 25px 0;
  
`;
const Tab = styled.span<{ isActive: boolean }>`
  flex: 1;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  padding: 8px 5px;
  a {
    display: block;
  }
  color: ${(props) =>
  props.isActive ? props.theme.accentColor : props.theme.textColor
  } ;
`;

interface RouteState {
  name: string;
};

interface InfoData {
  id:string;
  name:string;
  symbol:string;
  rank:number;
  is_new: boolean;
  is_active: boolean;
  type:string;
  logo:string;
  description:string;
  message:string;
  open_source: boolean;
  started_at:string;
  development_status:string;
  hardware_wallet: boolean;
  proof_type:string;
  org_structure:string;
  hash_algorithm:string;
  first_data_at:string;
  last_data_at:string;
};
interface PriceData {
  id:string;
  name:string;
  symbol:string;
  rank:number;
  circulating_supply:number;
  total_supply:number;
  max_supply:number;
  beta_value:number;
  first_data_at:string;
  last_updated:string;
  quotes:{
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
};


const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-weight: 400;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
function Coin() {
  const { coinId } = useParams<Params>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
  const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));
/*   const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceData, setPriceData] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceData(priceData);
      setLoading(false);
    })();
  }, []); */
  const loading = infoLoading || tickersLoading;
  return(
  <Contatiner>
    
    <Helmet>
    <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
    </Helmet>
  <Header>
  {/* <span><Link to={`/`}><FontAwesomeIcon icon={faArrowLeft} /></Link></span> */}
    <Title>{state?.name ? state.name : loading? "Loading...." : infoData?.name}</Title>
  </Header>
  
  {loading ? (<Loader>Loading....</Loader>):(
<>
   <Overview>
      <OverviewItem>
        <span>RANK:</span>
        <span>{infoData?.rank}</span>
      </OverviewItem>
      <OverviewItem>
      <span>SYMBOL:</span>
      <span>{infoData?.symbol}</span>
    </OverviewItem>
    <OverviewItem>
      <span>Price:</span>
      <span>${tickersData?.quotes.USD.price}</span>
    </OverviewItem>
    </Overview>
    <Description>{infoData?.description}</Description>
    <Overview>
      <OverviewItem>
        <span>Total Suply:</span>
        <span>{tickersData?.total_supply}</span>
      </OverviewItem>
      <OverviewItem>
        <span>Max Supply:</span>
        <span>{tickersData?.max_supply}</span>
      </OverviewItem>
    </Overview>
    <Tabs>
      <Tab isActive={chartMatch !== null}><Link to={`/${coinId}/chart`}>Chart</Link></Tab>
      <Tab isActive={priceMatch !== null}> <Link to={`/${coinId}/price`}>Price</Link></Tab>
    </Tabs>
    <Switch>
      <Route path={`/:coinId/price`}>
        <Price />
      </Route>
      <Route path={`/:coinId/chart`}>
        
        <Chart coinId={coinId} />
      </Route>
    </Switch>
</>

 
  )}
  
 </Contatiner>
  );
}
export default Coin; 