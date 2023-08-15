const TableBodyRow = ({year, savings, interest, totalInterest, totalCapital}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>$ {savings}</td>
      <td>$ {interest}</td>
      <td>$ {totalInterest}</td>
      <td>$ {totalCapital}</td>
    </tr>
  )
}

export default TableBodyRow;