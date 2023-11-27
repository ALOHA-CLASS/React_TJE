import React from 'react'; // React 라이브러리 가져오기
import ReactDOM from 'react-dom/client'; // React DOM 클라이언트 라이브러리 가져오기
import './index.css'; // 애플리케이션의 CSS 파일 가져오기
import App from './App'; // App 컴포넌트 가져오기
import reportWebVitals from './reportWebVitals'; // 성능 추적을 위한 reportWebVitals 함수 가져오기

// ID가 'root'인 문서 요소를 전달하여 ReactDOM.createRoot()을 사용하여 React 루트 요소 만들기
const root = ReactDOM.createRoot(document.getElementById('root'));

// 개발 경험 향상을 위해 Strict Mode를 활성화하는 React.StrictMode 컴포넌트 내부에 App 컴포넌트 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 애플리케이션의 성능을 측정하려면 함수를 전달하여 결과를 로깅하거나(예: reportWebVitals(console.log)) 분석 엔드포인트로 보내십시오. 
// 자세한 내용은 https://bit.ly/CRA-vitals를 참조하십시오.
reportWebVitals();
