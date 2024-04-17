import styles from './Table.module.css';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = ({yearlyData}) => {
  return (
    <table className={styles.result}>
      <TableHead />
      <TableBody yearlyData={yearlyData} />
    </table>
  )
}

export default Table;