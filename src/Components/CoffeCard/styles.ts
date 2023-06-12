import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
  width: 256px;
  height: 280px;

  background:${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem;
  gap: 0.5rem;

  .shopping {
    cursor: pointer;
    border-radius: 0.375rem;
    padding: 0.5rem;
    height: 2rem;
    width: auto;
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};
  }
`;

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Image = styled.img`
  margin-top: -3rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
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
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;

  p:first-child {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;
    text-align: right;
    color: ${(props) => props.theme["base-text"]};

    span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
      margin-right: 0.25rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
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
`;