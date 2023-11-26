import React from 'react';
import Card from './Card';

const CardList = () => {
  // Card 컴포넌트에 전달할 데이터 배열
  const cardData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
  ];

  return (
    <div>
      <h2>Card List</h2>
      {/* Card 컴포넌트에 데이터를 전달하면서 렌더링 */}
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;
