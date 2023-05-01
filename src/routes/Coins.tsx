import { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: white;
  color: ${props => props.theme.bgColor};
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
  color:${props => props.theme.accentColor}
`;


interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
};

function Coins() {
  const [coins, SetCoins]= useState<CoinInterface[]>([]);
  return (
    <Contatiner>
      <Header>
          <Title>Coins</Title>
      </Header>
      <CoinsList>
       {coins.map(coin => 
        <Coin key={coin.id}>
        <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
        </Coin>)}
      </CoinsList>
    </Contatiner>
  );
}
export default Coins;

function useState(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
