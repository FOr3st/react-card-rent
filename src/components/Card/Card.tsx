import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, Spinner } from "../../components";
import { CardData } from "../../data";
import { Label } from "../Label";

const CardContainer = styled.div`
  background: black;
`;

const CardName = styled.h2`
  color: white;
`;

const CardDescription = styled.p`
  font-size: 18px;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 250px;
`;

const RentControlsGroup = styled.div`
  display: flex;

  & > * {
    margin-right: 5px;
  }
`;

export interface CardProps {
  data?: CardData;
  onCardRent?(rentPrice: number): void;
}

export function Card(props: CardProps) {
  const { data, onCardRent } = props;

  const [currentRentPrice, setCurrentRentPrice] = useState(0);

  useEffect(() => {
    if (data && data.currentPrice) {
      setCurrentRentPrice(data.currentPrice);
    }
  }, [data]);

  const handleCardRent = useCallback(() => {
    onCardRent && onCardRent(currentRentPrice);
  }, [onCardRent, currentRentPrice]);

  const handleOnChange = useCallback((e) => {
    setCurrentRentPrice(+e.target.value);
  }, []);

  if (!data) {
    return (
      <CardContainer>
        <Spinner />
      </CardContainer>
    );
  }

  const { name, image, currentPrice, description } = data;

  return (
    <CardContainer>
      <CardName>{name}</CardName>
      <CardImage src={image} />
      <CardDescription>{description}</CardDescription>

      <RentControlsGroup>
        <Label>Rent price</Label>
        <Input
          value={currentRentPrice}
          type="number"
          min={currentPrice}
          step="0.01"
          onChange={handleOnChange}
        />
        <Button active onClick={handleCardRent}>
          Rent
        </Button>
      </RentControlsGroup>
    </CardContainer>
  );
}
