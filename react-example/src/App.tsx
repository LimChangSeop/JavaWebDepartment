import { useState } from "react";
import KakaoSignIn from "./views/KakaoSignIn";
import NaverSignIn from "./views/NaverSignIn";
import './App.css'
import { Link } from "react-router-dom";
import MenuAppBar from "./components/MenuAppBar";

export default function App() {
  const [view, setView] = useState<string>("");
  return (
    <div>
      <MenuAppBar setView={ setView } />
      <div>
        {/* 논리연산자 특성으로 앞이 false면 뒤가 뭐가 오든지 간에 다음 연산으로 넘어감 
            그런 논리로 제어문이 불가능한 return안에 조건문처럼 사용했음*/}
        {/* {view === 'naverSignIn' && (<NaverSignIn />)} */}
        {/* {view === 'kakaoSignIn' && (<KakaoSignIn />)} */}
        {/*
          //# 삼항 비교 연산자
          //? 조건에 따라 참일때의 결과값과 거짓일 때의 결과값을 지정해서 해당하는 경우의 값을 반환
          //? 조건 ? 참일 때의 결과값 : 거짓일 때의 결과값
        */}

        {
          // <NaverSignIn />로 못넣는다. 태그라서 소괄호를 넣어줘야함.
          //^ <></> : 아무런 의미없는 코드
          view === 'naverSignIn' ? (<NaverSignIn />) :
          view === 'kakaoSignIn' ? (<KakaoSignIn />) : (<></>)
        }
      </div>
    </div>
  );
}
