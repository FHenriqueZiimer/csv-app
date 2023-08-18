import React from 'react';
import { StyledCard } from './styles'

interface CardProps {
  rowData: Record<string, string>;
}

const Card: React.FC<CardProps> = ({ rowData }) => {
  return (
    <StyledCard>
      {Object.entries(rowData).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </StyledCard>
  );
};

export default Card;
