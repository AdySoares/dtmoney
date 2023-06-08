import styled from "styled-components";

interface TypeProps{
  type: 'Withdrawal' | 'Deposit'
}

export const Container = styled.div`
  
  height: 6.6rem;
  padding: 2rem 3.2rem;
  background-color: var(--shape-2nd);
  color: var(--base-text);
  font-size: 1.6rem;
  font-weight: 400;

  border-radius: 5px;
  

  table{

    width: 100%;

    tr{

        .description{
          width: 50rem;
        }

        .price{
          width: 20rem;
          color: var(${({type} : TypeProps) => ( type === 'Withdrawal' ? '--red' : '--green' )});
        }
        

        .category{
          width: 24rem;
        }

        .date{
          width: 9.2rem;
        }
    }

  }
`