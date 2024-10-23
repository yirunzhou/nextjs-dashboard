import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '../ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoices, fetchRevenue, fetchCardData } from '../lib/data';
import { argv0 } from 'process';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();

    const test_var = 0
    // const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
    const numberOfInvoices = 0
    const numberOfCustomers = 0
    const totalPaidInvoices = 0
    const totalPendingInvoices = 0
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {<Card title="Collected" value={totalPaidInvoices} type="collected" />}
                {<Card title="Pending" value={totalPendingInvoices} type="pending" />}
                {<Card title="Total Invoices" value={numberOfInvoices} type="invoices" />}
                {<Card title="Total Customers" value={numberOfCustomers} type="customers" />}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {<RevenueChart revenue={revenue} />}
                {<LatestInvoices latestInvoices={latestInvoices} />}
            </div>
        </main>
    );
}
