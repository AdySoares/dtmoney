import styled from "styled-components";

interface IsGreenProps{
  isGreen: boolean,
}

export const Container = styled.div`  

  height: 137px;
  border-radius: 6px;
  
  padding: 2.4rem 1.4rem 2.4rem 3.2rem;

  background-color: ${({isGreen}:IsGreenProps ) => isGreen ? 'var(--green-dark)' : 'var(--shape-3rd)'};
     
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4{
      color: var(--base-text);
      font-size: 1.6rem;
    }
    
    svg{
      width: 2.4rem;
      height: 2.4rem;
      object-fit: cover;
    }
  }

  p{
    color: var(--titles);
    font-size: 3.2rem;
    font-weight: 700;
  }
`