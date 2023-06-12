import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    border-radius: 0.375rem;
    padding: 0.5rem;
    gap: 0.25rem;
    padding: 0.5rem;
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 100%;
    top: -0.5rem;
    position: absolute;
    right: -0.5rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
  }

  .shopping {
    border-radius: 0.375rem;
    padding: 0.5rem;
    height: 2rem;
    width: auto;
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;