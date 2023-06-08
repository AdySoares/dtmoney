import styled from "styled-components";

interface RatioBoxProps{
  isActive: boolean
  activeColor: 'green-dark' | 'red-dark'
}

const colors = {
    'red-dark': '#AA2834',
  'green-dark': '#015F43'
}

export const Forms = styled.form`
  fieldset{
    border: none;
  }

  legend{
    color: var(--titles);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 3.2rem;
  }

  input{
    width: 100%;
    height: 5.4rem;
    
    padding: 1.6rem;
    background-color: var(--background);
    border: none;
    border-radius: 6px;

    &::placeholder{
      color: var(--placeholder);
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 140%;
    }

  }

  input + input{
    margin-top: 1.6rem;
  }

  button[type="submit"]{
    width: 100%;
    height: 5.4rem;
    margin-top: 4rem;
    background-color: var(--green);
    color: var(--white);
    border-radius: 6px;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 160%;

    transition: ease-in-out 200ms;

    &:hover{
      background-color: var(--green-light);
    }
  }
`

export const TypeTransactionContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.4rem;
  gap: 1.6rem;
  height: 5.8rem;
`

export const RatioBox = styled.button<RatioBoxProps>`
  border-radius: 6px;
  background: ${({isActive,activeColor}) => (isActive ? colors[activeColor] : '#29292e')};
  display: flex;
  gap: .6rem;
  align-items: center;
  justify-content: center;

  span{
    color: var(--base-text)
  }

  &:hover{
    background-color: ${({isActive,activeColor}) => (isActive ? colors[activeColor] : '#323238')};
  }
`