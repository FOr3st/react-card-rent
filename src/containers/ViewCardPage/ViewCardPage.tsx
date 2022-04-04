import React, { useEffect, useContext, useCallback } from "react";
import { Spinner, Card } from "../../components";
import { ModelContext } from "../../data";

export function ViewCardPage() {
  const model = useContext(ModelContext);
  const { isLoading, cardData } = model;

  const handleCardRent = useCallback((rentPrice: number) => {
    model.rentCard(rentPrice);
  }, []);

  useEffect(() => {
    model.loadCard();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <Card data={cardData} onCardRent={handleCardRent} />;
}
