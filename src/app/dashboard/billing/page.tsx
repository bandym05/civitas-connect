
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { accountStatements, paymentHistory } from '@/lib/data';
import { Download, FileText, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BillingPage() {
  const currentBalance = 75.50; // Mock data

  return (
    <div className="space-y-8">
    <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Billing & Payments</h1>
        <p className="text-lg text-muted-foreground mt-2">
        View your transaction history, download statements, and manage your payments.
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                Current Balance
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-4xl font-bold">E{currentBalance.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Due by August 31, 2024</p>
            <Button className="w-full mt-6">Pay Now</Button>
        </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Account Statements</CardTitle>
                <CardDescription>Download your official statements for your records.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {accountStatements.map(statement => (
                        <li key={statement.id} className="flex justify-between items-center p-3 rounded-md border bg-secondary/50">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="font-medium">{statement.period}</p>
                                    <p className="text-xs text-muted-foreground">Due: {statement.dueDate}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a href={statement.downloadUrl}><Download className="mr-2 h-4 w-4" /> Download</a>
                            </Button>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>

    <Card>
        <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>A record of all your past transactions.</CardDescription>
        </CardHeader>
        <CardContent>
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                <TableCell>{new Date(payment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
                <TableCell className="font-medium">{payment.description}</TableCell>
                <TableCell>E{payment.amount.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                    <Badge
                    className={cn({
                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': payment.status === 'Completed',
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': payment.status === 'Pending',
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': payment.status === 'Failed',
                    })}
                    >
                    {payment.status}
                    </Badge>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </CardContent>
    </Card>
    </div>
  );
}
