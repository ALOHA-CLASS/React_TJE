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
        <h1>Card List</h1>
        {/* <Card key={0} title={cardData[0].title} content={cardData[0].content} ></Card> */}
        {/* <Card key={1} title={cardData[1].title} content={cardData[1].content} ></Card> */}
        {/* <Card key={2} title={cardData[2].title} content={cardData[2].content} ></Card> */}
        {cardData.map((card, index) => {
            return <Card key={index} title={card.title} content={card.content} />
        })}
    </div>
  );
};

export default CardList;
