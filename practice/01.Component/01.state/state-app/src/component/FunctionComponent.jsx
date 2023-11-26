import React, { useState } from 'react';

const FunctionComponent = () => {
  // useState를 사용하여 name이라는 상태와 이를 갱신할 수 있는 setName 함수를 선언
  const [name, setName] = useState('Aloha');

  // handleClick 함수 정의
  const handleClick = (newName) => {
    console.log(`${newName} Click!`);

    // setName 함수를 사용하여 name 상태를 갱신
    setName(newName);
  };

  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <h2>Hello I'm {name}</h2>
      {/* 버튼 클릭 시 handleClick 함수 호출 */}
      <button onClick={() => handleClick('Aloha')}>Aloha</button>
      <button onClick={() => handleClick('Joeun')}>Joeun</button>
    </div>
  );
};

export default FunctionComponent;
