import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;

  background:${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem;
  gap: 0.5rem;
  white-space: nowrap;

  p:last-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: right;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Image = styled.img`
`;

export const SubTitle = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme["base-label"]};
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  gap: 1rem;
`;

export const PlusMinusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 0.375rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color:${(props) => props.theme["base-title"]};

  svg {
    cursor: pointer;
  }

  button {
    border-color: transparent;
    cursor: pointer;
  }
`;

export const Divider = styled.hr`
  width: 90%;
  height: 0px;  
  border: 1px solid #E6E5E5;
`;