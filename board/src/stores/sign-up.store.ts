// sign-in.store.ts
//# Java class 또는 React 컴포넌트의 파일명은 UpperCamelCase를 따랐음.
//# Typescript의 경우 특별한 파일의 네이밍 규칙이 지정되어있지 않기 때문에
//# 필수적으로 UpperCamelCase를 사용할 필요가 없음

//# zustand를 사용해 스토어 생성

//^ zustand에서 create 요소를 import
import { create } from "zustand";

//# Typescript에서 함수의 타입을 지정하는 방법
//? (매개변수명: 매개변수타입) => 반환타입
interface ISignUpStore {
    email: string;
    password: string;
    passwordCheck: string;
    nickName: string;
    telNumber: string;
    address: string;
    addressDetail: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setPasswordCheck: (passwordCheck: string) => void;
    setNickName: (nickName: string) => void;
    setTelNumber: (telNumber: string) => void;
    setAddress: (address: string) => void;
    setAddressDetail: (addressDetail: string) => void;
}

//^ create method를 사용해 store 생성
//? create가 함수를 내뱉어주기 때문에 useStore는 함수이다.
const useStore = create<ISignUpStore>((set) => ({
    //^ 상태 이름 정의 및 상태 변수 선언
    email: '',
    password: '',
    passwordCheck: '',
    nickName: '',
    telNumber: '',
    address: '',
    addressDetail: '',
    
    // ^ set method 선언
    setEmail: (email) => set((state) => ({ ...state, email })),
    setPassword: (password) => set((state) => ({ ...state, password })),
    setPasswordCheck: (passwordCheck) => set((state) => ({ ...state, passwordCheck })),
    setNickName: (nickName) => set((state) => ({ ...state, nickName })),
    setTelNumber: (telNumber) => set((state) => ({...state, telNumber})),
    setAddress: (address) => set((state) => ({ ...state, address })),
    setAddressDetail: (addressDetail) => set((state) => ({...state, addressDetail})),
}))

export default useStore;

//# 일반적인 상태를 선언하는 코드
//? const [상태, set메서드(상태를 변경하는 메서드)] = useState<타입>(초기화값);

//# Zustand를 사용해서 상태를 선언하는 코드
//? const useStore = create<데이터타입>((set) => ({
//?     상태명1: 초기화값,
//?     상태명2: 초기화값,
//?     상태명3: 초기화값,
//?     상태명4: 초기화값,
//?     ...
//?     set메서드(상태를 변경하는 메서드): (상태명1) => set((state) => ({...state, 상태명1})),
//?
//? }));

//^ 1. const useStore = create((set => ({ ... })))
//^    : == useState

//^ 2. 상태명, 초기화값,
//^    : == [상태명, ...] = ...(초기화값)

//^ 3. set메서드: (파라미터) => set((state) => ({...state, 파라미터}))
//^    : == [..., set메서드]

//? state는 상태들을 지칭한다.
//? const { 요소1, 요소2, ... } = 객체 <- 비할당 구조화
//? ...객체 : 객체에서 지정한 요소를 제외하고 남은 요소를 객체로 묶음 처리
//? const { 요소1, ...묶음객체명 } = 객체;

//? subObj = { b:1, c:2, d:3 };