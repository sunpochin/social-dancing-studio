import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
      <Link to="/expenses">Expenses</Link>
    </nav>
  );
}
