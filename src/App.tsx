import { useState } from "react";
import styled, {keyframes} from "styled-components";


function App() {
  const [value, setValue] =useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) =>{
    const {
      currentTarget: {value},
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  `;
  return (
  <Container>
    <form onSubmit={onSubmit}>
    <input 
    value={value}
    onChange={onChange}
    type="text" 
    placeholder="username"
    />
    <button>Log in</button>
    </form>
  </Container>
  );
}

export default App;
