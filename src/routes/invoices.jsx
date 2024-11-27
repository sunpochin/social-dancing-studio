import Nav from '../nav';
import { getInvoices } from '../data';
import { Link } from 'react-router-dom';

export default function Invoices() {
  const invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <h1>Invoices</h1>
      <Nav />
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
