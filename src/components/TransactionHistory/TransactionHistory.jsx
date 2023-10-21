import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionHistoryBase}>
      <table className={css.transactionHistory}>
        <thead className={css.header}>
          <tr className={css.headerRow}>
            <th className={css.headerCell}>Type</th>
            <th className={css.headerCell}>Amount</th>
            <th className={css.headerCell}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tableRow}>
              <td className={css.tableCell}>{type}</td>
              <td className={css.tableCell}>{amount}</td>
              <td className={css.tableCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
