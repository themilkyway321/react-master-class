## styled-components 기본 사용방법

리액트에서 스타일을 주는 3가지 방법을 배웠었지. 
https://github.com/themilkyway321/react-for-beginners/tree/main/react-basic-study#react-%EC%8A%A4%ED%83%80%EC%9D%BC

styled-components로 위 3가지보다 조금 더 간단하게 스타일을 줄 수 있다. 


styled-components로 스타일을 간단하게 적용하기 
<BoxOne></BoxOne>

```
<div style={{backgroundColor:'teal',width:100, height:100}}></div>
```
위와 같이 적용할 것을 


```
const BoxOne = styled.div`background-color:teal;
width:100px;
height:100px;`;  
```
이렇게 간단한게 쓸 수 있음.
styled.div``; 백틱을 써야함. 

```
import styled from "styled-components";

const Father = styled.div`
display: flex;
`;
const BoxOne = styled.div`
background-color:teal;
width:100px;
height:100px;
`;
const Text = styled.span`
color:#fff;
`;
function App() {
  return (
  <Father>
    <BoxOne></BoxOne>
    {/* <div style={{backgroundColor:'teal',width:100, height:100}}></div> */}
    <BoxOne><Text>Hello</Text></BoxOne>
  </Father>);
}

export default App;
```
## styled-components - props를 통해 컴포넌트를 구성하는 방법 
Box랑 동일한 스타일을 가졌는데, 배경색깔만 다르게 하고 싶을 때
props 함수를 실행시켜서, 배경색만 간단하게 바꿀 수 있다. 
```
import styled from "styled-components";

const Father = styled.div`
display: flex;
`;
const Box = styled.div`
background-color:${(props) => props.bgColor};
width:100px;
height:100px;
`;
const Text = styled.span`
color:#fff;
`;
function App() {
  return (
  <Father>
    <Box bgColor="teal" />
    <Box bgColor="tomato" />
  </Father>);
}

export default App;
```


## styled-components - 컴포넌트 확장하기 

Box랑 동일한 스타일을 가졌는데, 박스가 아닌 원모양을 만들고 싶을 때 
styled(Box)로 Box의 모든 스타일을 가져올 수 있다. 

```
import styled from "styled-components";

const Father = styled.div`
display: flex;
`;
const Box = styled.div`
background-color:${(props) => props.bgColor};
width:100px;
height:100px;
`;

const Circle = styled(Box)`

border-radius: 50px;
`;
const Text = styled.span`
color:#fff;
`;
function App() {
  return (
  <Father>
    <Box bgColor="teal" />
    {/* <div style={{backgroundColor:'teal',width:100, height:100}}></div> */}
    <Box bgColor="tomato" />
    <Circle bgColor="gray" />
  </Father>);
}

export default App;
```

## styled-components - 태그 교체하기 

아래 코드에서 Father 컴포넌트 div 대신 header 태그로 교체하고 싶으면, as="header"를 주면 된다. 

```
import styled from "styled-components";

const Father = styled.div`
display: flex;
`;
const Box = styled.div`
background-color:${(props) => props.bgColor};
width:100px;
height:100px;
`;

const Circle = styled(Box)`

border-radius: 50px;
`;
const Text = styled.span`
color:#fff;
`;
function App() {
  return (
  <Father as="header">
    <Box bgColor="teal" />
    {/* <div style={{backgroundColor:'teal',width:100, height:100}}></div> */}
    <Box bgColor="tomato" />
    <Circle bgColor="gray" />
  </Father>);
}

export default App;
```


## styled-components - 속성도 공통적으로 적용되도록 가능. 

아래 코드 처럼 쓰면,   <Input required, maxLength:10 />를 여러번 쓰는 것보다 <Input />만 여러번 주면 된다. 

```
import styled from "styled-components";

const Father = styled.div`
display: flex;
`;

const Btn = styled.button`
color: #fff;
background-color: tomato;
border: none;
border-radius: 5px;
`;


const Box = styled.div`
background-color:${(props) => props.bgColor};
width:100px;
height:100px;
`;

const Input = styled.input.attrs({required: true, maxLength:10 })`
background-color:tomato;
`;


const Text = styled.span`
color:#fff;
`;
function App() {
  return (
  <Father>
  
   <Input />
   <Input />
   <Input />
   <Input />
  </Father>);
}

export default App;
```


## styled-components - 애니메이션도 줄수있음.  

- 애니메이션을 주려면 helper function을 삽입.
import styled, {keyframes} from "styled-components";

- animation 컴포넌트를 따로 만들고 주고 싶은 태그에 
animation: ${animation} 3s linear infinite; 이렇게 줄 수 있다. 


```
import styled, {keyframes} from "styled-components";

const animation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;
const Father = styled.div`
display: flex;

`;

const Box = styled.div`
background-color:tomato;
width:200px;
height:200px;
display: flex;
align-items: center;
justify-content: center;
animation: ${animation} 3s linear infinite;
span {
  font-size: 100px;
  transition: 0.5s;
  &:hover{
    font-size: 200px;
  }
}

`;

function App() {
  return (
  <Father>
    <Box>
      <span>😊</span>
    </Box>
  </Father>);
}

export default App;
```


## styled-components - 컴포넌트안에 있는 태그 스타일 변경하기 

아래 코드를 보면 Box 컴포넌트 안에 span태그가 있는데, 이 태그의 스타일을 변경하고 싶으면, 
```
const Box = styled.div`
    span {
      font-size: 100px;
    }`;

```
이렇게 줄 수 있음.


<br>

```
import styled, {keyframes} from "styled-components";

const animation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;
const Father = styled.div`
display: flex;

`;

const Box = styled.div`
background-color:tomato;
width:200px;
height:200px;
display: flex;
align-items: center;
justify-content: center;
animation: ${animation} 3s linear infinite;
span {
  font-size: 100px;
  transition: 0.5s;
  &:hover{
    font-size: 200px;
  }
}

`;

function App() {
  return (
  <Father>
    <Box>
      <span>😊</span>
    </Box>
  </Father>);
}

export default App;
```

## styled-components -hover 효과, Pseudo selectors 활용 
span:hover{} 이게 normal css라면, styled-components 에서는 &:hover{}, &:active:{} 이런식으로 준다. 


```
const Box = styled.div`
    span {
      font-size: 100px;
       &:hover{
       font-size: 200px;
      }
    }`;

```

위에 있는 것을 아래 코드 처럼 작성할 수 도 있다. 

Emoji 라는 컴포넌트를 만들어서, 부모 컴포넌트 안에서 사용 ${Emoji}:hover {
  font-size: 200px; 
} 이런식으로.

hover 효과는 Box 컴포넌트 하위에 있는 Emoji 컴포넌트에만 적용된다. 
```
import styled, {keyframes} from "styled-components";

const animation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;
const Father = styled.div`
display: flex;

`;

const Emoji = styled.span`
font-size: 120px;
transition: 0.5s;
`;
const Box = styled.div`
background-color:tomato;
width:200px;
height:200px;
display: flex;
align-items: center;
justify-content: center;
animation: ${animation} 3s linear infinite;
${Emoji}:hover {
  font-size: 200px; 
}`;

function App() {
  return (
  <Father>
    <Box>
      <Emoji as="">😊</Emoji>
    </Box>
    <Emoji as="">😊</Emoji>
  </Father>);
}

export default App;
```

## Theme 

styled components는 ThemeProvider wrapper 컴포넌트를 통해 전체 테마를 지원. 
index.js파일에 ThemeProvider 안에 App을 포함시켜준다. 

```
<React.StrictMode>
	<ThemeProvider theme={}>
      		<App />
      </ThemeProvider> 
</React.StrictMode>
```

index.js 파일 
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';


const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111",
};
const lightTheme = {
  textColor:"#111",
  backgroundColor:"whitesmoke",
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
      </ThemeProvider>

  </React.StrictMode>
);


```

App.js에 파일에는 ThemeProvider의 props들을 사용할 수 있다. 
```
const Father = styled.div`
background-color: ${(props) => props.theme.backgroundColor}
`;
```

```

import styled, {keyframes} from "styled-components";

const animation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;
const Father = styled.div`
display: flex;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.backgroundColor}

`;

const Emoji = styled.span`
font-size: 120px;
transition: 0.5s;
`;
const Box = styled.div`
background-color:tomato;
width:200px;
height:200px;
display: flex;
align-items: center;
justify-content: center;
animation: ${animation} 3s linear infinite;
${Emoji}:hover {
  font-size: 200px; 
}`;

const Title = styled.h1`
font-size:200px;
color: ${(props) => props.theme.textColor}
`;

function App() {
  return (
  <Father>
    <Box>
      <Emoji as="">😊</Emoji>
    </Box>
    <Emoji as="">😊</Emoji>
    <Title>Hello</Title>
  </Father>);
}

export default App;
```
<br><br>
## TypeScript를 위한 set up
npx create-react-app 내 앱 이름 --template typescript<br>
npm i --save-dev @types/styled-components<br>
npm i styled-components
<br>
## TypeScript

TypeScript는 자바스크립트를 기반으로 한 프로그래밍 언어이다. 거의 같은데, 약간의 새로운 기능만 추가된 것. 
(문법도 다 같음)

strongly-typed언어이다. 프로그래밍 언어가 작동하기 전에 type을 확인한다는 뜻. 

예를 들어, 

const plus = (a,b) => a + b;
plus(2,2); 의 결과값은 4가 되는데
plus(2,"hi");의 결과값은 2hi가 된다. 즉, 자바스크립트는 들어오는 매개변수의 타입을 확인하지 않는다. 

타입스크립트를 추가하면, 아래와 같다. 
const plus = (a:number, b:number) => a + b;

근데 브라우저가 이해할 수 있는 것은  오직 자바스크립트언어야. 타입스크립트를 이해하지 못해. 

타입스크립트는 별 문제가 없는게 확인되면, 코드에 오류가 없는게 확인되면, 자바스크립트 코드로 return 한다. 

- 설치 방법: npx create-react-app 앱이름 --template typescript 
- 타입스크립트와 리액트를 같이쓸 때는, js파일이 아니라, tsx파일로 생성된다.
- 어떤 라이브러리나 패키지는 타입스크립트로 만들어진게 아니기 때문에, 타입스크립트에게 이런 라이브러리나 패키지가 무엇인지 알려줘야한다. 예를 들면, npm i --save-dev @types/styled-components 로 설치하면, 타입스크립트가 styled-components 패키지를 이해할 수 있게된다. (누군가가 타입들을 이미 다 작성해줬기 때문!)



## Typing the Props

아래와 같이 이런식으로 Prop Types 를 사용할 수 도 있지만, 이 경우에 만약 에러가 있을 경우, 코드 실행 후, 브라우저에 에러가 나타난다. 
```
const Box = styled.div`
background-color:${(props) => props.bgColor};
`;
```

추가적으로 타입스크립트에게 props의 타입을 설명해주는 interface를 사용하면, 코드 실행전 에러가 나타나서 고칠 수 있음 

Circle.tsx파일을 보면
- Circle({bgColor}: CircleProps) Circle은 bgColor라는 props를 받는데, 그것의 타입은 CircleProps이다. 
- Circle은 컨테이너라는 컴포넌트로 반환하게 되는데, 반환할때, 이 컨테이너의 props는 bdgColor라고 명칭. <Container bdgColor={bgColor} />

```
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}
interface ContainerProps {
  bdgColor:string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bdgColor};
  border-radius: 100px;
`;


function Circle({bgColor}: CircleProps) {
  return <Container bdgColor={bgColor} />;
}

export default Circle;
```

App.tsx

```
import Circle from "./Circle";


function App() {
  return (
    <div>
      <Circle bgColor="yellow" />
      <Circle bgColor="tomato" />
    </div>);
}

export default App;
```

index.tsx

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';


const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111",
};
const lightTheme = {
  textColor:"#111",
  backgroundColor:"whitesmoke",
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

```

## Optional Props

interface 를 사용하여 props타입을 정해주면 기본값은 필수라서, 값을 안주면, 에러 표시 

옵션값으로 만드는 방법은  borderColor?:string 와 같이 물음표를 주면 된다. 
```
interface CircleProps {
  bgColor:string;
  borderColor?:string;
}
```

아래와 같은 코드를 보면 Circle에는 borderColor가 옵션인데, Container에는 borderColor가 필수라서, 아래와 같이 수정.  

- <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />이렇게 주면 borderColor ?? bgColor 뜻은 borderColor가 빈값이면 배경값을 주렴.
- text를 옵션으로 주는 방식. text props가 없으면 default로 표시된다. 

```
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?:string;
  text?:string;
}
interface ContainerProps {
  bdgColor:string;
  borderColor:string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bdgColor};
  border-radius: 100px;
  border: 1px solid ${(props)=>props.borderColor};
`;


function Circle({bgColor, borderColor,text="default"}: CircleProps) {
  return <Container bdgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>;
}

export default Circle;
```

App.tsx파일

```
import Circle from "./Circle";


function App() {
  return (
    <div>
      <Circle bgColor="yellow" borderColor="red" />
      <Circle bgColor="tomato" text="i am here" />
    </div>);
}

export default App;
```

## 타입스크립트 state

const [value, setValue] = useState("1");
이렇게 기본값을 "1" 로 지정해주면, 타입스크립트가 알아서 value 의 타입은 string 이라서 인식 
const [value, setValue] = useState(1);

이렇게 기본값을 숫자로 주면, 타입스크립트가 value 의 타입을 number로 인식 
>>추가 팁 
일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지 않아도 되지만 상태가 undefined또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다. ex) const [ value, setValue ] = useState< Value | null >(null);

```
import styled from "styled-components";
import {useState} from "react";
interface ContainerProps {
  bgColor:string;
  borderColor:string;
}
const Container = styled.div<ContainerProps>`
width: 200px;
height:200px;
background-color: ${(props) => props.bgColor};
border-radius: 100px;
border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
  bgColor:string;
  borderColor?:string;
  text?:string;
}
function Circle({bgColor,borderColor, text ="default text"}: CircleProps){
  const [value, setValue] = useState("1");
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    {text}
    </Container>;
}

export default Circle;
```


## 타입스크립트 form


const onSubmit = (event: React.FormEvent<HTMLFormElement>) 이벤트가 무엇인지 타입스크립트에게 알려주는 방법! 

- 이벤트 종류
https://legacy.reactjs.org/docs/events.html

- useState("");  이렇게 주니까, 타입스크립트는 value가 string일것이라고 알게되고, setValue가 string 값의 인자를 받을 함수라는 것을 알게되었다.
- event:React.FormEvent<HTMLInputElement> 이렇게 이벤트의 타입을 알려주게 되는 것이지. 

```
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
```

>> 추가 팁: 아래 2개는 같은 코드.
1. 
```
const value = event.currentTarget.value;
```

2. ( es6문법 사용)
```
const {
currentTarget: { value },
} = event;

```

## 타입스크립트에서 theme 사용 
https://styled-components.com/docs/api#typescript

1. styled.d.ts 를 만든다. (참고: d.ts 는 declaration file 이라는 뜻이다.)
2. theme.ts (테마) 를 만든다. 위 링크에서 형태를 복사 
3. index.tsx 에 2에서 만든 테마를 주입한다.
4. app.tsx 에서 props 로 받아 사용한다.


styled.d.ts파일 

DefaultTheme는 기본적으로 props.theme의 인터페이스로 사용됩니다.
기본적으로 DefaultTheme 인터페이스는 비어 있으므로 확장해야 합니다.
```
  // import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
      textColor:string;
      bgColor:string;
      btnColor:string;
    };
  }
```
  
theme.ts 파일 
```
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor:"tomato",
}


export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor:"tomato",
}

```


index.tsx파일에  적용 
```
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
</ThemeProvider>
  </React.StrictMode>
);
```


App.tsx파일에 적용
```
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  `;
  ```

============================Router 6버전===================

## Router 6버전

>setup

react-master-temp repository 

npx create-react-app 앱이름 --template typescript 

npm i --save-dev @types/styled-components

npm i styled-components

npm i react-router-dom@6.4


### 1. BrowserRouter
 Switch 대신 Routes를 썼다는 점. element부분 차이가 있음 

 step 1. Home.tsx, About.tsx파일 생성하고
 step 2. Header.tsx파일 생성하고

Header.tsx
```
import { Link } from "react-router-dom";

function Header(){
  return(
  <header>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/about"}>About</Link></li>
    </ul>
  </header>)
}
export default Header;
```

step 3. Router.tsx파일 생성하고 BrowserRouter, Route, Routes 사용 

Router.tsx
```
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router(){
  return<>
  <BrowserRouter>
  <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default Router;
```

step 4. App.tsx 에 Router를 import해준다.  index.tsx 에는 변경된 것이 없음. 


```
import Router from "./Router";

function App() {
  return (
    <div >
      <Router />
    </div>
  );
}

export default App;
```

<br>

Router 5.3.4버전
```
 <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
```

### 2. createBrowserRouter

Router.tsx 파일

createBrowserRouter 사용 url을 부모와 자식 관계로 주고 있음. 
전체 route의 길잡이/지도라고 볼 수 있지. 

Step 1. Router.tsx에서 createBrowserRoute를 사용하여 부모와 자식url을 써준다. 
- 부모 App.tsx 
- / 라는 주소를 들어갔을때, Home.tsx 페이지를 보여줘 
- /about 라는 주소면, About.tsx 페이지 보여줘.



Router.tsx

```
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import App from "./App";


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      }
    ]
  }
])


export default router;
```

Step 2. App.tsx  수정.
:Outlet을 사용하여 Router에 있는 자식 링크들을 가져올 수 있지.


```
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
```

Step 3. index에는 기존에 <App />대신 RouterProvider를 써준다. 이 아이는  router라고 불리는 props를 갖는다. 이때 이 {router}는 Router.tsx에서 가져온 것. 


index.tsx파일

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


```

Header.tsx, Home.tsx, About.tsx 코드는 BrowserRouter랑 코드가 동일해 




### errorElement

라우터 6버전이 멋진 점은 라우터들이 errorElement라는 것을 가진다는 점. 
에러가 생긴 경우 보여주는 페이지.
다른 멀쩡한 페이지가 에러의 영향을 받지 않게 해준다.


Router.tsx 파일
```
import { createBrowserRouter , Route, Routes, } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        path:"",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path:"about",
        element:<About />,
      },
    ],
    errorElement: <NotFound />,
  },
])
export default router;
```

NotFound.tsx파일 
```
function NotFound(){
  return <h1>Not Found.</h1>
}
export default NotFound;
```


### useNavigate

useNavigate

링크이동인데, ```<Link />```는 유저가 직접 클릭해야 이동하는 반면, useNavigate는 자동으로 이동

Header.tsx파일

```
import { Link, useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate();
  const onAboutClick = ()=> {
    navigate("/about");
  }
  return (
  <header>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
        </li>
      <li><button onClick={onAboutClick}>About</button></li>
    </ul>
  </header>
  );
}

export default Header;
```

### useParams


useParams 훅은 < Route path >와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환합니다. 하위 경로는 상위 경로에서 모든 매개변수를 상속합니다.
```
const params = useParams();
```

db파일
db.ts
```
export const users = [
  { 
    id:1,
    name:"nici"
  },
  {
    id:2,
    name:"lynn"
  }
]
```

Router.tsx 파일
:userId로 params에 넘겨줄수있어
```
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element:<About />,
      },
      {
        path:"users/:userId",
        element:<User />,
      },
    ],
    errorElement: <NotFound />,
  },
])
export default router;
```

User.tsx파일
받아온 userId를 가지고 활용할 수 있어. 
```
import { useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
  const  {userId}  = useParams();

  return <h1>User with it {userId} is named: {users[Number(userId)-1].name}</h1>;
}

export default User;
```

Home.tsx파일
```
import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  
  return (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map((user)=>(
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      
      </li>
      )
      )}
    </ul>
  </div>
  );
}
export default Home;
```


### Outlet

Outlet은 하위 경로 요소를 렌더링하기 위해 상위 경로 요소에서 사용한다. 

이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있다. 


Router.tsx파일

users아래 followers라는 자식링크 추가 
```
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element:<About />,
      },
      {
        path:"users/:userId",
        element:<User />,
        children: [
          {
            path:"followers",
            element: <Followers />
          },
        ]
      },
    ],
    errorElement: <NotFound />,
  },
])
export default router;
```

Followers.tsx
```
function Followers(){
  return <h1>Followers</h1>
}

export default Followers;
```

User.tsx

Outlet을 사용했기 때문에, See followers를 클릭했을때, 주소는 다음과 같이된다.  

부모 주소: http://localhost:3000/users/1/
자식 주소: http://localhost:3000/users/1/followers

http://localhost:3000/users/1/followers 의 화면을 볼때, 부모주소에서 봤던  UI랑 Followers.tsx의 UI가 중첩되서 나타난다. 
```
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
  const  {userId}  = useParams();

  return (
  <div>
    
    <h1>User with it {userId} is named: {users[Number(userId)-1].name}</h1>
    <hr />
   
    <Link to="followers">See followers</Link>
    <Outlet />
    </div>
 
  );
}

export default User;
```


### useOutletContext

종종 상위 경로는 하위 경로와 state 또는 기타 값을 공유합니다.
 Outlet에 기본 제공되는 context를 사용할 수도 있습니다.
```
< Outlet context={ {a:1, b:2} } />;

const context = useOutletContext(); // {a:1, b:2}
```

User.tsx 에서 자식링크에 idOfMyUser라는 이름으로 userId값을 넘겨주고 
```
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
  const  {userId}  = useParams();

  return (
  <div>
    
    <h1>User with it {userId} is named: {users[Number(userId)-1].name}</h1>
    <hr />
   
    <Link to="followers">See followers</Link>
    <Outlet context={{
      idOfMyUser: userId
    }} />
    </div>
 
  );
}

export default User;
```

Followers.tsx파일

자식 링크에서는 idOfMyUser값을 받아온다. 
```
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  idOfMyUser:number;
}

function Followers(){
  const {idOfMyUser} = useOutletContext<IFollowersContext>();

  return <h1>Here are user id {idOfMyUser}의 follower</h1>
}

export default Followers;
```


### useSearchParams

useSearchParams 훅은 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용됩니다. useState 훅과 마찬가지로 useSearchParams는 현재 위치의 search params와 이를 업데이트하는 데 사용할 수 있는 함수라는 두 가지 값의 배열을 반환합니다.
setSearchParams 함수는 탐색과 같이 작동하지만 URL의 검색 부분에 대해서만 작동합니다.
```
let [searchParams, setSearchParams] = useSearchParams();

setSearchParams(params);
```


============================Router 6버전===================

## Router 5.3.0버전

>setup

react-master-class repository

npm i react-router-dom@5.3.0 react-query

npx create-react-app 앱이름 --template typescript 


npm i --save-dev @types/styled-components

npm i styled-components

npm i --save-dev @types/react-router-dom


>사용한 API

CoinPaprika JSON
https://api.coinpaprika.com/v1/coins

## useParams 

Router.tsx에서 coindId로 파라미터를 넘겨주고 
```
<Route path="/:coinId">
          <Coin />
        </Route>
  ```

Coin.tsx에서 coinId를 받아온다. 

 const params = useParams(); 
 console.log(params)하면 
 object가 콘솔에 뜬다. 
 만약 url이 이거라면 http://localhost:3000/eth-ethereum

 coinId:eth-ethereum 라고 뜨게 됌. 
```
interface Params {
  coinId:string;
}

 const { coinId } = useParams<Params>();
 ```


 ## Styles

### Reset CSS

 Reset CSS
https://github.com/zacanger/styled-reset/blob/master/src/index.ts

Google Fonts
https://fonts.google.com

Source Sans Pro 폰트
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;

Flat UI Color
https://flatuicolors.com/palette/gb

createGlobalStyle (전역 스타일을 처리함)
전역 스타일을 처리하는 특수 Styled Component를 생성하는 helper 함수
https://styled-components.com/docs/api#createglobalstyle

App.tsx에 import한다. 

2개 이상을 return하기 위해 <></>를 사용.
```
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle``;

function App() {
  return (
  <>
  <GlobalStyle />
  <Router />
  </>
  
  );
}
export default App;
```

### 타입스크립트에서 theme 사용한 방법으로 스타일을 준다. 

## API데이터 가져오기 


Coins.tsx파일
```
<!-- 우선 타입을 정의해주고 -->
interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
};
```

컴포턴트가 처음 렌더링 할때만 호출할 수 있도록 useEffect 하고 []을 빈배열로 나둠. 

(()=>(console.log))(); //바로 함수로 실행되도록 하는 코드 

SetCoins(json.slice(0,100)); 100개 데이터만 가져오도록!

코인 아이콘 api
https://coinicons-api.vercel.app/
```
 <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
```


```
function Coins() {
const [coins, SetCoins] = useState<ICoin[]>([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    (async() => {
     const response = await fetch("https://api.coinpaprika.com/v1/coins");
     const json = await response.json();
     SetCoins(json.slice(0,100));
     setLoading(false);
    })();    
  },[]); 

  return (
    <Contatiner>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
          <Title>Coins</Title>
      </Header>
      {isLoading ? (<Loader>Loading....</Loader>) : (<CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}
              
                    <CoinWrapper>
                  <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                  {coin.name} &rarr;
                </CoinWrapper>
              
              </Link>
            </Coin>
          ))}
        </CoinsList>
        )}
    </Contatiner>
  );
}
```


## Link를 통해 object값을 보내기 

화면 ui상에는 안나타나지만 뒤에서 데이터를 보내줄 수 있는 거얌
```
<Link to={{
          pathname: `${coin.id}`,
          state: { name: coin.name }
        }}>
         
          
          </Link>
```     

이제 Coin.tsx에서는 coinId를 파라미터로 받아오고 useLocation으로 Link에서 보내준 state 데이터 배열을 받아온다. 
useLocation은 react-router-dom의 훅! 
const location = useLocation();
console.log(location) 해봐봐

```
interface RouteState {
  name: string;
};

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
```

왜 이렇게 사용할까? 

메인 페이지에서 코인 이름의 리스트들이 보이고, 여기서 코인을 클릭하면 각각의 코인id페이지로 이동하지. 

여기서 각각의 코인 id페이지 (예를들어, http://localhost:3000/usdc-usd-coin)를 보여줄때, 코인 이름까지 api로 부터 데이터를 받아올 필요가 없지.왜? 

이미 코인이름을 이미 알고 있고, 그 코인이름을 클릭한 것이니까! 그래서 Link에 객체로 보내주고, 받아온 데이터를 바로 보여줄 수 있엄.

하지만!!! 바로 코인 개별 페이지 http://localhost:3000/usdc-usd-coin 로 가면 에러가 난다. 

http://localhost:3000/ 홈페이지에서 코인 개별 페이지를 클릭해야 에러가 안남. 왜? state는 홈페이지에서 코인을 클릭할때 생기므로


## Coin Data

coin id로 코인 받기 (Coins)
https://api.coinpaprika.com/v1/coins/btc-bitcoin
https://api.coinpaprika.com/#operation/getCoinById

coin id로 특정 코인에 대한 시세 정보 얻기 (Tickers)
https://api.coinpaprika.com/v1/tickers/btc-bitcoin
https://api.coinpaprika.com/#operation/getTickersById


Coins.tsx에서 두줄로 가져왔었어 =>한줄로 줄일 수 있음. 
```
  useEffect(()=>{
    (async() => {
     const response = await fetch("https://api.coinpaprika.com/v1/coins");
     const json = await response.json();
    })();    
  },[]); 
```

한줄로 이렇게. 
```
  useEffect(()=>{
    (async() => {
     const coins = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
    })();    
  },[]); 
```


>단축키

Ctrl(Command)+q: 같은 문자열 선택

Shift+Alt(Option)+i: 선택한 모든 문자열에 가장 우측 끝으로 포커싱

Ctrl(Command)+Shift+오른쪽 화살표: 현재 선택한 문자열을 기준으로 우측 끝까지 문자열 선택



가져온 데이터에 타입을 주기위해, 

console.log(데이터)한다음 => 
전역변수로 저장 => 
Object.keys(전역변수이름).join() 과 Object.values(전역변수 이름).map(v=>typeof v).join()등으로 해서 한꺼번에 가져온다!! 

주의해야할점은 object라고 떴지만, 배열의 object인 경우가 있다. ITag의 인터페이스 정의해주고 tags:ITag[]로 줄 수 있다. 


## Nested Routes

버전 6의 Outlet부분과 동일 
이 아래 코드를 Coin.tsx파일에 추가 
```
<Switch>
      <Route path={`/:coinId/price`}>
        <Price />
      </Route>
      <Route path={`/:coinId/chart`}>
        
        <Chart coinId={coinId} />
      </Route>
    </Switch>
    ```


## Coin페이지에 탭 만들기

탭으로 연결하는 링크를 만들어주고 
```
  <Tabs>
            <Tab>
              <Link to={`/:coinId/price`}>Price</Link>
            </Tab>
            <Tab>
              <Link to={`/:coinId/chart`}>Chart</Link>
            </Tab>
          </Tabs>
```

useRouteMatch 라는 훅 사용. react router dom에서 제공하는 hook

=>특정 url에 있는지 확인해주는 것

### useRouteMatch 
 react router dom에서 제공하는 hook으로 특정 url에 있으면 true를 반환해준다. 

const priceMatch = useRouteMatch("/:coinId/price");
cosole.log(priceMatch)해보면 다음과 같은 결과가 나온다. 
```
{
    "path": "/:coinId/price",
    "url": "/:coinId/price",
    "isExact": true,
    "params": {
        "coinId": ":coinId"
    }
}
```


```
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
```

그래서 interfcae Tab에 isActive라는 props를 가진다고 해줄거야, 이 props는 boolean타입이라는 것을 정의해주고, 

const Tab = styled.span<{ isActive: boolean }>`

chartMatch !== null 이 true면 isActive는 trur가된다. 
  <Tab isActive={chartMatch !== null}><Link to={`/${coinId}/chart`}>Chart</Link></Tab>

isActive는 true면, 글자 색을 accentColor로 변경!! (즉, 해당 탭이 활성화됐을 때, 글자 색 변경)
  ```
  const Tab = styled.span<{ isActive: boolean }>`
  color: ${(props) =>
  props.isActive ? props.theme.accentColor : props.theme.textColor
  } ;
`;
```


##  React Query

React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리
"global state"를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트합니다.

- React Query를 사용하면 useEffect를 사용하여, setCoins,, setLoading..이런 부분들을 대신해서, 한줄 코드로 간단하게 쓸 수 있다! 
- 또한, React Query의 제일 큰 장점은 api를 페이지를 로딩할때마다 불러오지 않아도 된다. 캐시에 데이터를 저장해주기 때문에

React Query 사용하는 방법

1단계: index.tsx파일에  QueryClient와 QueryClientProvider를 삽입하고 코드넣어준다.

```
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

2단계. ts파일로 fetcher 함수를 만들어야한다. 여기에서는 api.ts파일을 생성. 

왜 ts 파일? tsx라는게 ts + react 문법을 사용한다라는 의미인데, 이 파일에서는 react 문법을 사용하는 함수가 없기 때문. 

```
export function fetcher(){
  return fetch("https://api.coinpaprika.com/v1/coins").then((response)=> response.json());
}
```

3단계: Coins.tsx로 가서 useQuery  사용 

```
const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins)
```

- useQuery 2가지 인자를 필요로 하는데, 첫번째는 고유키(allCoins와 같은 고유식별자) 두번째는 fetch함수

- useQuery는 isLoading이라는 불리는 boolean값을 return한다. 또 fechCoins의 data를 가져온다. 

- fetcher함수가 loading중이라면 isLoading은 true가 된다. 

- useQuery는 가 fetcher함수를 부르고 fecher함수가 끝나면, json을 data에 넣고, isLoading은 false가 된다. 


>> 위와 같은 방법으로 Coin.tsx파일에도 적용!

다만 coinId를 argument(인자)로 넘겨줘야하므로 
() => fetchCoinInfo(coinId) 이것을 넣어주었다. 

["info", coinId] 이렇게 넣어준 이유는 coinId가 info랑 price 같아서. key는 각각 다른key, 즉 쿼리마다 고유한 key를 가져야함 

```
  const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
  const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));
```

또한, fetch함수로 
coinId를 넘겨줄 때, 이렇게 쓸 수 있다. 

```
export function fetchCoinInfo(coinId:string){
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response)=> response.json());
}
```

### React Query는 devtools을 가지고 있다. 

- import { ReactQueryDevtools } from 'react-query/devtools' 를 통해 실시간으로 데이터가 fetch되는지 볼수있음.
- devtools를 통해 데이터들이 캐시에 어떻게 저장되는지 볼수 있음. 

App.tsx파일
```
import { ReactQueryDevtools } from 'react-query/devtools'
function App() {
  return (
  <>
  <GlobalStyle />
  <Router />
  <ReactQueryDevtools initialIsOpen={true} />
  </>
  
  );
}
export default App;
```

### react query로 설정한 시간마다 fetch를 할수있다.

예시:{refetchInterval:5000 } 을 줘서 5초마다 fetch해주라고 할수있다. 

```
const {isLoading:tickersLoading, data:tickersData} = useQuery<PriceData>(["tickers", coinId], ()=> fetchCoinTickers(coinId),{refetchInterval:5000});
```


### 차트.tsx

1. 이제 Chart.tsx에서 coinId를 받아와야하는데, 2가지 방법이 있지

- 방법1: Chart에 useParams 를 통해 링크에서 coinId를 가져올수도 있고,
- 방법2:  <Chart coinId={coinId} /> 에 props를 넘겨서 받아올 수 있어. 여기서는 이 방법2를 사용함. 

2. APEX CHARTS 오픈 소스 차트 사용 
- https://apexcharts.com
- npm install --save react-apexcharts apexcharts

```
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId:string;
}
interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
  }

function Chart({coinId}:ChartProps){
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId],()=>fetchCoinHistory(coinId));
  return (<div>
    {isLoading? "Chart Loading..." :(
      <>
    <ApexChart
    type="line"
    series={[
      {
        name:"price",
        data: data?.map((price) => Number(price.close)) as number[]
      },
    ]}
    options={{
      theme: {
        mode: "dark"
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
      tooltip:{
        y:{
          formatter:(value)=>`$ ${value.toFixed(2)}`
        }
      }
    }}
    />
    </>
    )}
  </div>)
}

export default Chart;
```


## React Helmet
html의 head 역할!
https://www.npmjs.com/package/react-helmet

npm i react-helmet
npm i --save-dev @types/react-helmet


## 코인 프로젝트 배포 

https://themilkyway321.github.io/coin-paprika/ 로 프로젝트 배포  


## =========6-state-management==========

  Recoil은 React JS에서 사용할 수 있는 state management library.


여기서 state management가 무엇이고 왜 필요한지 알아보기 위해 이전 암호화폐 앱에 라이트/다크모드 버튼을 추가.

1. index.tsx에 있는 ThemeProvider를 App function으로 옮김.(이유는 useState works on App.)
2. theme.tsx에 light theme을 추가.
3. App function에 isDark state를 추가해서(useState) 삼항연산자를 활용해 state 값에 따라 theme이 바뀌게 설정.

4. button 하나 만들고 거기에 Click event에 toggleDark 함수를 연동.


>button을 Coins.tsx로 옮겼을 때 

- toggleDark Prop: App -> Router-> Coins 에 다 보내줘야행

>차트의 옵션값을 변경하기 위해(다크와 라이트에 따라)

isDark Prop: App ->Router -> Coin ->Chart 에 다 보내줘야해 

근데 만약 Recoil과 같은 state management 를 사용한다면 한 곳에 담아서 각 컴포넌트들이 필요할때 그 곳에 접속해서 사용할 수 있게 함. (isDark) 같이 담아두고. 

차트도 (isDark)에 접근할 수 있고 , App도 (isDark)에 접근 할 수 있음 


## Recoil
npm install recoil

RecoilRoot
recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다. Root 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.

Atom
Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 리렌더링 되는 결과가 발생할 것이다.
atom(): 쓰기 가능한 state를 나타내는 atom를 만듭니다.
```
const textState = atom({
key: 'textState', // 유니크한 ID(다른 atom/selector와 관련하여)
default: '', // 기본값 (초기값)
});
```

useRecoilState()
컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 아래와 같이 사용하면 된다.
ex) const [text, setText] = useRecoilState(textState);

https://recoiljs.org/ko/docs/introduction/getting-started

- useRecoilValue(state)

  Recoil state값을 반환합니다.
  이 hook은 암묵적으로 주어진 상태에 컴포넌트를 구독합니다.
  이 hook는 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하므로 컴포넌트가 상태를 읽을 수만 있게 하고 싶을 때에 추천하는 hook입니다. 이 hook을 React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링을 하도록 컴포넌트를 구독합니다.
  ex) const names = useRecoilValue(namesState);
  https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/

- useSetRecoilState(state)

  Recoil state의 값을 업데이트하기 위한 setter 함수를 반환합니다.
  상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 리턴합니다.
  setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨줍니다.
  ex) const setNamesState = useSetRecoilState(namesState);
  https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/

step 1. index.tsx파일에   <RecoilRoot>추가 

```
import {RecoilRoot } from "recoil";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

```


step2. atoms.ts파일 만들고 아래와 같이 추가

```
import { atom } from "recoil";

export const isDarkAtom = atom ({
   key:"isDark",
   default:true,
})
```

step 3. App.tsx파일에 
const isDark = useRecoilValue(isDarkAtom); 컴포넌트 만들어주고 , <ThemeProvider theme={isDark? darkTheme :lightTheme}>에 prop추가 
```
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
  <>
  <ThemeProvider theme={isDark? darkTheme :lightTheme}>
    
  <GlobalStyle />
  <Router />
  <ReactQueryDevtools initialIsOpen={true} />
 </ThemeProvider>
  </>
  
  );
}
export default App;
```

step 4. Coins.tsx파일에 
아래 컴포넌트 추가해주고 
```
const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = ()=>setDarkAtom((prev)=>!prev);
  ```
버튼에 추가!!
  ```
   <button onClick={toggleDarkAtom}>Toggle Mode</button>
   ```

step 4-2. Chart.tsx에 

const isDark = useRecoilValue(isDarkAtom); 컴포넌트 추가해주고, 

 theme: {
              mode: isDark? "dark": "light"
            }, 차트 옵션에 prop추가 
