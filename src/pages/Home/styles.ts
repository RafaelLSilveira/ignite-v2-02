import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5.875rem 0;
`;

export const TextContainer = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  color:${(props) => props.theme["base-title"]};

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    color:${(props) => props.theme["base-subtitle"]};
    font-stretch: 100;
  }
`;

export const TextSubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  gap: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color:${(props) => props.theme["base-text"]};

  p {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  svg {
    border-radius: 100%;
    padding: 0.5rem;
    height: 2rem;
    width: auto;
    color: ${(props) => props.theme["white"]};
  }
`;

export const CoffeContainer = styled.div`
  width: 100%;
  text-align: start;
`;

export const CoffeTitle = styled.p`
  position: relative;
  left: 0;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  color:${(props) => props.theme["base-subtitle"]};
`;

export const CoffeItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;
`;