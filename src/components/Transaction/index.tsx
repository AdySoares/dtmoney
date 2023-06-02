import { Container } from "./style";

interface TransactionProps{
  description: string,
  price: number,
  category: string,
  date: string;
  cashOutflow?: boolean,
}

export function Transaction({description, price, category, date, cashOutflow,...rest}:TransactionProps){

  console.log(cashOutflow)
  return(
    <Container {...rest}>
      <table>
        <tbody>
          <tr>
            <td className="description">{description}</td>
            <td className={`price ${cashOutflow ? 'cashOutflow' : ''}`}>{cashOutflow ? `- R$ ${price}` :`R$ ${price}`}</td>
            <td className="category">{category}</td>
            <td className="date">{date}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}