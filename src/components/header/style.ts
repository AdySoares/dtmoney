import styled from "styled-components";

export const Container = styled.header`

  background: var(--background);
  height: 212px;


`

export const Content = styled.div`

  padding: 4rem 16rem;

  min-width: 680px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >button{
    background-color: var(--green);
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--white);
    border-radius: 6px;
    padding: 1.2rem 2rem;

    :hover{
       background-color: var(--green-light);
     }
  };

  
`
 