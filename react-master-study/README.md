## styled-components 기본 사용방법

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

Emoji 라는 컴포넌트를 만들어서 재사용. 
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

## theme 

styled components는 ThemeProvider wrapper 컴포넌트를 통해 전체 테마를 지원. 
index.js에 파일에 ThemeProvider 를 삽입해주고. 
```
ThemeProvider 안에 App을 포함시켜준다. 
<ThemeProvider theme={lightTheme}>
      <App />
      </ThemeProvider>
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

App.js에는 이런식으로 값을 가져올 수 있음
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

- 설치 방법
npx create-react-app 앱이름 --template typescript 

아래처럼 원하는 라이브러리를 타입 스크립트로 읽어올 수 도 있다. 
아래 예시 styled-components 라이브러리를 읽어오는 방법 
npm i --save-dev @types/styled-components
npm i styled-components


## Typing the Props

아래와 같이 이런식으로 Prop Types 를 사용할 수 도 있지만, 이 경우에 만약 에러가 있을 경우, 코드 실행 후, 브라우저에 에러가 나타난다. 
```
const Box = styled.div`
background-color:${(props) => props.bgColor};
`;
```

추가적으로 타입스크립트에게 props의 타입을 설명해주는 interface를 사용하면, 코드 실행전 에러가 나타나서 고칠 수 있음 

```
import styled from "styled-components";

interface ContainerProps {
  bgColor:string;
}
const Container = styled.div<ContainerProps>`
width: 200px;
height:200px;
background-color: ${(props) => props.bgColor};
border-radius: 100px;
`;
interface CircleProps {
  bgColor:string;
}
function Circle({bgColor}: CircleProps){
  return <Container bgColor={bgColor}/>;
}

export default Circle;
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

<Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />이렇게 주면 borderColor ?? bgColor 뜻은 borderColor가 빈값이면 배경값을 주렴. 

```
import styled from "styled-components";

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
}
function Circle({bgColor,borderColor}: CircleProps){
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
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


## 타입스크립트에서 theme 사용 
https://styled-components.com/docs/api#typescript

1. styled.d.ts 를 만든다. (참고: d.ts 는 declaration file 이라는 뜻이다.)
2. theme.ts (테마) 를 만든다. 위 링크에서 형태를 복사 
3. index.tsx 에 2에서 만든 테마를 주입한다.
4. app.tsx 에서 props 로 받아 사용한다.


styled.d.ts파일 
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

============================Router===================

## Router 6버전

### 1. BrowserRouter
6에서는 (BrowserRouter)
 Switch 대신 Routes를 썼다는 점. element부분 차이가 있음 
 ```
<Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
</Routes>
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
```
import { createBrowserRouter , Route, Routes, } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        path:"",
        element:<Home />,
      },
      {
        path:"about",
        element:<About />,
      }
    ]
  }
])
export default router;
```

Root.tsx 파일 (이해를 쉽게 하기 위해 App.txs에서 이름 변경)

Outlet을 사용하여 Router에 있는 링크들을 가져올 수 있지.
```
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';



function Root() {
  return (
   <div>
    <Header />
    <Outlet />
   </div>
  );
}

export default Root;

```


index.tsx파일
RouterProvider는 router라고 불리는 props를 가진다.  (Router.tsx 파일에서 만들었던 router)
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);


```

Header.tsx, Home.tsx, About.tsx 코드는 BrowserRouter랑 코드가 동일해 


Header.tsx파일 

```
import { Link } from "react-router-dom";

function Header(){
  return (
  <header>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/about"}>About</Link></li>
    </ul>
  </header>
  );
}

export default Header;
```

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

링크이동인데, <Link />는 유저가 직접 클릭해야 이동하는 반면, useNavigate는 자동으로 이동

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