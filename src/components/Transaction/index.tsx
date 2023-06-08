import { Container } from "./style";

interface TransactionProps{
  description: string,
  price: number,
  category: string,
  date: string;
  type: 'Withdrawal' | 'Deposit',
}

export function Transaction({description, price, category, date, type,...rest}:TransactionProps){
  return(
    <Container type={type} {...rest}>
      <table>
        <tbody>
          <tr>
            <td className="description">{description}</td>
            <td className="price">{type === 'Withdrawal' ? `- R$ ${price}` :`R$ ${price}`}</td>
            <td className="category">{category}</td>
            <td className="date">{date}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}