import styled from "styled-components";

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-stretch: 100;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PurchaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding: 40px;
  gap: 32px;
  
  border-radius: 6px 36px;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
`;

export const PurchaseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;