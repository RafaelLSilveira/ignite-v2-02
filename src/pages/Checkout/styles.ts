import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  position: relative;
  left: 0;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color:${(props) => props.theme["base-subtitle"]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1rem;
  background:${(props) => props.theme["base-card"]};
  border-radius: 0.375rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  input {
    padding: 12px;
    gap: 0.25rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid #E6E5E5;
    border-radius: 0.25rem;
    height: 42px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
  }

  
  .subTitle {
    font-size: 0.875rem;
    color: #574F4D;
    margin-bottom: 1rem;
    margin-left: 1.2rem;
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const PurchaseTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-family: 'Roboto';
  font-style: normal;

  .inactive {
    opacity: 0.5;
  }

  button {
    text-align: start;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
    
    padding: 1rem;
    gap: 0.75rem;

    width: 178.67px;
    height: 51px;

    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    
    cursor: pointer;
  }
`;

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  width: 100%;
  height: 100%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
`;

export const ResumePurchase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 90%;

  /* Base/Text */
  color: #574F4D;
`;

export const ResumeItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  padding: 12px 8px;
  gap: 4px;

  width: 100%;
  height: 46px;

  /* Brand / Yellow */
  background: #DBAC2C;
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  /* Base/White */
  color: #FFFFFF;
  font-stretch: 100;
`;

export const ErrorMessage = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #f55555 !important;
`;
