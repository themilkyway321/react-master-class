import { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Contatiner = styled.div`
padding:0px 20px;
margin: 0 auto;
max-width: 480px;
`;
const Header = styled.header`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${props => props.theme.cardBgcolor};
  color: ${props => props.theme.textColor};
  border: 1px solid white;
  margin-bottom:10px;
  border-radius: 15px;

  a{
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a{
      color: ${props => props.theme.accentColor}
    }
  }
`;

const  Title = styled.h1`
  color:${props => props.theme.accentColor};
  font-size: 40px;
`;


interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
};
const Loader = styled.span`
  font-size: 30px;
  text-align: center;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const CoinWrapper = styled.div`
  display: flex;
  align-items:center;
`;

interface ICoinsProps {
  
}
function Coins() {
  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
  
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = ()=>setDarkAtom((prev)=>!prev);
 /*  const [coins, SetCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    (async() => {
     const response = await fetch("https://api.coinpaprika.com/v1/coins");
     const json = await response.json();
     SetCoins(json.slice(0,100));
     setLoading(false);
    })();    
  },[]); */

  return (
    <Contatiner>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
          <Title>Coins</Title>
          <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? (<Loader>Loading....</Loader>) : (<CoinsList>
       {data?.slice(0,100).map(coin => 
        <Coin key={coin.id}>
        <Link to={{
          pathname: `${coin.id}`,
          state: { name: coin.name }
        }}>
          <CoinWrapper>
            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
            {coin.name} &rarr;
          </CoinWrapper>
          
          </Link>
        </Coin>)}
      </CoinsList>)}
    </Contatiner>
  );
}
export default Coins;

