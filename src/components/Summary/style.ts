import styled from "styled-components";

export const Container = styled.main`

  margin: 3.4rem 16rem;
`

export const Search = styled.div`

  display: flex;
  gap: 1.6rem;
  align-items: center;

  height: 5.4rem;

  input{
    width: 100%;
    height: 100%;

    padding: 1.6rem;
    background-color: var(--background);
    border: none;

    border-radius: 6px;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
    color: var(--base-text);

    &:focus{
      border: 1px solid var(--green-light);
      outline: none;
    }

    &::placeholder{
      color: var(--placeholder);
    }
  }

  button{

    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.4rem 3.2rem;
    
    border: 1px solid var(--green-light);
    border-radius: 6px;
    background: none;

    color: var(--green-light);
    font-size: 1.6rem;
    font-weight: 700;
    
    svg{
      font-size: 2rem;
    }
    
    &:hover{
      color: var(--white);
      background-color: var(--green-light);
    }

  }

`

export const Frame = styled.div`
  margin-top: 1.6rem;
  width: 100%;

  display: grid;
  gap: .8rem;
`