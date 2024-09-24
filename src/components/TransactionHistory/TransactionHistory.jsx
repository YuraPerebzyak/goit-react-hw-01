import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_table}>
      <thead className={styles.transaction_thead}>
        <tr>
          <th className={styles.transaction_th}>Type</th>
          <th className={styles.transaction_th}>Amount</th>
          <th className={styles.transaction_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={styles.transaction_tr} key={item.id}>
            <td className={styles.transaction_td}>{item.type}</td>
            <td className={styles.transaction_td}>{item.amount}</td>
            <td className={styles.transaction_td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
