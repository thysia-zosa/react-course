import TableBodyRow from "./TableBodyRow";

const TableBody = ({ yearlyData }) => {
  return (
    <tbody>
      {yearlyData.map((year) => (
        <TableBodyRow
          key={year.yearNumber}
          year={year.yearNumber}
          savings={year.savings}
          interest={year.interest}
          totalInterest={year.totalInterest}
          totalCapital={year.totalCapital}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
