import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      <br /> 
       {isIncome ? ' ' : ' '} 
       {isIncome ? ' ' : ' '}  
        {isIncome ? ' ' : ' '}
       {isIncome ? ' ' : ' '}
    </div>
  );
};

export default InfoCard;
