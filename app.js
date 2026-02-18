// Enhanced mock data with more customers
const mockCustomers = [
    {
        id: 'CUST001', name: 'Rushikesh Pathare', loanAmount: 500000, riskLevel: 'high', riskScore: 85,
        email: 'rajesh.kumar@email.com', phone: '+91-9876543210', accountNumber: 'ACC1234567890',
        loanType: 'Personal Loan', emiAmount: 15000, nextEmiDate: '2026-02-25', lastActivity: '2 hours ago',
        riskParameters: [
            { name: 'Payment History', score: 35, weight: 35, impact: 'high', description: 'Multiple missed payments detected' },
            { name: 'Income Stability', score: 25, weight: 25, impact: 'high', description: 'Salary delayed by 5 days' },
            { name: 'Debt-to-Income Ratio', score: 15, weight: 20, impact: 'medium', description: 'DTI ratio at 68%' },
            { name: 'Savings Behavior', score: 5, weight: 10, impact: 'high', description: '35% decline in savings' },
            { name: 'Credit Utilization', score: 5, weight: 10, impact: 'medium', description: 'High lending app usage' }
        ],
        riskFactors: [
            { type: 'critical', title: 'Salary Delay', description: 'Salary credited 5 days late - indicates employer issues or job instability' },
            { type: 'critical', title: 'Savings Depletion', description: 'Savings account balance decreased by 35% in 10 days' },
            { type: 'warning', title: 'Alternative Lending', description: '8 UPI transactions to lending apps detected' },
            { type: 'warning', title: 'Utility Payment Delay', description: 'Electricity bill paid 3 days late' },
            { type: 'critical', title: 'Spending Pattern Change', description: 'Discretionary spending reduced by 60%' },
            { type: 'warning', title: 'Cash Hoarding', description: 'ATM withdrawals increased by 150%' }
        ],
        recommendations: [
            { priority: 'high', title: 'Immediate Contact', description: 'Reach out within 24 hours to discuss payment options' },
            { priority: 'high', title: 'Payment Holiday', description: 'Offer 2-month EMI deferment to ease immediate pressure' },
            { priority: 'medium', title: 'Financial Counseling', description: 'Provide access to financial planning resources' },
            { priority: 'medium', title: 'Loan Restructuring', description: 'Consider extending loan tenure to reduce EMI burden' }
        ],
        riskHistory: [65, 68, 72, 75, 78, 82, 85],
        indicators: [
            { title: 'Salary Delay', value: 'Credited 5 days late', severity: 'danger' },
            { title: 'Savings Decline', value: '35% decrease in last 10 days', severity: 'danger' },
            { title: 'UPI to Lending Apps', value: '8 transactions detected', severity: 'warning' },
            { title: 'Utility Payment Delay', value: '3 days late', severity: 'warning' },
            { title: 'Discretionary Spending', value: 'Reduced by 60%', severity: 'danger' },
            { title: 'ATM Withdrawals', value: 'Increased by 150%', severity: 'danger' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-10', time: '09:15 AM', amount: 45000, category: 'credit', balance: 45000, reference: 'SAL/FEB/2026', channel: 'NEFT', status: 'Completed' },
            { type: 'UPI - MoneyTap', date: '2026-02-11', time: '10:30 AM', amount: -5000, category: 'debit', balance: 40000, reference: 'UPI/402938475', channel: 'UPI', status: 'Completed' },
            { type: 'Electricity Bill', date: '2026-02-12', time: '02:45 PM', amount: -2500, category: 'debit', balance: 37500, reference: 'BBPS/ELEC/9283', channel: 'BBPS', status: 'Completed' },
            { type: 'ATM Withdrawal', date: '2026-02-13', time: '11:20 PM', amount: -10000, category: 'debit', balance: 27500, reference: 'ATM/MH/4829', channel: 'ATM', status: 'Completed' },
            { type: 'UPI - CASHe', date: '2026-02-14', time: '08:15 AM', amount: -3000, category: 'debit', balance: 24500, reference: 'UPI/402948576', channel: 'UPI', status: 'Completed' },
            { type: 'Grocery - BigBasket', date: '2026-02-14', time: '06:30 PM', amount: -1500, category: 'debit', balance: 23000, reference: 'POS/BB/8392', channel: 'POS', status: 'Completed' },
            { type: 'ATM Withdrawal', date: '2026-02-15', time: '01:45 AM', amount: -8000, category: 'debit', balance: 15000, reference: 'ATM/MH/4830', channel: 'ATM', status: 'Completed' },
            { type: 'EMI Auto-debit', date: '2026-02-15', time: '03:00 AM', amount: 0, category: 'debit', balance: 15000, reference: 'NACH/FAIL/8293', channel: 'NACH', status: 'Failed' },
            { type: 'UPI - PaySense', date: '2026-02-15', time: '11:00 AM', amount: -2000, category: 'debit', balance: 13000, reference: 'UPI/402958677', channel: 'UPI', status: 'Completed' },
            { type: 'Mobile Recharge', date: '2026-02-15', time: '03:20 PM', amount: -599, category: 'debit', balance: 12401, reference: 'BBPS/MOB/9384', channel: 'BBPS', status: 'Completed' },
            { type: 'Food - Swiggy', date: '2026-02-15', time: '08:45 PM', amount: -450, category: 'debit', balance: 11951, reference: 'UPI/402968778', channel: 'UPI', status: 'Completed' },
            { type: 'ATM Withdrawal', date: '2026-02-16', time: '12:30 AM', amount: -5000, category: 'debit', balance: 6951, reference: 'ATM/MH/4831', channel: 'ATM', status: 'Completed' },
            { type: 'UPI - KreditBee', date: '2026-02-16', time: '09:15 AM', amount: -4000, category: 'debit', balance: 2951, reference: 'UPI/402978879', channel: 'UPI', status: 'Completed' },
            { type: 'Fuel - BPCL', date: '2026-02-16', time: '10:30 AM', amount: -1200, category: 'debit', balance: 1751, reference: 'POS/BPCL/9485', channel: 'POS', status: 'Completed' },
            { type: 'Insurance Premium', date: '2026-02-16', time: '11:00 AM', amount: 0, category: 'debit', balance: 1751, reference: 'NACH/FAIL/8294', channel: 'NACH', status: 'Failed' }
        ]
    },
    {
        id: 'CUST002', name: 'Priya Sharma', loanAmount: 750000, riskLevel: 'medium', riskScore: 55,
        email: 'priya.sharma@email.com', phone: '+91-9876543211', accountNumber: 'ACC1234567891',
        loanType: 'Home Loan', emiAmount: 22000, nextEmiDate: '2026-02-28', lastActivity: '1 day ago',
        riskParameters: [
            { name: 'Payment History', score: 15, weight: 35, impact: 'medium', description: 'Occasional delays in payments' },
            { name: 'Income Stability', score: 15, weight: 25, impact: 'medium', description: 'Salary delayed by 2 days' },
            { name: 'Debt-to-Income Ratio', score: 12, weight: 20, impact: 'low', description: 'DTI ratio at 45%' },
            { name: 'Savings Behavior', score: 8, weight: 10, impact: 'medium', description: '15% decline in savings' },
            { name: 'Credit Utilization', score: 5, weight: 10, impact: 'low', description: 'Moderate credit usage' }
        ],
        riskFactors: [
            { type: 'warning', title: 'Minor Salary Delay', description: 'Salary credited 2 days late this month' },
            { type: 'warning', title: 'Savings Decline', description: 'Savings decreased by 15% in last 10 days' },
            { type: 'info', title: 'Spending Reduction', description: 'Discretionary spending reduced by 25%' },
            { type: 'warning', title: 'Credit Card Usage', description: 'Credit card utilization increased by 40%' }
        ],
        recommendations: [
            { priority: 'medium', title: 'Proactive Outreach', description: 'Contact customer to check financial wellness' },
            { priority: 'low', title: 'Budget Planning', description: 'Offer financial planning tools and resources' },
            { priority: 'low', title: 'Monitor Closely', description: 'Increase monitoring frequency for next 30 days' }
        ],
        riskHistory: [42, 45, 48, 50, 52, 54, 55],
        indicators: [
            { title: 'Salary Delay', value: 'Credited 2 days late', severity: 'warning' },
            { title: 'Savings Decline', value: '15% decrease in last 10 days', severity: 'warning' },
            { title: 'Discretionary Spending', value: 'Reduced by 25%', severity: 'warning' },
            { title: 'Credit Card Usage', value: 'Increased by 40%', severity: 'warning' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-08', time: '09:00 AM', amount: 65000, category: 'credit', balance: 65000, reference: 'SAL/FEB/2026', channel: 'NEFT', status: 'Completed' },
            { type: 'EMI Payment', date: '2026-02-09', time: '03:00 AM', amount: -22000, category: 'debit', balance: 43000, reference: 'NACH/EMI/8295', channel: 'NACH', status: 'Completed' },
            { type: 'Grocery - DMart', date: '2026-02-10', time: '07:30 PM', amount: -3500, category: 'debit', balance: 39500, reference: 'POS/DM/9486', channel: 'POS', status: 'Completed' },
            { type: 'Electricity Bill', date: '2026-02-11', time: '11:15 AM', amount: -1800, category: 'debit', balance: 37700, reference: 'BBPS/ELEC/9284', channel: 'BBPS', status: 'Completed' },
            { type: 'Shopping - Amazon', date: '2026-02-13', time: '03:45 PM', amount: -5000, category: 'debit', balance: 32700, reference: 'UPI/402988980', channel: 'UPI', status: 'Completed' },
            { type: 'Credit Card Bill', date: '2026-02-14', time: '10:00 AM', amount: -8000, category: 'debit', balance: 24700, reference: 'NEFT/CC/9487', channel: 'NEFT', status: 'Completed' },
            { type: 'Fuel - HPCL', date: '2026-02-14', time: '06:20 PM', amount: -2000, category: 'debit', balance: 22700, reference: 'POS/HPCL/9488', channel: 'POS', status: 'Completed' },
            { type: 'Restaurant', date: '2026-02-15', time: '08:30 PM', amount: -1800, category: 'debit', balance: 20900, reference: 'POS/REST/9489', channel: 'POS', status: 'Completed' },
            { type: 'ATM Withdrawal', date: '2026-02-15', time: '11:45 PM', amount: -5000, category: 'debit', balance: 15900, reference: 'ATM/MH/4832', channel: 'ATM', status: 'Completed' },
            { type: 'Mobile Recharge', date: '2026-02-16', time: '09:30 AM', amount: -399, category: 'debit', balance: 15501, reference: 'BBPS/MOB/9385', channel: 'BBPS', status: 'Completed' }
        ]
    },
    {
        id: 'CUST003', name: 'Amit Patel', loanAmount: 300000, riskLevel: 'low', riskScore: 25,
        email: 'amit.patel@email.com', phone: '+91-9876543212', accountNumber: 'ACC1234567892',
        loanType: 'Car Loan', emiAmount: 12000, nextEmiDate: '2026-02-20', lastActivity: '3 hours ago',
        indicators: [
            { title: 'Salary Credit', value: 'On time', severity: 'normal' },
            { title: 'Savings Growth', value: '10% increase', severity: 'normal' },
            { title: 'Regular Payments', value: 'All on time', severity: 'normal' },
            { title: 'Healthy Cash Flow', value: 'Stable income pattern', severity: 'normal' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-05', amount: 55000, category: 'credit', balance: 55000 },
            { type: 'EMI Payment', date: '2026-02-06', amount: -12000, category: 'debit', balance: 43000 },
            { type: 'Savings Deposit', date: '2026-02-07', amount: -10000, category: 'debit', balance: 33000 },
            { type: 'Grocery', date: '2026-02-09', amount: -2500, category: 'debit', balance: 30500 },
            { type: 'Dining', date: '2026-02-12', amount: -1500, category: 'debit', balance: 29000 }
        ]
    },
    {
        id: 'CUST004', name: 'Sneha Reddy', loanAmount: 600000, riskLevel: 'high', riskScore: 78,
        email: 'sneha.reddy@email.com', phone: '+91-9876543213', accountNumber: 'ACC1234567893',
        loanType: 'Personal Loan', emiAmount: 18000, nextEmiDate: '2026-02-22', lastActivity: '5 hours ago',
        indicators: [
            { title: 'Multiple Failed Debits', value: '3 attempts failed', severity: 'danger' },
            { title: 'ATM Withdrawals', value: 'Increased by 200%', severity: 'danger' },
            { title: 'Savings Decline', value: '45% decrease', severity: 'danger' },
            { title: 'Late Night Transactions', value: 'Unusual pattern detected', severity: 'warning' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-12', amount: 48000, category: 'credit', balance: 48000 },
            { type: 'Failed Auto-debit', date: '2026-02-13', amount: 0, category: 'debit', balance: 48000 },
            { type: 'ATM Withdrawal', date: '2026-02-13', amount: -15000, category: 'debit', balance: 33000 },
            { type: 'ATM Withdrawal', date: '2026-02-14', amount: -12000, category: 'debit', balance: 21000 },
            { type: 'UPI - Lending App', date: '2026-02-15', amount: -8000, category: 'debit', balance: 13000 }
        ]
    },
    {
        id: 'CUST005', name: 'Vikram Singh', loanAmount: 450000, riskLevel: 'medium', riskScore: 48,
        email: 'vikram.singh@email.com', phone: '+91-9876543214', accountNumber: 'ACC1234567894',
        loanType: 'Business Loan', emiAmount: 16000, nextEmiDate: '2026-02-26', lastActivity: '6 hours ago',
        indicators: [
            { title: 'Utility Payment Delay', value: '2 days late', severity: 'warning' },
            { title: 'Discretionary Spending', value: 'Reduced by 30%', severity: 'warning' },
            { title: 'Business Income', value: 'Irregular pattern', severity: 'warning' }
        ],
        transactions: [
            { type: 'Business Income', date: '2026-02-07', amount: 70000, category: 'credit', balance: 70000 },
            { type: 'EMI Payment', date: '2026-02-08', amount: -16000, category: 'debit', balance: 54000 },
            { type: 'Business Expense', date: '2026-02-10', amount: -25000, category: 'debit', balance: 29000 },
            { type: 'Utility Bill', date: '2026-02-13', amount: -3000, category: 'debit', balance: 26000 }
        ]
    },
    {
        id: 'CUST006', name: 'Anita Desai', loanAmount: 350000, riskLevel: 'low', riskScore: 20,
        email: 'anita.desai@email.com', phone: '+91-9876543215', accountNumber: 'ACC1234567895',
        loanType: 'Education Loan', emiAmount: 11000, nextEmiDate: '2026-02-24', lastActivity: '1 day ago',
        indicators: [
            { title: 'Consistent Income', value: 'Regular salary credits', severity: 'normal' },
            { title: 'Healthy Savings', value: 'Stable balance', severity: 'normal' },
            { title: 'Good Payment History', value: '100% on-time payments', severity: 'normal' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-05', amount: 52000, category: 'credit', balance: 52000 },
            { type: 'EMI Payment', date: '2026-02-06', amount: -11000, category: 'debit', balance: 41000 },
            { type: 'Grocery', date: '2026-02-08', amount: -3000, category: 'debit', balance: 38000 },
            { type: 'Entertainment', date: '2026-02-11', amount: -2000, category: 'debit', balance: 36000 }
        ]
    },
    {
        id: 'CUST007', name: 'Karthik Menon', loanAmount: 850000, riskLevel: 'high', riskScore: 82,
        email: 'karthik.menon@email.com', phone: '+91-9876543216', accountNumber: 'ACC1234567896',
        loanType: 'Home Loan', emiAmount: 28000, nextEmiDate: '2026-02-21', lastActivity: '4 hours ago',
        indicators: [
            { title: 'Salary Not Credited', value: '7 days overdue', severity: 'danger' },
            { title: 'Overdraft Usage', value: 'Maxed out limit', severity: 'danger' },
            { title: 'Multiple Loan Inquiries', value: '5 in last week', severity: 'danger' }
        ],
        transactions: [
            { type: 'Overdraft', date: '2026-02-10', amount: 20000, category: 'credit', balance: 20000 },
            { type: 'Utility Bill', date: '2026-02-11', amount: -4500, category: 'debit', balance: 15500 },
            { type: 'ATM Withdrawal', date: '2026-02-12', amount: -10000, category: 'debit', balance: 5500 },
            { type: 'Failed EMI', date: '2026-02-13', amount: 0, category: 'debit', balance: 5500 }
        ]
    },
    {
        id: 'CUST008', name: 'Meera Iyer', loanAmount: 420000, riskLevel: 'medium', riskScore: 52,
        email: 'meera.iyer@email.com', phone: '+91-9876543217', accountNumber: 'ACC1234567897',
        loanType: 'Personal Loan', emiAmount: 14000, nextEmiDate: '2026-02-27', lastActivity: '8 hours ago',
        indicators: [
            { title: 'Credit Card Maxed', value: '95% utilization', severity: 'warning' },
            { title: 'Minimum Payments Only', value: 'Last 3 months', severity: 'warning' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-06', amount: 58000, category: 'credit', balance: 58000 },
            { type: 'EMI Payment', date: '2026-02-07', amount: -14000, category: 'debit', balance: 44000 },
            { type: 'Credit Card Bill', date: '2026-02-09', amount: -18000, category: 'debit', balance: 26000 }
        ]
    },
    {
        id: 'CUST009', name: 'Arjun Kapoor', loanAmount: 280000, riskLevel: 'low', riskScore: 18,
        email: 'arjun.kapoor@email.com', phone: '+91-9876543218', accountNumber: 'ACC1234567898',
        loanType: 'Car Loan', emiAmount: 10000, nextEmiDate: '2026-02-23', lastActivity: '2 days ago',
        indicators: [
            { title: 'Excellent Credit Score', value: '780+', severity: 'normal' },
            { title: 'Regular Savings', value: 'Monthly deposits', severity: 'normal' }
        ],
        transactions: [
            { type: 'Salary Credit', date: '2026-02-05', amount: 62000, category: 'credit', balance: 62000 },
            { type: 'EMI Payment', date: '2026-02-06', amount: -10000, category: 'debit', balance: 52000 },
            { type: 'Investment', date: '2026-02-08', amount: -15000, category: 'debit', balance: 37000 }
        ]
    },
    {
        id: 'CUST010', name: 'Divya Nair', loanAmount: 520000, riskLevel: 'high', riskScore: 76,
        email: 'divya.nair@email.com', phone: '+91-9876543219', accountNumber: 'ACC1234567899',
        loanType: 'Business Loan', emiAmount: 19000, nextEmiDate: '2026-02-24', lastActivity: '3 hours ago',
        indicators: [
            { title: 'Business Revenue Drop', value: '40% decline', severity: 'danger' },
            { title: 'Vendor Payment Delays', value: 'Multiple complaints', severity: 'danger' }
        ],
        transactions: [
            { type: 'Business Income', date: '2026-02-09', amount: 35000, category: 'credit', balance: 35000 },
            { type: 'Vendor Payment', date: '2026-02-10', amount: -20000, category: 'debit', balance: 15000 },
            { type: 'Failed EMI', date: '2026-02-11', amount: 0, category: 'debit', balance: 15000 }
        ]
    }
];

let currentFilter = 'all';
let selectedCustomer = null;
let riskChart = null;
let loanTypeChart = null;

// Initialize dashboard
function initDashboard() {
    updateMetrics();
    createCharts();
    populateAlerts();
    populateHighRiskTable();
    attachEventListeners();
}

// Update dashboard metrics
function updateMetrics() {
    // Simulate large banking portfolio
    const totalCustomers = 76890;
    const totalLoan = mockCustomers.reduce((sum, c) => sum + c.loanAmount, 0);
    const lowRisk = mockCustomers.filter(c => c.riskLevel === 'low').length;
    const mediumRisk = mockCustomers.filter(c => c.riskLevel === 'medium').length;
    const highRisk = mockCustomers.filter(c => c.riskLevel === 'high').length;
    const atRisk = 11157; // Total at-risk customers in the portfolio
    
    // Calculate total loan amount for entire portfolio (smaller values)
    const totalLoanAmount = 49000000; // ₹4.90 Crores
    const totalReceived = 38500000; // ₹3.85 Crores (78.5% collection rate)

    document.getElementById('total-customers').textContent = totalCustomers.toLocaleString();
    document.getElementById('at-risk-customers').textContent = atRisk.toLocaleString();
    document.getElementById('total-loan-amount').textContent = `₹${(totalLoanAmount / 10000000).toFixed(2)}Cr`;
    document.getElementById('total-received').textContent = `₹${(totalReceived / 10000000).toFixed(2)}Cr`;
    document.getElementById('low-risk-count').textContent = lowRisk;
    document.getElementById('medium-risk-count').textContent = mediumRisk;
    document.getElementById('high-risk-count').textContent = highRisk;
}

// Create charts
function createCharts() {
    const lowRisk = mockCustomers.filter(c => c.riskLevel === 'low').length;
    const mediumRisk = mockCustomers.filter(c => c.riskLevel === 'medium').length;
    const highRisk = mockCustomers.filter(c => c.riskLevel === 'high').length;

    // Risk Distribution Chart
    const riskCtx = document.getElementById('riskChart').getContext('2d');
    riskChart = new Chart(riskCtx, {
        type: 'doughnut',
        data: {
            labels: ['Low Risk', 'Medium Risk', 'High Risk'],
            datasets: [{
                data: [lowRisk, mediumRisk, highRisk],
                backgroundColor: ['#10B981', '#F59E0B', '#DC2626'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '70%',
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const filters = ['low', 'medium', 'high'];
                    showCustomerList(filters[index]);
                }
            }
        },
        plugins: [{
            id: 'percentageLabels',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                const dataset = chart.data.datasets[0];
                const total = dataset.data.reduce((a, b) => a + b, 0);
                
                chart.data.datasets.forEach((dataset, datasetIndex) => {
                    const meta = chart.getDatasetMeta(datasetIndex);
                    
                    meta.data.forEach((element, index) => {
                        const value = dataset.data[index];
                        const percentage = ((value / total) * 100).toFixed(1);
                        
                        // Only show percentage if it's significant (> 5%)
                        if (percentage > 5) {
                            const {x, y} = element.tooltipPosition();
                            
                            ctx.save();
                            ctx.font = 'bold 14px Arial';
                            ctx.fillStyle = '#fff';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(`${percentage}%`, x, y);
                            ctx.restore();
                        }
                    });
                });
            }
        }]
    });

    // Loan Type Distribution
    const loanTypes = {};
    const loanTypeCounts = {};
    mockCustomers.forEach(c => {
        loanTypes[c.loanType] = (loanTypes[c.loanType] || 0) + c.loanAmount;
        loanTypeCounts[c.loanType] = (loanTypeCounts[c.loanType] || 0) + 1;
    });

    const loanCtx = document.getElementById('loanTypeChart').getContext('2d');
    loanTypeChart = new Chart(loanCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(loanTypes),
            datasets: [{
                data: Object.values(loanTypes),
                backgroundColor: ['#00AEEF', '#003D6A', '#10B981', '#F59E0B', '#8B5CF6'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ₹${(value / 100000).toFixed(1)}L (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '65%',
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const loanType = Object.keys(loanTypes)[index];
                    showCustomerListByLoanType(loanType);
                }
            }
        },
        plugins: [{
            id: 'percentageLabels',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                const dataset = chart.data.datasets[0];
                const total = dataset.data.reduce((a, b) => a + b, 0);
                
                chart.data.datasets.forEach((dataset, datasetIndex) => {
                    const meta = chart.getDatasetMeta(datasetIndex);
                    
                    meta.data.forEach((element, index) => {
                        const value = dataset.data[index];
                        const percentage = ((value / total) * 100).toFixed(1);
                        
                        // Only show percentage if it's significant (> 5%)
                        if (percentage > 5) {
                            const {x, y} = element.tooltipPosition();
                            
                            ctx.save();
                            ctx.font = 'bold 13px Arial';
                            ctx.fillStyle = '#fff';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(`${percentage}%`, x, y);
                            ctx.restore();
                        }
                    });
                });
            }
        }]
    });
    
    // Populate loan type legend
    const loanLegend = document.getElementById('loan-type-legend');
    const colors = ['#00AEEF', '#003D6A', '#10B981', '#F59E0B', '#8B5CF6'];
    const totalLoanAmount = Object.values(loanTypes).reduce((a, b) => a + b, 0);
    
    loanLegend.innerHTML = Object.keys(loanTypes).map((type, index) => {
        const count = loanTypeCounts[type];
        const amount = loanTypes[type];
        const percentage = ((amount / totalLoanAmount) * 100).toFixed(1);
        return `
            <div class="legend-item clickable" onclick="showCustomerListByLoanType('${type}')">
                <span class="legend-dot" style="background: ${colors[index]}"></span>
                <div style="flex: 1;">
                    <div class="legend-label">${type}</div>
                    <div style="font-size: 11px; color: #6B7280; margin-top: 2px;">
                        ${count} customers • ₹${(amount / 100000).toFixed(1)}L • ${percentage}%
                    </div>
                </div>
                <span class="legend-value">${count}</span>
            </div>
        `;
    }).join('');
}

// Populate alerts
function populateAlerts() {
    const alertList = document.getElementById('alert-list');
    const highRiskCustomers = mockCustomers.filter(c => c.riskLevel === 'high').slice(0, 5);
    
    alertList.innerHTML = highRiskCustomers.map(c => `
        <div class="alert-item ${c.riskScore > 80 ? '' : 'warning'}">
            <div class="alert-customer">${c.name} (${c.id})</div>
            <div class="alert-message">${c.indicators[0].value} - Risk Score: ${c.riskScore}</div>
        </div>
    `).join('');
}

// Populate high-risk table
function populateHighRiskTable() {
    const tbody = document.getElementById('high-risk-table');
    const highRiskCustomers = mockCustomers.filter(c => c.riskLevel === 'high').slice(0, 4);
    
    tbody.innerHTML = highRiskCustomers.map(c => `
        <tr>
            <td><strong>${c.name}</strong><br><small style="color: #6B7280;">${c.id}</small></td>
            <td>${c.loanType}</td>
            <td>₹${(c.loanAmount / 100000).toFixed(1)}L</td>
            <td><strong style="color: #DC2626;">${c.riskScore}</strong></td>
            <td><span class="risk-badge risk-high">HIGH RISK</span></td>
            <td><button class="btn-view" onclick="showCustomerDetail('${c.id}')">View</button></td>
        </tr>
    `).join('');
}

// Attach event listeners
function attachEventListeners() {
    // Event listeners are now handled via onclick attributes in HTML
}

// Show customer list by loan type
function showCustomerListByLoanType(loanType) {
    const filteredCustomers = mockCustomers.filter(c => c.loanType === loanType);
    
    document.getElementById('list-title').textContent = `${loanType} Customers`;
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('customer-list-view').style.display = 'block';
    document.getElementById('customer-detail-view').style.display = 'none';

    renderCustomerTable(filteredCustomers);
}

// Show customer list
function showCustomerList(filter = 'all') {
    currentFilter = filter;
    const filteredCustomers = filter === 'all' 
        ? mockCustomers 
        : mockCustomers.filter(c => c.riskLevel === filter);

    const titles = {
        'all': 'All Customers',
        'low': 'Low Risk Customers',
        'medium': 'Medium Risk Customers',
        'high': 'High Risk Customers'
    };

    document.getElementById('list-title').textContent = titles[filter];
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('customer-list-view').style.display = 'block';
    document.getElementById('customer-detail-view').style.display = 'none';

    renderCustomerTable(filteredCustomers);
}

// Render customer table
function renderCustomerTable(customers) {
    const tbody = document.getElementById('customer-table-body');
    tbody.innerHTML = customers.map(c => `
        <tr>
            <td>${c.id}</td>
            <td><strong>${c.name}</strong></td>
            <td>${c.loanType}</td>
            <td>₹${(c.loanAmount / 100000).toFixed(1)}L</td>
            <td>₹${c.emiAmount.toLocaleString()}</td>
            <td><span class="risk-badge risk-${c.riskLevel}">${c.riskLevel.toUpperCase()}</span></td>
            <td><strong>${c.riskScore}</strong></td>
            <td>${c.lastActivity}</td>
            <td><button class="btn-view" onclick="showCustomerDetail('${c.id}')">View Details</button></td>
        </tr>
    `).join('');
}

// Show customer detail
function showCustomerDetail(customerId) {
    selectedCustomer = mockCustomers.find(c => c.id === customerId);
    if (!selectedCustomer) return;

    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('customer-list-view').style.display = 'none';
    document.getElementById('customer-detail-view').style.display = 'block';

    document.getElementById('customer-name').textContent = selectedCustomer.name;
    document.getElementById('customer-id-subtitle').textContent = `Customer ID: ${selectedCustomer.id}`;

    renderCustomerInfo();
    renderRiskAssessment();
    renderRiskIndicators();
    renderCustomerTransactionCharts();
    renderTransactions();
}

// Render customer info
function renderCustomerInfo() {
    const infoDiv = document.getElementById('customer-info');
    infoDiv.innerHTML = `
        <div class="info-row">
            <span class="info-label">Customer ID</span>
            <span class="info-value">${selectedCustomer.id}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Account Number</span>
            <span class="info-value">${selectedCustomer.accountNumber}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-value">${selectedCustomer.email}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Phone</span>
            <span class="info-value">${selectedCustomer.phone}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Account Status</span>
            <span class="info-value"><span class="risk-badge risk-low">ACTIVE</span></span>
        </div>
        <div class="info-row">
            <span class="info-label">Customer Since</span>
            <span class="info-value">Jan 2022</span>
        </div>
        <div class="info-row">
            <span class="info-label">Last Activity</span>
            <span class="info-value">${selectedCustomer.lastActivity}</span>
        </div>
    `;

    // Render Loan Details
    const loanDiv = document.getElementById('loan-details');
    loanDiv.innerHTML = `
        <div class="info-row">
            <span class="info-label">Loan Type</span>
            <span class="info-value">${selectedCustomer.loanType}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Loan Amount</span>
            <span class="info-value">₹${selectedCustomer.loanAmount.toLocaleString()}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Outstanding Balance</span>
            <span class="info-value">₹${(selectedCustomer.loanAmount * 0.75).toLocaleString()}</span>
        </div>
        <div class="info-row">
            <span class="info-label">EMI Amount</span>
            <span class="info-value">₹${selectedCustomer.emiAmount.toLocaleString()}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Interest Rate</span>
            <span class="info-value">12.5% p.a.</span>
        </div>
        <div class="info-row">
            <span class="info-label">Tenure</span>
            <span class="info-value">48 months</span>
        </div>
        <div class="info-row">
            <span class="info-label">Next EMI Date</span>
            <span class="info-value">${selectedCustomer.nextEmiDate}</span>
        </div>
    `;

    // Render Payment Performance
    const paymentDiv = document.getElementById('payment-performance');
    const onTimePayments = selectedCustomer.riskLevel === 'low' ? 95 : selectedCustomer.riskLevel === 'medium' ? 75 : 45;
    paymentDiv.innerHTML = `
        <div class="info-row">
            <span class="info-label">On-Time Payments</span>
            <span class="info-value">${onTimePayments}%</span>
        </div>
        <div class="info-row">
            <span class="info-label">Total EMIs Paid</span>
            <span class="info-value">24 / 48</span>
        </div>
        <div class="info-row">
            <span class="info-label">Missed Payments</span>
            <span class="info-value" style="color: ${selectedCustomer.riskLevel === 'high' ? '#DC2626' : '#10B981'}">${selectedCustomer.riskLevel === 'high' ? '3' : '0'}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Late Payments</span>
            <span class="info-value" style="color: ${selectedCustomer.riskLevel === 'medium' ? '#F59E0B' : '#10B981'}">${selectedCustomer.riskLevel === 'high' ? '5' : selectedCustomer.riskLevel === 'medium' ? '2' : '0'}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Last Payment Date</span>
            <span class="info-value">2026-01-15</span>
        </div>
        <div class="info-row">
            <span class="info-label">Payment Method</span>
            <span class="info-value">Auto-debit (NACH)</span>
        </div>
        <div class="info-row">
            <span class="info-label">DPD (Days Past Due)</span>
            <span class="info-value" style="color: ${selectedCustomer.riskLevel === 'high' ? '#DC2626' : '#10B981'}">${selectedCustomer.riskLevel === 'high' ? '15 days' : '0 days'}</span>
        </div>
    `;
}

// Render risk assessment

// Render risk indicators
function renderRiskIndicators() {
    const indicatorsDiv = document.getElementById('risk-indicators');
    indicatorsDiv.innerHTML = selectedCustomer.indicators.map(ind => `
        <div class="indicator-card ${ind.severity}">
            <div class="indicator-title">${ind.title}</div>
            <div class="indicator-value">${ind.value}</div>
        </div>
    `).join('');
}

// Render transactions

// Show dashboard

// Show NPA Dashboard
let npaTrendChart = null;
let npaSegmentChart = null;
let npaWaterfallChart = null;
let npaTrendViewMode = 'monthly';


// Show System Health Dashboard
function showSystemHealthDashboard() {
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('npa-dashboard-view').style.display = 'none';
    document.getElementById('system-health-view').style.display = 'block';
    document.getElementById('customer-list-view').style.display = 'none';
    document.getElementById('customer-detail-view').style.display = 'none';
    
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById('nav-system-health').classList.add('active');
    
    // Initialize System Health dashboard
    initSystemHealthDashboard();
}

function showDashboard() {
    // Stop system health auto-refresh when leaving the page
    if (systemHealthRefreshInterval) {
        clearInterval(systemHealthRefreshInterval);
        systemHealthRefreshInterval = null;
    }
    
    document.getElementById('dashboard-view').style.display = 'block';
    document.getElementById('npa-dashboard-view').style.display = 'none';
    document.getElementById('system-health-view').style.display = 'none';
    document.getElementById('customer-list-view').style.display = 'none';
    document.getElementById('customer-detail-view').style.display = 'none';
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector('.nav-item').classList.add('active');
}

function showNPADashboard() {
    // Stop system health auto-refresh when leaving the page
    if (systemHealthRefreshInterval) {
        clearInterval(systemHealthRefreshInterval);
        systemHealthRefreshInterval = null;
    }
    
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('npa-dashboard-view').style.display = 'block';
    document.getElementById('system-health-view').style.display = 'none';
    document.getElementById('customer-list-view').style.display = 'none';
    document.getElementById('customer-detail-view').style.display = 'none';
    
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById('nav-npa').classList.add('active');
    
    // Initialize NPA dashboard
    initNPADashboard();
}

function initSystemHealthDashboard() {
    // Only initialize once to avoid re-creating charts
    if (window.systemHealthInitialized) {
        return;
    }
    
    // Use setTimeout to defer heavy operations
    setTimeout(() => {
        // Initialize sparkline charts
        drawSparkline('sparkline-api', [165, 172, 180, 175, 182, 178, 180, 185, 177, 180]);
        drawSparkline('sparkline-etl', [4.1, 4.5, 4.3, 4.2, 4.6, 4.4, 4.3, 4.5, 4.2, 4.3]);
        drawSparkline('sparkline-inference', [210, 225, 220, 215, 230, 218, 220, 228, 215, 220]);
        drawSparkline('sparkline-lag', [5.2, 6.1, 5.8, 6.5, 5.9, 6.2, 6.0, 5.7, 6.3, 6.0]);
        
        // Initialize ML trend chart only once
        if (!window.mlTrendChart) {
            renderMLTrendChart();
        }
        
        // Mark as initialized
        window.systemHealthInitialized = true;
        
        // Start auto-refresh (every 30 seconds instead of 10)
        startSystemHealthAutoRefresh();
    }, 100);
}

// Draw sparkline chart
function drawSparkline(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 4;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Calculate min/max for scaling
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    // Calculate points
    const points = data.map((value, index) => {
        const x = padding + (index / (data.length - 1)) * (width - padding * 2);
        const y = height - padding - ((value - min) / range) * (height - padding * 2);
        return { x, y };
    });
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 174, 239, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 174, 239, 0.05)');
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.lineTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point, index) => {
        if (index > 0) {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.strokeStyle = '#00AEEF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw points
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00AEEF';
        ctx.fill();
    });
}

// Render ML Trend Chart (Lightweight version without Chart.js)
function renderMLTrendChart() {
    const canvas = document.getElementById('ml-trend-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 10;
    
    // Data points
    const data = [850, 920, 1850, 2100, 1950, 1200, 980];
    const labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'];
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Calculate min/max for scaling
    const min = 0;
    const max = Math.max(...data);
    const range = max - min;
    
    // Calculate points
    const points = data.map((value, index) => {
        const x = padding + (index / (data.length - 1)) * (width - padding * 2);
        const y = height - padding - ((value - min) / range) * (height - padding * 2);
        return { x, y, value };
    });
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 174, 239, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 174, 239, 0.05)');
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point, index) => {
        if (index > 0) {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.strokeStyle = '#00AEEF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw points
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00AEEF';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });
    
    // Store for potential future use
    window.mlTrendChart = true;
}

// Auto-refresh system health metrics
let systemHealthRefreshInterval = null;

function startSystemHealthAutoRefresh() {
    // Clear existing interval if any
    if (systemHealthRefreshInterval) {
        clearInterval(systemHealthRefreshInterval);
    }
    
    // Refresh every 30 seconds (reduced from 10 for better performance)
    systemHealthRefreshInterval = setInterval(() => {
        // Only refresh if the system health view is visible
        const systemHealthView = document.getElementById('system-health-view');
        if (systemHealthView && systemHealthView.style.display !== 'none') {
            refreshSystemHealthMetrics();
        }
    }, 30000);
}

function refreshSystemHealth() {
    // Trigger refresh animation
    const refreshIcon = document.getElementById('refresh-icon');
    if (refreshIcon) {
        refreshIcon.style.animation = 'none';
        setTimeout(() => {
            refreshIcon.style.animation = 'rotate-refresh 0.6s ease-in-out';
        }, 10);
    }
    
    // Refresh metrics
    refreshSystemHealthMetrics();
}

function refreshSystemHealthMetrics() {
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
        // Simulate metric fluctuations (±5% variation)
        const fluctuate = (baseValue, isInteger = false) => {
            const variation = (Math.random() - 0.5) * 0.1; // ±5%
            const newValue = baseValue * (1 + variation);
            return isInteger ? Math.round(newValue) : newValue;
        };
        
        // Update API Latency
        const apiLatency = fluctuate(180, true);
        document.getElementById('api-latency').textContent = `${apiLatency}ms`;
        
        // Update ETL Duration
        const etlDuration = fluctuate(4.3).toFixed(1);
        document.getElementById('etl-duration').textContent = `${etlDuration} mins`;
        
        // Update Inference Time
        const inferenceTime = fluctuate(220, true);
        document.getElementById('inference-time').textContent = `${inferenceTime}ms`;
        
        // Update Data Lag
        const dataLag = fluctuate(6.0).toFixed(0);
        document.getElementById('data-lag').textContent = `${dataLag} mins`;
        
        // Update Predictions Today
        const predictionsToday = fluctuate(12480, true);
        document.getElementById('predictions-today').textContent = predictionsToday.toLocaleString();
        
        // Redraw sparklines with slight variations (throttled)
        const generateFluctuatingData = (baseData) => {
            return baseData.map(val => fluctuate(val));
        };
        
        // Only redraw sparklines every other refresh to reduce load
        if (!window.sparklineSkipCount) window.sparklineSkipCount = 0;
        window.sparklineSkipCount++;
        
        if (window.sparklineSkipCount % 2 === 0) {
            drawSparkline('sparkline-api', generateFluctuatingData([165, 172, 180, 175, 182, 178, 180, 185, 177, 180]));
            drawSparkline('sparkline-etl', generateFluctuatingData([4.1, 4.5, 4.3, 4.2, 4.6, 4.4, 4.3, 4.5, 4.2, 4.3]));
            drawSparkline('sparkline-inference', generateFluctuatingData([210, 225, 220, 215, 230, 218, 220, 228, 215, 220]));
            drawSparkline('sparkline-lag', generateFluctuatingData([5.2, 6.1, 5.8, 6.5, 5.9, 6.2, 6.0, 5.7, 6.3, 6.0]));
        }
    });
}

function initNPADashboard() {
    updateNPAMetrics();
    renderNPATrendChart();
    renderNPASegmentChart();
    renderNPAWaterfallChart();
    renderPotentialNPATable();
}

function updateNPAMetrics() {
    // FIX 9: Fixed seed for consistent data
    // Calculate NPA metrics from mock data
    // ⚠️ BANKING-GRADE REALISTIC VALUES aligned with RBI IRACP norms
    // Gross NPA: 3.6% (realistic for stressed NBFC/bank)
    // Net NPA: 0.7% (after 82% provision coverage)
    // Total Loan Book: ₹4.90 Cr (portfolio size - FIXED)
    
    const totalLoanBook = 490000000; // FIX 3: ₹4.90 Cr total loan portfolio (matches dashboard)
    const grossNPARatio = 3.6; // 3.6% - realistic stressed portfolio
    const provisionCoverage = 82; // 82% provision coverage (above RBI 70% minimum)
    const netNPARatio = (grossNPARatio * (100 - provisionCoverage) / 100).toFixed(2); // 0.65%
    
    // Calculate NPA amounts
    const totalNPAAmount = (totalLoanBook * grossNPARatio / 100); // ₹0.176 Cr
    const netNPAAmount = (totalLoanBook * netNPARatio / 100);
    
    // FIX 3 & 10: Slippage and Upgrade (RBI terminology) - realistic monthly values
    const slippageAmount = 1800000; // ₹0.18 Cr (2 accounts slipped to NPA)
    const upgradeAmount = 2200000; // FIX 10: Use "Upgrade" not "Recovery" for NPA returning to standard
    const slippageCount = 2;
    const upgradeCount = 2;
    
    // Update UI with realistic values
    document.getElementById('npa-gross-ratio').textContent = `${grossNPARatio.toFixed(2)}%`;
    document.getElementById('npa-net-ratio').textContent = `${netNPARatio}%`;
    document.getElementById('npa-total-amount').textContent = `₹${(totalNPAAmount / 10000000).toFixed(2)}Cr`;
    document.getElementById('npa-slippage').textContent = `₹${(slippageAmount / 10000000).toFixed(2)}Cr`;
    document.getElementById('npa-recovery').textContent = `₹${(upgradeAmount / 10000000).toFixed(2)}Cr`;
    document.getElementById('npa-provision').textContent = `${provisionCoverage}%`;
    
    // FIX 6: Correct arrow direction - rising NPA is bad (upward arrow in red)
    const grossTrend = 0.2; // +0.2% vs last month (deterioration)
    document.getElementById('npa-gross-trend').innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        +${grossTrend.toFixed(1)}% vs last month
    `;
    
    // FIX 7: Net NPA consistency - show percentage change
    document.getElementById('npa-net-trend').textContent = '0.0% vs last month • Stable';
    
    document.getElementById('npa-slippage-count').innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        ${slippageCount} accounts
    `;
    
    document.getElementById('npa-recovery-count').innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        ${upgradeCount} accounts
    `;
}

function renderNPATrendChart() {
    const ctx = document.getElementById('npaTrendChart').getContext('2d');
    
    if (npaTrendChart) {
        npaTrendChart.destroy();
    }
    
    // FIX 9: Fixed seed for consistent data
    // Generate 12 months of REALISTIC NPA data
    // Banking-grade gradual movement (NOT steep spikes)
    const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    
    // Gross NPA: Gradual increase from 2.8% to 3.6% (realistic stress)
    const grossNPA = [2.8, 2.9, 3.0, 3.1, 3.0, 3.2, 3.3, 3.4, 3.2, 3.3, 3.5, 3.6];
    
    // Net NPA: Always below Gross, gradual movement
    const netNPA = [0.50, 0.52, 0.54, 0.56, 0.54, 0.58, 0.60, 0.62, 0.58, 0.60, 0.63, 0.65];
    
    // FIX 5: Predicted values with uncertainty bands
    const predictedGross = [null, null, null, null, null, null, null, null, null, null, 3.5, 3.7];
    const predictedNet = [null, null, null, null, null, null, null, null, null, null, 0.63, 0.67];
    
    // FIX 5: Uncertainty bands (±0.2%)
    const predictedGrossUpper = [null, null, null, null, null, null, null, null, null, null, 3.7, 3.9];
    const predictedGrossLower = [null, null, null, null, null, null, null, null, null, null, 3.3, 3.5];
    const predictedNetUpper = [null, null, null, null, null, null, null, null, null, null, 0.83, 0.87];
    const predictedNetLower = [null, null, null, null, null, null, null, null, null, null, 0.43, 0.47];
    
    npaTrendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                // FIX 5: Uncertainty bands (shaded areas)
                {
                    label: 'Forecast Uncertainty',
                    data: predictedGrossUpper,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    fill: '+1',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 0,
                    order: 5
                },
                {
                    label: 'Forecast Lower',
                    data: predictedGrossLower,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 0,
                    order: 6
                },
                // FIX 5: Actual lines - solid with filled dots
                {
                    label: 'Gross NPA %',
                    data: grossNPA,
                    borderColor: '#DC2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#DC2626',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    order: 1
                },
                {
                    label: 'Net NPA %',
                    data: netNPA,
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#F59E0B',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    order: 2
                },
                // FIX 5: Predicted lines - dashed with hollow dots
                {
                    label: 'Predicted Gross NPA %',
                    data: predictedGross,
                    borderColor: '#DC2626',
                    backgroundColor: 'transparent',
                    tension: 0.4,
                    fill: false,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#DC2626',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    borderDash: [8, 4],
                    order: 3
                },
                {
                    label: 'Predicted Net NPA %',
                    data: predictedNet,
                    borderColor: '#F59E0B',
                    backgroundColor: 'transparent',
                    tension: 0.4,
                    fill: false,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#F59E0B',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    borderDash: [8, 4],
                    order: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 15,
                        font: { size: 11, weight: '600' },
                        color: '#374151',
                        filter: function(item) {
                            // Hide uncertainty band datasets from legend
                            return item.text !== 'Forecast Uncertainty' && item.text !== 'Forecast Lower';
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 61, 106, 0.95)',
                    padding: 14,
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    bodySpacing: 8,
                    borderColor: '#00AEEF',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) return null;
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`;
                        },
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            if (index === 10 || index === 11) {
                                return '\n📊 Projected based on current trends';
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 6, // ✅ CRITICAL FIX: 0-6% range (realistic)
                    ticks: {
                        stepSize: 1,
                        font: { size: 11, weight: '500' },
                        color: '#6B7280',
                        padding: 8,
                        callback: function(value) {
                            return value.toFixed(1) + '%';
                        }
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11, weight: '500' },
                        color: '#374151',
                        padding: 8
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

function renderNPASegmentChart() {
    const ctx = document.getElementById('npaSegmentChart').getContext('2d');
    
    if (npaSegmentChart) {
        npaSegmentChart.destroy();
    }
    
    // Segment-wise NPA data
    const segments = {
        'Retail': { npaAmount: 120000000, exposure: 1500000000, count: 45 },
        'SME': { npaAmount: 85000000, exposure: 1200000000, count: 28 },
        'Agriculture': { npaAmount: 25000000, exposure: 400000000, count: 12 },
        'Corporate': { npaAmount: 15000000, exposure: 900000000, count: 5 }
    };
    
    const segmentNames = Object.keys(segments);
    const npaAmounts = segmentNames.map(s => segments[s].npaAmount);
    const colors = ['#DC2626', '#F59E0B', '#10B981', '#00AEEF'];
    
    npaSegmentChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: segmentNames,
            datasets: [{
                data: npaAmounts,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const segment = segmentNames[context.dataIndex];
                            const data = segments[segment];
                            const npaRatio = ((data.npaAmount / data.exposure) * 100).toFixed(2);
                            return [
                                `${segment}`,
                                `NPA: ₹${(data.npaAmount / 10000000).toFixed(1)}Cr`,
                                `NPA Ratio: ${npaRatio}%`,
                                `Accounts: ${data.count}`
                            ];
                        }
                    }
                }
            },
            cutout: '70%',
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const segment = segmentNames[index];
                    alert(`Drill down to ${segment} NPA accounts`);
                }
            }
        },
        plugins: [{
            id: 'percentageLabels',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                const dataset = chart.data.datasets[0];
                const total = dataset.data.reduce((a, b) => a + b, 0);
                
                chart.data.datasets.forEach((dataset, datasetIndex) => {
                    const meta = chart.getDatasetMeta(datasetIndex);
                    
                    meta.data.forEach((element, index) => {
                        const value = dataset.data[index];
                        const percentage = ((value / total) * 100).toFixed(1);
                        
                        if (percentage > 5) {
                            const {x, y} = element.tooltipPosition();
                            
                            ctx.save();
                            ctx.font = 'bold 13px Arial';
                            ctx.fillStyle = '#fff';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(`${percentage}%`, x, y);
                            ctx.restore();
                        }
                    });
                });
            }
        }]
    });
    
    // Populate segment legend
    const legend = document.getElementById('npa-segment-legend');
    const totalNPA = npaAmounts.reduce((a, b) => a + b, 0);
    
    legend.innerHTML = segmentNames.map((segment, index) => {
        const data = segments[segment];
        const npaRatio = ((data.npaAmount / data.exposure) * 100).toFixed(2);
        const contribution = ((data.npaAmount / totalNPA) * 100).toFixed(1);
        
        return `
            <div class="legend-item clickable" onclick="alert('Drill down to ${segment} NPA accounts')">
                <span class="legend-dot" style="background: ${colors[index]}"></span>
                <div style="flex: 1;">
                    <div class="legend-label">${segment}</div>
                    <div style="font-size: 11px; color: #6B7280; margin-top: 2px;">
                        ${data.count} accounts • NPA: ${npaRatio}% • ${contribution}% of total
                    </div>
                </div>
                <span class="legend-value">${data.count}</span>
            </div>
        `;
    }).join('');
}

function renderNPAWaterfallChart() {
    const ctx = document.getElementById('npaWaterfallChart').getContext('2d');
    
    if (npaWaterfallChart) {
        npaWaterfallChart.destroy();
    }
    
    // FIX 3 & 9: Waterfall data scaled to match ₹4.90Cr portfolio (fixed values)
    const openingNPA = 4.20; // ₹4.20Cr
    const newSlippages = 0.18; // +₹0.18Cr (red bar, upward)
    const upgrades = -0.22; // FIX 10: -₹0.22Cr (green bar, downward) - use "Upgrade" terminology
    const writeOffs = -0.05; // -₹0.05Cr (yellow bar, downward)
    const closingNPA = 4.11; // ₹4.11Cr (dark blue bar)
    
    npaWaterfallChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Opening NPA', 'New Slippages', 'Upgrades', 'Write-offs', 'Closing NPA'],
            datasets: [{
                label: 'NPA Movement (₹Cr)',
                data: [openingNPA, newSlippages, upgrades, writeOffs, closingNPA],
                backgroundColor: [
                    '#6B7280', // Opening - gray
                    '#DC2626', // Slippages - red
                    '#10B981', // Upgrades - green
                    '#F59E0B', // Write-offs - yellow
                    '#003D6A'  // Closing - dark blue
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            const label = context.label;
                            // FIX 10: Use RBI terminology
                            if (label === 'Upgrades') {
                                return `Upgrades (NPA to Standard): ₹${Math.abs(value).toFixed(2)}Cr`;
                            }
                            return `Amount: ₹${Math.abs(value).toFixed(2)}Cr`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5, // FIX 3: Scale to match portfolio
                    ticks: {
                        font: { size: 11, weight: '500' },
                        color: '#6B7280',
                        callback: function(value) {
                            return '₹' + value.toFixed(1) + 'Cr';
                        }
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11, weight: '500' },
                        color: '#374151'
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
        plugins: [{
            id: 'waterfallLabels',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(0);
                
                ctx.save();
                ctx.font = 'bold 11px Inter, Arial';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#003D6A';
                
                meta.data.forEach((bar, index) => {
                    const value = chart.data.datasets[0].data[index];
                    const label = `₹${Math.abs(value).toFixed(2)}Cr`;
                    ctx.fillText(label, bar.x, bar.y - 8);
                });
                
                ctx.restore();
            }
        }]
    });
}

function renderPotentialNPATable() {
    // FIX 9: Use seeded random for consistent data
    let tableSeed = 99999;
    function tableSeededRandom() {
        tableSeed = (tableSeed * 9301 + 49297) % 233280;
        return tableSeed / 233280;
    }
    
    // Filter high-risk customers with high miss probability
    const potentialNPAs = mockCustomers.filter(c => c.riskLevel === 'high' && c.riskScore >= 70);
    
    document.getElementById('potential-npa-count').textContent = `${potentialNPAs.length} Accounts`;
    
    const tbody = document.getElementById('potential-npa-table');
    tbody.innerHTML = potentialNPAs.map((c, index) => {
        // FIX 9: Fixed days to EMI based on index for consistency
        const daysToEMI = Math.floor((index * 7 + 3) % 28) + 1; // Varies between 1-28 days
        const missProbability = c.riskScore;
        
        // FIX 1 & 2: Calculate SMA stage and Days to NPA
        let smaStage = 'Pre-SMA';
        let smaClass = 'sma-pre';
        let daysToNPA = daysToEMI + 90; // FIX 2: Days to EMI + 90 days = Days to NPA
        
        // FIX 1: SMA Classification based on RBI IRACP norms
        // Pre-SMA: Not yet overdue (blue)
        // SMA-0: 1-30 days overdue (yellow)
        // SMA-1: 31-60 days overdue (orange)
        // SMA-2: 61-90 days overdue (red)
        // NPA: 90+ days overdue (dark red)
        
        // For pre-delinquency customers, all are Pre-SMA
        smaStage = 'Pre-SMA';
        smaClass = 'sma-pre';
        
        return `
            <tr>
                <td><strong>${c.id}</strong></td>
                <td>${c.name}</td>
                <td>${c.loanType}</td>
                <td>₹${(c.loanAmount * 0.75 / 100000).toFixed(1)}L</td>
                <td>₹${c.emiAmount.toLocaleString()}</td>
                <td>${c.nextEmiDate}</td>
                <td><strong style="color: ${daysToEMI <= 7 ? '#DC2626' : '#F59E0B'}">${daysToEMI} days</strong></td>
                <td><span class="sma-badge ${smaClass}">${smaStage}</span></td>
                <td><strong style="color: #F59E0B;">${daysToNPA} days</strong></td>
                <td><strong style="color: #DC2626;">${missProbability}%</strong></td>
                <td><span class="risk-badge risk-high">CRITICAL</span></td>
                <td><button class="btn-view" onclick="showCustomerDetail('${c.id}')">Intervene</button></td>
            </tr>
        `;
    }).join('');
}

function filterPotentialNPA() {
    const filter = document.getElementById('potential-npa-filter').value;
    // Implement filtering logic based on selected filter
    renderPotentialNPATable();
}

function toggleNPATrendView() {
    npaTrendViewMode = npaTrendViewMode === 'monthly' ? 'quarterly' : 'monthly';
    document.getElementById('npa-trend-toggle-text').textContent = 
        npaTrendViewMode === 'monthly' ? 'Switch to Quarterly' : 'Switch to Monthly';
    renderNPATrendChart();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDashboard);


// Risk Modal Functions
let riskHistoryChart = null;

function openRiskModal() {
    if (!selectedCustomer) return;
    
    document.getElementById('risk-modal').style.display = 'flex';
    document.getElementById('modal-risk-score').textContent = selectedCustomer.riskScore;
    
    const levelBadge = document.getElementById('modal-risk-level');
    levelBadge.textContent = selectedCustomer.riskLevel.toUpperCase();
    levelBadge.className = `risk-badge risk-${selectedCustomer.riskLevel}`;
    
    renderRiskParameters();
    renderRiskFactors();
    renderRecommendations();
    renderRiskHistoryChart();
}

function closeRiskModal() {
    document.getElementById('risk-modal').style.display = 'none';
    if (riskHistoryChart) {
        riskHistoryChart.destroy();
        riskHistoryChart = null;
    }
}

function renderRiskParameters() {
    const grid = document.getElementById('risk-parameters-grid');
    if (!selectedCustomer.riskParameters) {
        grid.innerHTML = '<p>No risk parameters available</p>';
        return;
    }
    
    grid.innerHTML = selectedCustomer.riskParameters.map(param => {
        const percentage = (param.score / param.weight) * 100;
        const impactClass = param.impact === 'high' ? 'high' : param.impact === 'medium' ? 'medium' : 'low';
        
        return `
            <div class="parameter-item ${param.impact}-impact">
                <div class="parameter-header">
                    <span class="parameter-name">${param.name}</span>
                    <span class="parameter-score">${param.score}/${param.weight}</span>
                </div>
                <div class="parameter-bar">
                    <div class="parameter-bar-fill ${impactClass}" style="width: ${percentage}%"></div>
                </div>
                <div class="parameter-description">${param.description}</div>
            </div>
        `;
    }).join('');
}

function renderRiskFactors() {
    const list = document.getElementById('risk-factors-list');
    if (!selectedCustomer.riskFactors) {
        list.innerHTML = '<p>No risk factors available</p>';
        return;
    }
    
    list.innerHTML = selectedCustomer.riskFactors.map((factor, index) => `
        <div class="factor-item">
            <div class="factor-icon ${factor.type}">
                ${index + 1}
            </div>
            <div class="factor-content">
                <div class="factor-title">${factor.title}</div>
                <div class="factor-description">${factor.description}</div>
            </div>
        </div>
    `).join('');
}

function renderRecommendations() {
    const list = document.getElementById('recommendations-list');
    if (!selectedCustomer.recommendations) {
        list.innerHTML = '<p>No recommendations available</p>';
        return;
    }
    
    list.innerHTML = selectedCustomer.recommendations.map(rec => `
        <div class="recommendation-item">
            <svg class="recommendation-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
            <div class="recommendation-content">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <div class="recommendation-title">${rec.title}</div>
                    <span class="recommendation-priority ${rec.priority}">${rec.priority}</span>
                </div>
                <div class="recommendation-description">${rec.description}</div>
            </div>
        </div>
    `).join('');
}

function renderRiskHistoryChart() {
    const ctx = document.getElementById('riskHistoryChart').getContext('2d');
    
    if (riskHistoryChart) {
        riskHistoryChart.destroy();
    }
    
    const history = selectedCustomer.riskHistory || [selectedCustomer.riskScore];
    const labels = history.map((_, i) => `Week ${i + 1}`);
    
    riskHistoryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Risk Score',
                data: history,
                borderColor: '#DC2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Risk Score: ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value;
                        }
                    }
                }
            }
        }
    });
}

// Update renderRiskAssessment to make meter clickable
function renderRiskAssessment() {
    const badge = document.getElementById('risk-score-badge');
    badge.textContent = selectedCustomer.riskScore;
    badge.style.background = selectedCustomer.riskLevel === 'high' ? '#DC2626' : 
                             selectedCustomer.riskLevel === 'medium' ? '#F59E0B' : '#10B981';

    const meterDiv = document.getElementById('risk-meter');
    meterDiv.innerHTML = `
        <div class="meter-circle" style="--risk-percent: ${selectedCustomer.riskScore}%" onclick="openRiskModal()">
            <div class="meter-inner">
                <div class="meter-score">${selectedCustomer.riskScore}</div>
                <div class="meter-label">Risk Score</div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 10px; font-size: 12px; color: #6B7280;">Click to view detailed analysis</p>
    `;

    const summaryDiv = document.getElementById('risk-summary');
    summaryDiv.innerHTML = `
        <div class="info-row">
            <span class="info-label">Risk Level</span>
            <span class="info-value"><span class="risk-badge risk-${selectedCustomer.riskLevel}">${selectedCustomer.riskLevel.toUpperCase()}</span></span>
        </div>
        <div class="info-row">
            <span class="info-label">Last Assessment</span>
            <span class="info-value">${selectedCustomer.lastActivity}</span>
        </div>
    `;
}


// Transaction Modal Functions
let selectedTransaction = null;

function openTransactionModal(transaction) {
    selectedTransaction = transaction;
    document.getElementById('transaction-modal').style.display = 'flex';
    
    // Set amount and type
    const amountDisplay = document.getElementById('txn-amount');
    const amountClass = transaction.category === 'credit' ? 'credit' : 'debit';
    amountDisplay.className = `txn-amount-large ${amountClass}`;
    amountDisplay.textContent = `${transaction.amount >= 0 ? '+' : ''}₹${Math.abs(transaction.amount).toLocaleString()}`;
    
    document.getElementById('txn-type').textContent = transaction.type;
    
    // Set status badge
    const statusBadge = document.getElementById('txn-status-badge');
    const statusClass = transaction.status === 'Failed' ? 'risk-high' : 'risk-low';
    statusBadge.className = `risk-badge ${statusClass}`;
    statusBadge.textContent = transaction.status.toUpperCase();
    
    renderTransactionBasicInfo(transaction);
    renderTransactionPaymentInfo(transaction);
    renderTransactionAccountInfo(transaction);
    renderTransactionAdditionalInfo(transaction);
    renderTransactionTimeline(transaction);
}

function closeTransactionModal() {
    document.getElementById('transaction-modal').style.display = 'none';
    selectedTransaction = null;
}

function renderTransactionBasicInfo(txn) {
    const container = document.getElementById('txn-basic-info');
    container.innerHTML = `
        <div class="txn-info-item">
            <span class="txn-info-label">Transaction ID</span>
            <span class="txn-info-value monospace">${txn.reference}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Date</span>
            <span class="txn-info-value">${txn.date}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Time</span>
            <span class="txn-info-value">${txn.time}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Type</span>
            <span class="txn-info-value">${txn.type}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Category</span>
            <span class="txn-info-value">${txn.category === 'credit' ? 'Credit' : 'Debit'}</span>
        </div>
    `;
}

function renderTransactionPaymentInfo(txn) {
    const container = document.getElementById('txn-payment-info');
    
    // Generate additional payment details based on channel
    let paymentMethod = '';
    let processingBank = '';
    let merchantInfo = '';
    
    switch(txn.channel) {
        case 'UPI':
            paymentMethod = 'Unified Payments Interface';
            processingBank = 'NPCI';
            merchantInfo = txn.type.includes('-') ? txn.type.split('-')[1].trim() : 'N/A';
            break;
        case 'NEFT':
            paymentMethod = 'National Electronic Funds Transfer';
            processingBank = 'Reserve Bank of India';
            merchantInfo = 'Bank Transfer';
            break;
        case 'ATM':
            paymentMethod = 'Automated Teller Machine';
            processingBank = 'Barclays Bank';
            merchantInfo = txn.reference.split('/')[1] || 'N/A';
            break;
        case 'POS':
            paymentMethod = 'Point of Sale';
            processingBank = 'Visa/Mastercard Network';
            merchantInfo = txn.type.includes('-') ? txn.type.split('-')[1].trim() : 'Merchant';
            break;
        case 'NACH':
            paymentMethod = 'National Automated Clearing House';
            processingBank = 'NPCI';
            merchantInfo = 'Auto-debit Mandate';
            break;
        case 'BBPS':
            paymentMethod = 'Bharat Bill Payment System';
            processingBank = 'NPCI';
            merchantInfo = 'Bill Payment';
            break;
        default:
            paymentMethod = txn.channel;
            processingBank = 'N/A';
            merchantInfo = 'N/A';
    }
    
    container.innerHTML = `
        <div class="txn-info-item">
            <span class="txn-info-label">Channel</span>
            <span class="txn-info-value">${txn.channel}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Payment Method</span>
            <span class="txn-info-value">${paymentMethod}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Processing Network</span>
            <span class="txn-info-value">${processingBank}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Merchant/Payee</span>
            <span class="txn-info-value">${merchantInfo}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Transaction Fee</span>
            <span class="txn-info-value">₹0.00</span>
        </div>
    `;
}

function renderTransactionAccountInfo(txn) {
    const container = document.getElementById('txn-account-info');
    container.innerHTML = `
        <div class="txn-info-item">
            <span class="txn-info-label">Account Number</span>
            <span class="txn-info-value monospace">${selectedCustomer.accountNumber}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Account Holder</span>
            <span class="txn-info-value">${selectedCustomer.name}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Opening Balance</span>
            <span class="txn-info-value">₹${(txn.balance - txn.amount).toLocaleString()}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Transaction Amount</span>
            <span class="txn-info-value">${txn.amount >= 0 ? '+' : ''}₹${Math.abs(txn.amount).toLocaleString()}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Closing Balance</span>
            <span class="txn-info-value">₹${txn.balance.toLocaleString()}</span>
        </div>
    `;
}

function renderTransactionAdditionalInfo(txn) {
    const container = document.getElementById('txn-additional-info');
    
    // Generate location based on channel
    let location = 'Online';
    if (txn.channel === 'ATM') {
        location = 'Mumbai, Maharashtra';
    } else if (txn.channel === 'POS') {
        location = 'Bangalore, Karnataka';
    }
    
    // Generate device info
    let deviceInfo = 'N/A';
    if (txn.channel === 'UPI') {
        deviceInfo = 'Mobile App - Android';
    } else if (txn.channel === 'ATM') {
        deviceInfo = 'ATM Terminal';
    } else if (txn.channel === 'POS') {
        deviceInfo = 'POS Terminal';
    } else {
        deviceInfo = 'Web Browser - Chrome';
    }
    
    container.innerHTML = `
        <div class="txn-info-item">
            <span class="txn-info-label">Status</span>
            <span class="txn-info-value">${txn.status}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Location</span>
            <span class="txn-info-value">${location}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Device</span>
            <span class="txn-info-value">${deviceInfo}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">IP Address</span>
            <span class="txn-info-value monospace">${txn.channel === 'ATM' ? 'N/A' : '103.21.58.142'}</span>
        </div>
        <div class="txn-info-item">
            <span class="txn-info-label">Remarks</span>
            <span class="txn-info-value">${txn.status === 'Failed' ? 'Insufficient Balance' : 'Transaction Successful'}</span>
        </div>
    `;
}

function renderTransactionTimeline(txn) {
    const container = document.getElementById('txn-timeline');
    
    // Generate timeline based on status
    let timelineItems = [];
    
    if (txn.status === 'Completed') {
        timelineItems = [
            { title: 'Transaction Initiated', time: txn.time, status: 'completed' },
            { title: 'Authentication Successful', time: getTimeOffset(txn.time, 1), status: 'completed' },
            { title: 'Payment Processing', time: getTimeOffset(txn.time, 2), status: 'completed' },
            { title: 'Transaction Completed', time: getTimeOffset(txn.time, 3), status: 'completed' }
        ];
    } else {
        timelineItems = [
            { title: 'Transaction Initiated', time: txn.time, status: 'completed' },
            { title: 'Authentication Successful', time: getTimeOffset(txn.time, 1), status: 'completed' },
            { title: 'Payment Processing', time: getTimeOffset(txn.time, 2), status: 'completed' },
            { title: 'Transaction Failed - Insufficient Balance', time: getTimeOffset(txn.time, 3), status: 'failed' }
        ];
    }
    
    container.innerHTML = timelineItems.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot ${item.status}"></div>
            <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-time">${txn.date} ${item.time}</div>
            </div>
        </div>
    `).join('');
}

function getTimeOffset(timeStr, seconds) {
    // Simple time offset calculation for demo
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    let totalSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + seconds;
    
    const newHours = Math.floor(totalSeconds / 3600) % 12 || 12;
    const newMinutes = Math.floor((totalSeconds % 3600) / 60);
    const newSeconds = totalSeconds % 60;
    
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')} ${period}`;
}

// Update renderTransactions to make rows clickable
function renderTransactions() {
    const tbody = document.getElementById('transactions-list');
    tbody.innerHTML = selectedCustomer.transactions.map((t, index) => {
        const statusClass = t.status === 'Failed' ? 'risk-high' : 'risk-low';
        const statusText = t.status === 'Failed' ? 'FAILED' : 'SUCCESS';
        
        return `
        <tr onclick='openTransactionModal(${JSON.stringify(t).replace(/'/g, "&apos;")})'>
            <td>
                <strong>${t.date}</strong><br>
                <small style="color: #6B7280;">${t.time}</small>
            </td>
            <td><strong>${t.type}</strong></td>
            <td><span style="font-family: monospace; font-size: 12px; color: #6B7280;">${t.reference}</span></td>
            <td><span class="risk-badge risk-medium">${t.channel}</span></td>
            <td class="transaction-amount ${t.category}"><strong>${t.amount >= 0 ? '+' : ''}₹${Math.abs(t.amount).toLocaleString()}</strong></td>
            <td><strong>₹${t.balance.toLocaleString()}</strong></td>
            <td><span class="risk-badge ${statusClass}">${statusText}</span></td>
        </tr>
    `;
    }).join('');
}


// Customer Transaction Charts
let customer6MonthChart = null;
let customerCurrentMonthChart = null;
let selectedMonthRange = 6;

function generateTransactionAmounts(months, riskLevel) {
    // Determine granularity based on month range
    let periods, periodType, labelsArray;
    
    if (months === 1) {
        // Daily data for 1 month (30 days) - REALISTIC PATTERN
        periods = 30;
        periodType = 'daily';
        labelsArray = Array.from({length: 30}, (_, i) => `Day ${i + 1}`);
        
        // Generate REALISTIC daily credit and debit patterns
        return generateRealisticDailyData(periods, riskLevel);
    } else if (months <= 3) {
        // Weekly data for 2-3 months
        periods = months * 4;
        periodType = 'weekly';
        labelsArray = Array.from({length: periods}, (_, i) => `Week ${i + 1}`);
    } else {
        // Monthly data for 4-6 months
        periods = months;
        periodType = 'monthly';
        const allMonths = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
        labelsArray = allMonths.slice(-months);
    }
    
    // For weekly/monthly - use aggregated realistic data
    let creditBase, debitBase, creditTrend, debitTrend;
    
    if (riskLevel === 'high') {
        creditBase = periodType === 'weekly' ? 20000 : 85000;
        debitBase = periodType === 'weekly' ? 24000 : 95000;
        creditTrend = periodType === 'weekly' ? -200 : -5000;
        debitTrend = periodType === 'weekly' ? -100 : -3000;
    } else if (riskLevel === 'medium') {
        creditBase = periodType === 'weekly' ? 28000 : 120000;
        debitBase = periodType === 'weekly' ? 26000 : 110000;
        creditTrend = periodType === 'weekly' ? -50 : -2000;
        debitTrend = periodType === 'weekly' ? -80 : -2500;
    } else {
        creditBase = periodType === 'weekly' ? 35000 : 150000;
        debitBase = periodType === 'weekly' ? 32000 : 140000;
        creditTrend = periodType === 'weekly' ? 100 : 3000;
        debitTrend = periodType === 'weekly' ? 80 : 2500;
    }
    
    const credits = Array.from({length: periods}, (_, i) => {
        const trendEffect = creditTrend * i;
        const seasonalVariance = Math.sin(i * 0.5) * (creditBase * 0.15);
        const randomNoise = (Math.random() * (creditBase * 0.1) - (creditBase * 0.05));
        return Math.max(0, Math.round(creditBase + trendEffect + seasonalVariance + randomNoise));
    });
    
    const debits = Array.from({length: periods}, (_, i) => {
        const trendEffect = debitTrend * i;
        const seasonalVariance = Math.sin(i * 0.6) * (debitBase * 0.12);
        const randomNoise = (Math.random() * (debitBase * 0.1) - (debitBase * 0.05));
        return Math.max(0, Math.round(debitBase + trendEffect + seasonalVariance + randomNoise));
    });
    
    return {
        labels: labelsArray,
        credits: credits,
        debits: debits,
        periodType: periodType
    };
}

function generateRealisticDailyData(days, riskLevel) {
    // FIX 4: Use seeded random for consistent data
    let seed = riskLevel === 'high' ? 12345 : riskLevel === 'medium' ? 67890 : 11111;
    function seededRandom() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }
    
    // Realistic salary and expense patterns
    let salaryAmount, salaryDay, emiAmount, emiDueDay, emiActualPaidDay, emiStatus, emiLateDays, emiRecoveryType;
    let dailyDebitBase, debitVariance;
    
    // Calculate current day (Day 16 in the current month)
    const currentDay = 16;
    
    if (riskLevel === 'high') {
        salaryAmount = 45000; // Lower salary
        salaryDay = 10; // Delayed salary (came late)
        emiAmount = 12000;
        emiDueDay = 25; // EMI was due on Day 25
        
        // HIGH RISK SCENARIO: EMI bounced on Day 25, but salary came on Day 10
        // Since salary came BEFORE EMI due date, but customer spent it all
        // EMI will bounce on Day 25
        // In real scenario, if salary comes AFTER bounce, auto-retry happens
        
        // For realistic modeling: Assume EMI bounced, still unpaid
        emiActualPaidDay = null; // Not paid yet
        emiStatus = 'bounced'; // EMI bounced - still unpaid
        emiLateDays = 'Pending'; // Still accumulating
        emiRecoveryType = 'pending'; // Awaiting recovery
        
        dailyDebitBase = 1200; // Higher daily spending
        debitVariance = 800;
    } else if (riskLevel === 'medium') {
        salaryAmount = 55000;
        salaryDay = 5; // Salary on Day 5
        emiAmount = 12000;
        emiDueDay = 5; // EMI due on Day 5
        
        // MEDIUM RISK SCENARIO: EMI bounced on Day 5 (insufficient balance)
        // Salary came on Day 5 (same day)
        // Bank auto-retried on Day 7 (2 days later) and succeeded
        emiActualPaidDay = 7; // Auto-recovered on Day 7
        emiStatus = 'late'; // Paid late via auto-recovery
        emiLateDays = 2; // 2 days late
        emiRecoveryType = 'auto-recovered'; // Auto-debit after salary
        
        dailyDebitBase = 900;
        debitVariance = 600;
    } else {
        salaryAmount = 70000;
        salaryDay = 1; // On-time salary
        emiAmount = 12000;
        emiDueDay = 25; // EMI due on Day 25 (but paid early on Day 5)
        
        // LOW RISK SCENARIO: Sufficient balance, EMI paid EARLY (20 days before due date)
        emiActualPaidDay = 5; // Paid 20 days early - strong repayment behavior
        emiStatus = 'ontime'; // Paid on time (early)
        emiLateDays = 0;
        emiRecoveryType = 'auto-debit'; // Normal auto-debit
        
        dailyDebitBase = 800;
        debitVariance = 500;
    }
    
    const credits = [];
    const debits = [];
    const transactionLabels = []; // FIX 2: Track transaction types for tooltips
    
    for (let i = 0; i < days; i++) {
        const day = i + 1;
        let transactionLabel = '';
        
        // REALISTIC CREDIT PATTERN
        if (day === salaryDay) {
            // SALARY SPIKE - Big credit on salary day
            credits.push(salaryAmount);
            transactionLabel = 'Salary Credit';
        } else if (seededRandom() < 0.05) {
            // 5% chance of small credit (refund, transfer, etc.)
            const creditAmount = Math.round(500 + seededRandom() * 2000);
            credits.push(creditAmount);
            transactionLabel = 'Misc. Credit';
        } else {
            // MOST DAYS = ZERO CREDIT (realistic!)
            credits.push(0);
        }
        
        // REALISTIC DEBIT PATTERN
        let dailyDebit = 0;
        
        // EMI debit logic - INTELLIGENT RECOVERY
        if (day === emiDueDay && emiStatus === 'ontime') {
            // Case 1: Sufficient balance on due date - auto-debit succeeds
            dailyDebit = emiAmount;
            transactionLabel = 'EMI Payment';
        } else if (day === emiActualPaidDay && emiStatus === 'late') {
            // Case 2: Auto-recovery after salary (retry logic)
            // EMI bounced on due date, but recovered later when salary came
            dailyDebit = emiAmount;
            transactionLabel = 'EMI Auto-Recovered';
        } else if (day === 1) {
            // FIX 2 & 4: Fixed rent payment on day 1
            dailyDebit = 9500; // Fixed rent amount
            transactionLabel = 'Rent Payment';
        } else if (day === 25 && selectedCustomer.riskLevel === 'low') {
            // FIX 2: Credit card bill payment on Day 25 for low risk customers
            dailyDebit = 9000; // Fixed credit card bill
            transactionLabel = 'Credit Card Bill';
        } else {
            // Daily expenses - small and variable
            // Weekend = lower spending
            const isWeekend = day % 7 === 0 || day % 7 === 6;
            const weekendFactor = isWeekend ? 0.6 : 1.0;
            
            // Random daily expenses with seeded random
            dailyDebit = Math.round(
                (dailyDebitBase + (seededRandom() * debitVariance - debitVariance / 2)) * weekendFactor
            );
            
            // FIX 2: Occasional larger expenses with descriptive labels
            if (seededRandom() < 0.1) {
                const largeExpense = Math.round(2000 + seededRandom() * 3000);
                dailyDebit += largeExpense;
                
                // FIX 2: Label large expenses based on amount
                if (largeExpense > 3500) {
                    transactionLabel = 'Large Purchase (Electronics/Appliances)';
                } else if (largeExpense > 2800) {
                    transactionLabel = 'Shopping/Dining';
                } else {
                    transactionLabel = 'Utility Bills/Insurance';
                }
            } else {
                transactionLabel = 'Daily Expenses';
            }
        }
        
        debits.push(Math.max(0, dailyDebit));
        transactionLabels.push(transactionLabel);
    }
    
    // Calculate EMI coverage ratio
    const emiCoverageRatio = (salaryAmount / emiAmount).toFixed(1);
    
    return {
        labels: Array.from({length: days}, (_, i) => `Day ${i + 1}`),
        credits: credits,
        debits: debits,
        transactionLabels: transactionLabels, // FIX 2: Include transaction labels
        periodType: 'daily',
        salaryDay: salaryDay,
        salaryAmount: salaryAmount,
        emiDueDay: emiDueDay,
        emiActualPaidDay: emiActualPaidDay,
        emiAmount: emiAmount,
        emiStatus: emiStatus,
        emiLateDays: emiLateDays,
        emiRecoveryType: emiRecoveryType,
        emiCoverageRatio: emiCoverageRatio
    };
}

function getMonthLabels(months) {
    const allMonths = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    return allMonths.slice(-months);
}

function updateAmountTrendChart() {
    selectedMonthRange = parseInt(document.getElementById('amount-range-filter').value);
    renderCustomerTransactionCharts();
}

function renderCustomerTransactionCharts() {
    // Generate transaction amounts based on selected range
    const transactionData = generateTransactionAmounts(selectedMonthRange, selectedCustomer.riskLevel);
    
    // Calculate statistics
    const totalCredit = transactionData.credits.reduce((a, b) => a + b, 0);
    const totalDebit = transactionData.debits.reduce((a, b) => a + b, 0);
    const avgCredit = Math.round(totalCredit / transactionData.credits.length);
    const avgDebit = Math.round(totalDebit / transactionData.debits.length);
    
    // Format display based on period type
    let creditDisplay, debitDisplay;
    if (transactionData.periodType === 'daily') {
        creditDisplay = `₹${(avgCredit / 1000).toFixed(1)}K`;
        debitDisplay = `₹${(avgDebit / 1000).toFixed(1)}K`;
        
        // Show EMI summary for daily view
        document.getElementById('emi-summary-row').style.display = 'flex';
        document.getElementById('emi-paid-day').textContent = transactionData.emiActualPaidDay 
            ? `Day ${transactionData.emiActualPaidDay}` 
            : `Day ${transactionData.emiDueDay} (Due)`;
        document.getElementById('emi-amount-display').textContent = `₹${(transactionData.emiAmount / 1000).toFixed(0)}K`;
        
        // FIX 4: Calculate coverage ratio from current balance (not salary)
        const currentBalanceForCoverage = selectedCustomer.riskLevel === 'low' ? 28500 : 30000;
        const coverageRatio = (currentBalanceForCoverage / transactionData.emiAmount).toFixed(1);
        document.getElementById('emi-coverage-ratio').textContent = `${coverageRatio}x`;
        
        // Update late days display
        if (transactionData.emiStatus === 'bounced') {
            document.getElementById('emi-late-days').textContent = transactionData.emiLateDays;
        } else {
            document.getElementById('emi-late-days').textContent = transactionData.emiLateDays;
        }
        
        // Update EMI status badge and text with recovery type
        const statusBadge = document.getElementById('emi-status-badge');
        const statusText = document.getElementById('emi-status-text');
        
        // FIX 6: Make EMI status badge more prominent
        if (transactionData.emiStatus === 'ontime') {
            statusBadge.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>EMI Paid On Time';
            statusBadge.className = 'emi-status-badge ontime';
            statusBadge.style.fontWeight = '700';
            statusBadge.style.fontSize = '11px';
            statusText.textContent = 'Auto-debit Success';
            statusText.style.color = '#065F46';
            statusText.style.fontWeight = '600';
        } else if (transactionData.emiStatus === 'late') {
            statusBadge.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>EMI Auto-Recovered';
            statusBadge.className = 'emi-status-badge late';
            statusBadge.style.fontWeight = '700';
            statusBadge.style.fontSize = '11px';
            statusText.textContent = `Auto-recovered (${transactionData.emiLateDays} days late)`;
            statusText.style.color = '#92400E';
            statusText.style.fontWeight = '600';
        } else {
            // FIX 3 & 6: Bold red pill badge for bounced status
            statusBadge.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>EMI BOUNCED';
            statusBadge.className = 'emi-status-badge bounced';
            statusBadge.style.fontWeight = '800';
            statusBadge.style.fontSize = '11px';
            statusBadge.style.padding = '8px 14px';
            statusBadge.style.boxShadow = '0 2px 6px rgba(220, 38, 38, 0.3)';
            
            // FIX 3: Make status text a red pill badge too
            statusText.innerHTML = '<span style="display: inline-block; padding: 6px 12px; background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%); color: #991B1B; border-radius: 12px; font-weight: 700; font-size: 11px; box-shadow: 0 2px 4px rgba(220, 38, 38, 0.2);">Bounced - Awaiting Recovery</span>';
            statusText.style.color = '#991B1B';
            statusText.style.fontWeight = '700';
        }
    } else {
        creditDisplay = `₹${(avgCredit / 1000).toFixed(0)}K`;
        debitDisplay = `₹${(avgDebit / 1000).toFixed(0)}K`;
        
        // Hide EMI summary for aggregated views
        document.getElementById('emi-summary-row').style.display = 'none';
        document.getElementById('emi-status-badge').innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>EMI History';
        document.getElementById('emi-status-badge').className = 'emi-status-badge ontime';
    }
    
    // FIX 7: Update overall risk badge at top of Transaction Analysis
    const overallRiskBadge = document.getElementById('transaction-overall-risk-badge');
    if (transactionData.periodType === 'daily' && transactionData.emiStatus) {
        overallRiskBadge.style.display = 'inline-block';
        const riskScore = selectedCustomer.riskScore;
        
        if (transactionData.emiStatus === 'bounced') {
            overallRiskBadge.textContent = `High Risk - ${riskScore}% Miss Probability`;
            overallRiskBadge.style.background = 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)';
            overallRiskBadge.style.color = '#991B1B';
            overallRiskBadge.style.boxShadow = '0 2px 6px rgba(220, 38, 38, 0.3)';
        } else if (riskScore >= 60) {
            overallRiskBadge.textContent = `Medium Risk - ${riskScore}% Miss Probability`;
            overallRiskBadge.style.background = 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)';
            overallRiskBadge.style.color = '#92400E';
            overallRiskBadge.style.boxShadow = '0 2px 6px rgba(245, 158, 11, 0.3)';
        } else {
            overallRiskBadge.textContent = `Low Risk - ${riskScore}% Miss Probability`;
            overallRiskBadge.style.background = 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)';
            overallRiskBadge.style.color = '#065F46';
            overallRiskBadge.style.boxShadow = '0 2px 6px rgba(16, 185, 129, 0.3)';
        }
    } else {
        overallRiskBadge.style.display = 'none';
    }
    
    // FIX 6: Show insight banner for bounced EMI OR positive banner for low risk ontime
    const insightBanner = document.getElementById('transaction-insight-banner');
    const insightText = document.getElementById('transaction-insight-text');
    
    if (transactionData.periodType === 'daily' && transactionData.emiStatus === 'ontime' && selectedCustomer.riskLevel === 'low') {
        // FIX 5: Show positive green banner for low risk customers
        insightBanner.style.display = 'block';
        insightBanner.style.background = 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)';
        insightBanner.style.borderLeft = '4px solid #10B981';
        
        // Update SVG icon to checkmark
        const svgIcon = insightBanner.querySelector('svg');
        svgIcon.setAttribute('stroke', '#10B981');
        svgIcon.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';
        
        insightText.innerHTML = `<strong>✅ EMI paid on Day ${transactionData.emiActualPaidDay} — 20 days early.</strong> Customer shows strong repayment behavior. No intervention required.`;
        insightText.style.color = '#065F46';
    } else if (transactionData.periodType === 'daily' && transactionData.emiStatus === 'bounced') {
        const currentBalance = 30000; // This should come from actual data
        const emiAmount = transactionData.emiAmount;
        
        insightBanner.style.display = 'block';
        insightBanner.style.background = 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)';
        insightBanner.style.borderLeft = '4px solid #F59E0B';
        
        // Reset SVG icon to warning
        const svgIcon = insightBanner.querySelector('svg');
        svgIcon.setAttribute('stroke', '#F59E0B');
        svgIcon.innerHTML = '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>';
        
        insightText.innerHTML = `<strong>EMI bounced on Day ${transactionData.emiDueDay}.</strong> Current balance (₹${(currentBalance / 1000).toFixed(0)}K) is sufficient to cover EMI (₹${(emiAmount / 1000).toFixed(0)}K) — recommend immediate re-presentation or customer outreach.`;
        insightText.style.color = '#92400E';
    } else {
        insightBanner.style.display = 'none';
    }
    
    document.getElementById('customer-avg-monthly').textContent = creditDisplay;
    document.getElementById('customer-trend').textContent = debitDisplay;
    
    // Destroy existing chart if it exists
    if (customer6MonthChart) {
        customer6MonthChart.destroy();
    }
    
    // FIX 1: Cap Y-axis at ₹10K to make micro-transactions visible
    const maxCredit = Math.max(...transactionData.credits);
    const maxDebit = Math.max(...transactionData.debits);
    const yAxisCap = 10000; // ₹10K cap
    const hasSalarySpike = maxCredit > yAxisCap || maxDebit > yAxisCap;
    
    // Transaction Amount Chart with Credit and Debit Lines
    const sixMonthCtx = document.getElementById('customer6MonthChart').getContext('2d');
    customer6MonthChart = new Chart(sixMonthCtx, {
        type: 'line',
        data: {
            labels: transactionData.labels,
            datasets: [
                {
                    label: 'Credit',
                    data: transactionData.credits,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#10B981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    order: 1
                },
                {
                    label: 'Debit',
                    data: transactionData.debits,
                    borderColor: '#DC2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.08)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#DC2626',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    order: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: { 
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 15,
                        font: { size: 11, weight: '600' },
                        color: '#374151'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 61, 106, 0.95)',
                    padding: 14,
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    bodySpacing: 8,
                    borderColor: '#00AEEF',
                    borderWidth: 1,
                    displayColors: true,
                    usePointStyle: true,
                    callbacks: {
                        title: function(context) {
                            const label = context[0].label;
                            if (transactionData.periodType === 'monthly') {
                                return label + ' 2025';
                            }
                            return label;
                        },
                        label: function(context) {
                            const value = context.parsed.y;
                            const label = context.dataset.label;
                            
                            if (transactionData.periodType === 'daily') {
                                return `${label}: ₹${(value / 1000).toFixed(1)}K`;
                            } else {
                                return `${label}: ₹${(value / 1000).toFixed(0)}K`;
                            }
                        },
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const credit = transactionData.credits[index];
                            const debit = transactionData.debits[index];
                            const net = credit - debit;
                            const netLabel = net >= 0 ? 'Net Surplus' : 'Net Deficit';
                            
                            let annotations = [];
                            
                            if (transactionData.periodType === 'daily') {
                                // FIX 2: Always show transaction type label prominently
                                if (transactionData.transactionLabels && transactionData.transactionLabels[index]) {
                                    const txnLabel = transactionData.transactionLabels[index];
                                    annotations.push(`\nType: ${txnLabel}`);
                                }
                                
                                annotations.push(`${netLabel}: ₹${(Math.abs(net) / 1000).toFixed(1)}K`);
                                
                                // Show EMI info if this is EMI day (due or actual paid)
                                const day = index + 1;
                                
                                // Show EMI due marker
                                if (transactionData.emiDueDay && day === transactionData.emiDueDay) {
                                    annotations.push(`\n💳 EMI Due Date: ₹${(transactionData.emiAmount / 1000).toFixed(0)}K`);
                                    
                                    if (transactionData.emiStatus === 'bounced') {
                                        annotations.push(`Status: ❌ Bounced (Insufficient Balance)`);
                                    } else if (transactionData.emiStatus === 'ontime' && transactionData.emiActualPaidDay === day) {
                                        annotations.push(`Status: ✅ Paid On Time (Auto-debit)`);
                                    }
                                }
                                
                                // Show EMI recovery if paid on different day
                                if (transactionData.emiActualPaidDay && day === transactionData.emiActualPaidDay && day !== transactionData.emiDueDay) {
                                    annotations.push(`\n💳 EMI Auto-Recovered: ₹${(transactionData.emiAmount / 1000).toFixed(0)}K`);
                                    annotations.push(`Status: ⚠️ Auto-recovered (${transactionData.emiLateDays} days late)`);
                                    annotations.push(`Recovery: Bank auto-retry after salary credit`);
                                }
                                
                                // Show salary info if this is salary day
                                if (transactionData.salaryDay && day === transactionData.salaryDay) {
                                    annotations.push(`\n💰 Salary Credit: ₹${(transactionData.salaryAmount / 1000).toFixed(0)}K`);
                                    annotations.push(`EMI Coverage: ${transactionData.emiCoverageRatio}x`);
                                    
                                    // If salary came after EMI bounce, show recovery expectation
                                    if (transactionData.emiStatus === 'late' && day > transactionData.emiDueDay && day < transactionData.emiActualPaidDay) {
                                        annotations.push(`⏳ Bank will auto-retry EMI debit`);
                                    }
                                }
                            } else {
                                annotations.push(`\n${netLabel}: ₹${(Math.abs(net) / 1000).toFixed(0)}K`);
                            }
                            
                            return annotations.join('\n');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: transactionData.periodType === 'daily' ? yAxisCap : Math.max(...transactionData.credits, ...transactionData.debits) * 1.15,
                    ticks: {
                        stepSize: transactionData.periodType === 'daily' ? 1000 : 
                                 transactionData.periodType === 'weekly' ? 10000 : 30000,
                        font: { size: 11, weight: '500' },
                        color: '#6B7280',
                        padding: 8,
                        callback: function(value) {
                            if (transactionData.periodType === 'daily') {
                                return '₹' + (value / 1000).toFixed(1) + 'K';
                            }
                            return '₹' + (value / 1000).toFixed(0) + 'K';
                        }
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false,
                        lineWidth: 1
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: transactionData.periodType === 'daily' ? 10 : 
                                      transactionData.periodType === 'weekly' ? 8 : 6,
                        font: { size: 11, weight: '500' },
                        color: '#374151',
                        padding: 8,
                        autoSkip: true,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
        plugins: [{
            id: 'emiMarkerFirstGraph',
            afterDatasetsDraw: function(chart) {
                // Only show EMI marker for daily view
                if (transactionData.periodType !== 'daily' || !transactionData.emiDueDay) {
                    return;
                }
                
                const ctx = chart.ctx;
                const xAxis = chart.scales.x;
                const yAxis = chart.scales.y;
                
                // FIX 2: Draw vertical dashed red line at EMI day with label
                const emiDayX = xAxis.getPixelForValue(transactionData.emiDueDay - 1);
                
                ctx.save();
                
                // FIX 2: For LOW RISK with ontime status, show green success marker on actual paid day (Day 5)
                const isLowRiskOnTime = transactionData.emiStatus === 'ontime' && selectedCustomer.riskLevel === 'low';
                const markerDay = isLowRiskOnTime ? transactionData.emiActualPaidDay : transactionData.emiDueDay;
                const markerDayX = xAxis.getPixelForValue(markerDay - 1);
                
                // Draw vertical line - green for low risk ontime, red for bounced
                ctx.strokeStyle = isLowRiskOnTime ? '#10B981' : '#DC2626';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(markerDayX, yAxis.top);
                ctx.lineTo(markerDayX, yAxis.bottom);
                ctx.stroke();
                
                // Draw EMI label with status
                ctx.setLineDash([]);
                ctx.fillStyle = isLowRiskOnTime ? '#065F46' : '#991B1B';
                ctx.font = 'bold 11px Inter, Arial';
                ctx.textAlign = 'center';
                
                const emiLabel = isLowRiskOnTime
                    ? `EMI Paid - ₹${(transactionData.emiAmount / 1000).toFixed(0)}K ✅`
                    : transactionData.emiStatus === 'bounced' 
                        ? `EMI Due - ₹${(transactionData.emiAmount / 1000).toFixed(0)}K | BOUNCED`
                        : `EMI Due - ₹${(transactionData.emiAmount / 1000).toFixed(0)}K`;
                
                // Draw background for label
                const textWidth = ctx.measureText(emiLabel).width;
                ctx.fillStyle = isLowRiskOnTime ? 'rgba(209, 250, 229, 0.95)' : 'rgba(254, 226, 226, 0.95)';
                ctx.fillRect(markerDayX - textWidth/2 - 6, yAxis.top - 22, textWidth + 12, 18);
                
                // Draw border
                ctx.strokeStyle = isLowRiskOnTime ? '#10B981' : '#DC2626';
                ctx.lineWidth = 1;
                ctx.strokeRect(markerDayX - textWidth/2 - 6, yAxis.top - 22, textWidth + 12, 18);
                
                // Draw text
                ctx.fillStyle = isLowRiskOnTime ? '#065F46' : '#991B1B';
                ctx.fillText(emiLabel, markerDayX, yAxis.top - 9);
                
                // FIX 1: Add salary spike annotation if it exceeds cap
                if (hasSalarySpike && transactionData.salaryDay) {
                    const salaryDayX = xAxis.getPixelForValue(transactionData.salaryDay - 1);
                    const salaryAmount = transactionData.salaryAmount;
                    
                    // Draw callout arrow pointing to capped point
                    const cappedY = yAxis.getPixelForValue(yAxisCap);
                    
                    ctx.strokeStyle = '#10B981';
                    ctx.fillStyle = '#10B981';
                    ctx.lineWidth = 2;
                    ctx.setLineDash([]);
                    
                    // Draw arrow line
                    ctx.beginPath();
                    ctx.moveTo(salaryDayX, cappedY - 10);
                    ctx.lineTo(salaryDayX, yAxis.top + 30);
                    ctx.stroke();
                    
                    // Draw arrow head
                    ctx.beginPath();
                    ctx.moveTo(salaryDayX, cappedY - 10);
                    ctx.lineTo(salaryDayX - 4, cappedY - 18);
                    ctx.lineTo(salaryDayX + 4, cappedY - 18);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Draw label
                    ctx.font = 'bold 11px Inter, Arial';
                    ctx.textAlign = 'center';
                    const salaryLabel = `Salary Credit: ₹${(salaryAmount / 1000).toFixed(0)}K`;
                    const salaryTextWidth = ctx.measureText(salaryLabel).width;
                    
                    // Background
                    ctx.fillStyle = 'rgba(209, 250, 229, 0.95)';
                    ctx.fillRect(salaryDayX - salaryTextWidth/2 - 6, yAxis.top + 10, salaryTextWidth + 12, 18);
                    
                    // Border
                    ctx.strokeStyle = '#10B981';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(salaryDayX - salaryTextWidth/2 - 6, yAxis.top + 10, salaryTextWidth + 12, 18);
                    
                    // Text
                    ctx.fillStyle = '#065F46';
                    ctx.fillText(salaryLabel, salaryDayX, yAxis.top + 23);
                }
                
                ctx.restore();
            }
        }]
    });
    
    // Current Month Data - ACCURATE RUNNING BALANCE with EMI Risk Modeling
    const currentDay = 16; // Current day of the month (Day 16)
    const daysInMonth = 30; // Full month
    const emiDueDay = 25; // EMI due on Day 25
    const emiAmount = 12000; // ₹12,000 EMI
    const riskDetectionWindow = 12; // 12-day early warning
    const riskWindowStart = emiDueDay - riskDetectionWindow; // Day 13
    
    // Generate realistic actual data (reuse logic from first graph)
    let salaryAmount, salaryDay, dailyDebitBase, debitVariance;
    
    if (selectedCustomer.riskLevel === 'high') {
        salaryAmount = 45000;
        salaryDay = 10;
        dailyDebitBase = 1200;
        debitVariance = 800;
    } else if (selectedCustomer.riskLevel === 'medium') {
        salaryAmount = 55000;
        salaryDay = 5;
        dailyDebitBase = 900;
        debitVariance = 600;
    } else {
        salaryAmount = 70000;
        salaryDay = 1;
        dailyDebitBase = 800;
        debitVariance = 500;
    }
    
    // FIX 3: Start from Day 8 to avoid negative opening balance confusion
    const startDay = 8;
    
    // FIX 4: Use seeded random for consistent liquidity forecast data
    let forecastSeed = selectedCustomer.riskLevel === 'high' ? 54321 : selectedCustomer.riskLevel === 'medium' ? 98765 : 22222;
    function forecastSeededRandom() {
        forecastSeed = (forecastSeed * 9301 + 49297) % 233280;
        return forecastSeed / 233280;
    }
    
    // Generate ACTUAL transactions from startDay to current day
    const actualCredits = [];
    const actualDebits = [];
    
    // FIX 1: For LOW RISK customers, start with POSITIVE balance
    let openingBalance = 0;
    if (selectedCustomer.riskLevel === 'low') {
        openingBalance = 45000; // Starting balance of ₹45K for low risk customer
    }
    
    for (let i = startDay - 1; i < currentDay; i++) {
        const day = i + 1;
        
        // REALISTIC CREDIT - salary spike only on actual day
        if (day === salaryDay) {
            actualCredits.push(salaryAmount);
        } else if (forecastSeededRandom() < 0.05) {
            actualCredits.push(Math.round(500 + forecastSeededRandom() * 2000));
        } else {
            actualCredits.push(0); // MOST DAYS = ZERO
        }
        
        // REALISTIC DEBIT - daily expenses
        const isWeekend = day % 7 === 0 || day % 7 === 6;
        const weekendFactor = isWeekend ? 0.6 : 1.0;
        let dailyDebit = Math.round(
            (dailyDebitBase + (forecastSeededRandom() * debitVariance - debitVariance / 2)) * weekendFactor
        );
        
        // FIX 1: For LOW RISK, include EMI payment on Day 5
        if (selectedCustomer.riskLevel === 'low' && day === 5) {
            dailyDebit += emiAmount; // EMI paid on Day 5
        }
        
        if (forecastSeededRandom() < 0.1) {
            dailyDebit += Math.round(2000 + forecastSeededRandom() * 3000);
        }
        actualDebits.push(Math.max(0, dailyDebit));
    }
    
    // Calculate ACTUAL RUNNING BALANCE (cumulative) starting from opening balance
    const actualBalances = [];
    let runningBalance = openingBalance;
    
    for (let i = 0; i < actualCredits.length; i++) {
        runningBalance += actualCredits[i] - actualDebits[i];
        actualBalances.push(runningBalance);
    }
    
    // CURRENT BALANCE = Last actual balance point
    const currentBalance = actualBalances[actualBalances.length - 1];
    
    // Calculate AVERAGE DAILY DEBIT from last 7 days (more accurate than monthly average)
    const last7DaysDebits = actualDebits.slice(-7);
    const avgDailyDebit = last7DaysDebits.reduce((a, b) => a + b, 0) / last7DaysDebits.length;
    
    // PREDICTION: Continue from current balance, NO additional salary
    const remainingDays = daysInMonth - currentDay;
    const predictedBalances = [];
    const predictedBalancesUpper = []; // FIX 5: Upper confidence band
    const predictedBalancesLower = []; // FIX 5: Lower confidence band
    let projectedBalance = currentBalance;
    
    // FIX 7: Lower uncertainty for low risk customers (±10% instead of ±15%)
    const confidenceMargin = selectedCustomer.riskLevel === 'low' ? 0.10 : 0.15;
    
    for (let i = 0; i < remainingDays; i++) {
        const day = currentDay + i + 1;
        
        // NO SALARY EXPECTED (realistic - salary already came)
        const predictedCredit = 0;
        
        // Continue average daily spending with realistic variance
        const isWeekend = day % 7 === 0 || day % 7 === 6;
        const weekendFactor = isWeekend ? 0.6 : 1.0;
        
        // Use last 7 days average with variance (not flat line)
        let predictedDebit = Math.round(avgDailyDebit * weekendFactor * (0.85 + forecastSeededRandom() * 0.3));
        
        // EMI DEDUCTION on Day 25 EXACTLY (but for LOW RISK, already paid on Day 5)
        if (day === emiDueDay && selectedCustomer.riskLevel !== 'low') {
            predictedDebit += emiAmount;
        }
        
        // Update projected balance
        projectedBalance += predictedCredit - predictedDebit;
        predictedBalances.push(projectedBalance);
        
        // FIX 5: Calculate confidence bands
        const uncertainty = Math.abs(projectedBalance) * confidenceMargin;
        predictedBalancesUpper.push(projectedBalance + uncertainty);
        predictedBalancesLower.push(projectedBalance - uncertainty);
    }
    
    // Get balance on EMI day for risk calculation
    const emiDayIndex = emiDueDay - currentDay - 1;
    const balanceBeforeEmi = emiDayIndex >= 0 && emiDayIndex < predictedBalances.length 
        ? predictedBalances[emiDayIndex] 
        : projectedBalance;
    
    // Calculate post-EMI balance
    const balanceAfterEmi = balanceBeforeEmi - emiAmount;
    
    // ACCURATE RISK CALCULATION using Real Bank Logic
    let emiMissProbability = 0;
    
    if (balanceBeforeEmi < emiAmount) {
        // CASE 1: Insufficient balance BEFORE EMI - High Risk
        const shortfall = emiAmount - balanceBeforeEmi;
        const shortfallPercent = (shortfall / emiAmount) * 100;
        
        // Risk increases with shortfall percentage
        emiMissProbability = Math.min(95, Math.round(50 + shortfallPercent * 0.5));
    } else {
        // CASE 2: Sufficient balance BEFORE EMI - Check post-EMI buffer
        const postEmiBalance = balanceAfterEmi;
        
        // Calculate spending velocity (average daily debit)
        const spendingVelocity = avgDailyDebit;
        
        // Calculate buffer in days (how many days can they survive post-EMI)
        const bufferDays = postEmiBalance / spendingVelocity;
        
        // Risk based on post-EMI buffer
        if (postEmiBalance < 0) {
            // Negative balance after EMI - Very High Risk
            emiMissProbability = 85;
        } else if (bufferDays < 1) {
            // Less than 1 day buffer - High Risk
            emiMissProbability = 75;
        } else if (bufferDays < 2) {
            // 1-2 days buffer - Medium-High Risk
            emiMissProbability = 60;
        } else if (bufferDays < 3) {
            // 2-3 days buffer - Medium Risk
            emiMissProbability = 45;
        } else if (bufferDays < 5) {
            // 3-5 days buffer - Low-Medium Risk
            emiMissProbability = 30;
        } else if (bufferDays < 7) {
            // 5-7 days buffer - Low Risk
            emiMissProbability = 15;
        } else {
            // 7+ days buffer - Very Low Risk
            emiMissProbability = 5;
        }
    }
    
    // Check if we're in early warning window
    const isInWarningWindow = currentDay >= riskWindowStart && currentDay < emiDueDay;
    const daysUntilEmi = emiDueDay - currentDay;
    
    const currentMonthData = {
        labels: Array.from({length: daysInMonth - startDay + 1}, (_, i) => `Day ${i + startDay}`),
        actualBalances: actualBalances.concat(Array(remainingDays).fill(null)),
        predictedBalances: Array(currentDay - startDay + 1).fill(null).concat(predictedBalances),
        predictedBalancesUpper: Array(currentDay - startDay + 1).fill(null).concat(predictedBalancesUpper),
        predictedBalancesLower: Array(currentDay - startDay + 1).fill(null).concat(predictedBalancesLower),
        emiDueDay: emiDueDay,
        emiAmount: emiAmount,
        riskWindowStart: riskWindowStart,
        balanceBeforeEmi: balanceBeforeEmi,
        balanceAfterEmi: balanceAfterEmi,
        emiMissProbability: emiMissProbability,
        isInWarningWindow: isInWarningWindow,
        daysUntilEmi: daysUntilEmi,
        currentBalance: currentBalance,
        avgDailyDebit: avgDailyDebit,
        bufferDays: balanceAfterEmi > 0 ? (balanceAfterEmi / avgDailyDebit).toFixed(1) : 0,
        startDay: startDay
    };
    
    // Update UI with ACCURATE values
    // FIX 1: Show correct current balance for low risk customer
    document.getElementById('customer-current-balance').textContent = `₹${(currentBalance / 1000).toFixed(1)}K`;
    document.getElementById('customer-predicted-balance').textContent = `₹${(emiAmount / 1000).toFixed(0)}K`;
    
    // Update risk badge with CALCULATED probability
    const riskBadge = document.getElementById('customer-emi-risk-badge');
    if (emiMissProbability >= 70) {
        riskBadge.textContent = `High Risk - ${emiMissProbability}% Miss Probability`;
        riskBadge.className = 'chart-balance';
        riskBadge.style.background = '#FEE2E2';
        riskBadge.style.color = '#991B1B';
        riskBadge.style.fontWeight = '700';
    } else if (emiMissProbability >= 40) {
        riskBadge.textContent = `Medium Risk - ${emiMissProbability}% Miss Probability`;
        riskBadge.className = 'chart-balance';
        riskBadge.style.background = '#FEF3C7';
        riskBadge.style.color = '#92400E';
        riskBadge.style.fontWeight = '700';
    } else {
        riskBadge.textContent = `Low Risk - ${emiMissProbability}% Miss Probability`;
        riskBadge.className = 'chart-balance';
        riskBadge.style.background = '#D1FAE5';
        riskBadge.style.color = '#065F46';
        riskBadge.style.fontWeight = '700';
    }
    
    // Destroy existing chart if it exists
    if (customerCurrentMonthChart) {
        customerCurrentMonthChart.destroy();
    }
    
    // Current Month Chart - ACCURATE RUNNING BALANCE with EMI Risk
    const currentMonthCtx = document.getElementById('customerCurrentMonthChart').getContext('2d');
    
    customerCurrentMonthChart = new Chart(currentMonthCtx, {
        type: 'line',
        data: {
            labels: currentMonthData.labels,
            datasets: [
                // FIX 5: Confidence band (shaded area) - FIX 7: Show ±10% for low risk
                {
                    label: selectedCustomer.riskLevel === 'low' ? 'Forecast Uncertainty (±10%)' : 'Forecast Uncertainty (±15%)',
                    data: currentMonthData.predictedBalancesUpper,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(147, 51, 234, 0.15)',
                    fill: '+1',
                    tension: 0.3,
                    pointRadius: 0,
                    borderWidth: 0,
                    order: 6
                },
                {
                    label: 'Forecast Lower Bound',
                    data: currentMonthData.predictedBalancesLower,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(147, 51, 234, 0.15)',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 0,
                    borderWidth: 0,
                    order: 7
                },
                // FIX 4: EMI Threshold with proper label
                {
                    label: 'Minimum Threshold / EMI Buffer',
                    data: Array(currentMonthData.labels.length).fill(emiAmount),
                    borderColor: '#F59E0B',
                    backgroundColor: 'transparent',
                    borderDash: [3, 3],
                    tension: 0,
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 2,
                    order: 4
                },
                {
                    label: 'Zero Line',
                    data: Array(currentMonthData.labels.length).fill(0),
                    borderColor: '#DC2626',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    tension: 0,
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                    order: 5
                },
                {
                    label: 'Actual Balance',
                    data: currentMonthData.actualBalances,
                    borderColor: '#00AEEF',
                    backgroundColor: 'rgba(0, 174, 239, 0.08)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#00AEEF',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3,
                    order: 1
                },
                {
                    label: 'Predicted Balance',
                    data: currentMonthData.predictedBalances,
                    borderColor: '#9333EA',
                    backgroundColor: 'rgba(147, 51, 234, 0.08)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#9333EA',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderDash: [6, 3],
                    borderWidth: 3,
                    order: 2,
                    segment: {
                        borderColor: ctx => {
                            const value = ctx.p1.parsed.y;
                            // FIX 3: For LOW RISK, don't show red even if negative
                            if (selectedCustomer.riskLevel === 'low') {
                                return '#9333EA';
                            }
                            return value < 0 ? '#DC2626' : '#9333EA';
                        },
                        backgroundColor: ctx => {
                            const value = ctx.p1.parsed.y;
                            // FIX 3: For LOW RISK, don't show red danger zone
                            if (selectedCustomer.riskLevel === 'low') {
                                return 'rgba(147, 51, 234, 0.08)';
                            }
                            return value < 0 ? 'rgba(220, 38, 38, 0.15)' : 'rgba(147, 51, 234, 0.08)';
                        }
                    }
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: { 
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 15,
                        font: { size: 11, weight: '600' },
                        color: '#374151',
                        filter: function(item) {
                            // FIX 1: Show only essential datasets - remove threshold from legend since it's shown on chart
                            return item.text === 'Actual Balance' || 
                                   item.text === 'Predicted Balance' ||
                                   item.text.includes('Forecast Uncertainty');
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 61, 106, 0.95)',
                    padding: 14,
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    bodySpacing: 8,
                    borderColor: '#00AEEF',
                    borderWidth: 1,
                    displayColors: true,
                    usePointStyle: true,
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const day = index + startDay;
                            const isForecast = day > currentDay;
                            let title = `Day ${day}${isForecast ? ' (Forecast)' : ''}`;
                            
                            if (day === currentMonthData.emiDueDay) {
                                title += ' - EMI DUE';
                            } else if (day >= currentMonthData.riskWindowStart && day < currentMonthData.emiDueDay) {
                                title += ' - Risk Window';
                            }
                            
                            return title;
                        },
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value === null) return null;
                            
                            const label = context.dataset.label;
                            
                            if (label === 'Minimum Threshold / EMI Buffer') {
                                return `EMI Threshold: ₹${(value / 1000).toFixed(1)}K`;
                            }
                            
                            if (label === 'Zero Line' || label === 'Forecast Lower Bound') {
                                return null;
                            }
                            
                            if (label.includes('Forecast Uncertainty')) {
                                return label.replace('Forecast Uncertainty', 'Forecast Range');
                            }
                            
                            return `${label}: ₹${(value / 1000).toFixed(1)}K`;
                        },
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const day = index + startDay;
                            const balance = context[0].parsed.y;
                            
                            if (balance === null) return '';
                            
                            let annotations = [];
                            
                            // FIX 4: Explain negative opening balance
                            if (index === 0 && balance < 0) {
                                annotations.push(`\nOpening Balance: Negative due to prior period obligations`);
                                annotations.push(`(Previous month's expenses exceeded income)`);
                            }
                            
                            if (day === currentMonthData.emiDueDay) {
                                annotations.push(`\nEMI Deduction: ₹${(emiAmount / 1000).toFixed(1)}K`);
                                
                                const balanceBefore = currentMonthData.balanceBeforeEmi;
                                const balanceAfter = currentMonthData.balanceAfterEmi;
                                
                                if (balanceBefore < emiAmount) {
                                    const shortfall = emiAmount - balanceBefore;
                                    annotations.push(`Shortfall: ₹${(shortfall / 1000).toFixed(1)}K`);
                                    annotations.push(`Miss Risk: ${currentMonthData.emiMissProbability}%`);
                                } else {
                                    annotations.push(`Balance Before: ₹${(balanceBefore / 1000).toFixed(1)}K`);
                                    annotations.push(`Balance After: ₹${(balanceAfter / 1000).toFixed(1)}K`);
                                    
                                    if (balanceAfter > 0) {
                                        annotations.push(`Buffer: ${currentMonthData.bufferDays} days`);
                                    }
                                    
                                    if (currentMonthData.emiMissProbability >= 40) {
                                        annotations.push(`Risk: ${currentMonthData.emiMissProbability}% (Low buffer)`);
                                    } else {
                                        annotations.push(`Risk: ${currentMonthData.emiMissProbability}% (Sufficient buffer)`);
                                    }
                                }
                            } else if (day >= currentMonthData.riskWindowStart && day < currentMonthData.emiDueDay) {
                                const daysToEmi = currentMonthData.emiDueDay - day;
                                annotations.push(`\n${daysToEmi} days until EMI`);
                                
                                if (balance < emiAmount) {
                                    const shortfall = emiAmount - balance;
                                    annotations.push(`Below threshold by ₹${(shortfall / 1000).toFixed(1)}K`);
                                } else {
                                    const surplus = balance - emiAmount;
                                    annotations.push(`Above threshold by ₹${(surplus / 1000).toFixed(1)}K`);
                                }
                            }
                            
                            if (balance < 0 && index !== 0) {
                                annotations.push(`\nNEGATIVE BALANCE`);
                            }
                            
                            return annotations.join('\n');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        stepSize: 10000,
                        font: { size: 11, weight: '500' },
                        color: '#6B7280',
                        padding: 8,
                        maxTicksLimit: 8,
                        callback: function(value) {
                            // FIX 3: Ensure clean single-line formatting
                            if (value === 0) return '₹0';
                            return '₹' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: function(context) {
                            if (context.tick.value === 0) {
                                return '#DC2626';
                            }
                            if (context.tick.value === emiAmount) {
                                return '#F59E0B';
                            }
                            return '#E5E7EB';
                        },
                        lineWidth: function(context) {
                            if (context.tick.value === 0 || context.tick.value === emiAmount) {
                                return 2;
                            }
                            return 1;
                        },
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: 10,
                        font: { size: 11, weight: '500' },
                        color: '#374151',
                        padding: 8,
                        autoSkip: true,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
        plugins: [{
            id: 'emiMarker',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                const xAxis = chart.scales.x;
                const yAxis = chart.scales.y;
                
                // FIX 1: Draw vertical dashed line at EMI day - green for low risk ontime, red for bounced
                const emiDayIndex = currentMonthData.emiDueDay - startDay;
                const emiDayX = xAxis.getPixelForValue(emiDayIndex);
                
                ctx.save();
                
                // FIX 1: Check if low risk customer with ontime payment
                const isLowRiskOnTime = selectedCustomer.riskLevel === 'low' && currentMonthData.emiStatus === 'ontime';
                
                // Draw vertical line - green for low risk ontime, red for bounced
                ctx.strokeStyle = isLowRiskOnTime ? '#10B981' : '#DC2626';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(emiDayX, yAxis.top);
                ctx.lineTo(emiDayX, yAxis.bottom);
                ctx.stroke();
                
                // FIX 1: Position EMI label lower to avoid legend overlap
                ctx.setLineDash([]);
                ctx.font = 'bold 11px Inter, Arial';
                ctx.textAlign = 'center';
                
                // FIX 1: Show green "EMI Paid" for low risk, red "BOUNCED" for others
                const emiLabel = isLowRiskOnTime 
                    ? `EMI Paid - ₹${(emiAmount / 1000).toFixed(0)}K ✅`
                    : `EMI Due - ₹${(emiAmount / 1000).toFixed(0)}K | BOUNCED`;
                
                // Draw background for label - positioned lower
                const textWidth = ctx.measureText(emiLabel).width;
                const labelY = yAxis.top + 35; // Move down to avoid legend
                ctx.fillStyle = isLowRiskOnTime ? 'rgba(209, 250, 229, 0.95)' : 'rgba(254, 226, 226, 0.95)';
                ctx.fillRect(emiDayX - textWidth/2 - 6, labelY, textWidth + 12, 18);
                
                // Draw border
                ctx.strokeStyle = isLowRiskOnTime ? '#10B981' : '#DC2626';
                ctx.lineWidth = 1;
                ctx.strokeRect(emiDayX - textWidth/2 - 6, labelY, textWidth + 12, 18);
                
                // Draw text
                ctx.fillStyle = isLowRiskOnTime ? '#065F46' : '#991B1B';
                ctx.fillText(emiLabel, emiDayX, labelY + 13);
                
                // FIX 4: Add annotation for negative opening balance
                const firstBalance = currentMonthData.actualBalances[0];
                if (firstBalance && firstBalance < 0) {
                    const firstPointX = xAxis.getPixelForValue(0);
                    const firstPointY = yAxis.getPixelForValue(firstBalance);
                    
                    // Draw annotation line
                    ctx.strokeStyle = '#F59E0B';
                    ctx.lineWidth = 1.5;
                    ctx.setLineDash([3, 3]);
                    ctx.beginPath();
                    ctx.moveTo(firstPointX, firstPointY);
                    ctx.lineTo(firstPointX - 40, firstPointY - 30);
                    ctx.stroke();
                    
                    // Draw annotation text
                    ctx.setLineDash([]);
                    ctx.font = '10px Inter, Arial';
                    ctx.textAlign = 'right';
                    ctx.fillStyle = '#92400E';
                    ctx.fillText('Opening balance reflects', firstPointX - 45, firstPointY - 35);
                    ctx.fillText('prior period obligations', firstPointX - 45, firstPointY - 23);
                }
                
                ctx.restore();
            }
        }]
    });
    
    // Update comparison text with ACCURATE EMI risk analysis
    const balanceShortfall = Math.max(0, emiAmount - currentBalance);
    
    let comparisonText = '';
    if (isInWarningWindow && balanceBeforeEmi < emiAmount) {
        const shortfall = emiAmount - balanceBeforeEmi;
        comparisonText = `⚠️ Early Warning: Projected shortfall of ₹${(shortfall / 1000).toFixed(1)}K on Day ${emiDueDay} | ${daysUntilEmi} days to EMI`;
    } else if (isInWarningWindow && balanceAfterEmi < avgDailyDebit * 3) {
        comparisonText = `⚠️ Early Warning: Low post-EMI buffer (${currentMonthData.bufferDays} days) | ${daysUntilEmi} days to EMI`;
    } else if (balanceShortfall > 0) {
        comparisonText = `Current balance: ₹${(currentBalance / 1000).toFixed(1)}K | Need ₹${(balanceShortfall / 1000).toFixed(1)}K more for EMI`;
    } else {
        const surplus = currentBalance - emiAmount;
        comparisonText = `Current balance: ₹${(currentBalance / 1000).toFixed(1)}K | Surplus: ₹${(surplus / 1000).toFixed(1)}K after EMI`;
    }
    
    document.getElementById('customer-comparison-text').textContent = comparisonText;
    
    let projectionText = '';
    if (balanceBeforeEmi < emiAmount) {
        const shortfall = emiAmount - balanceBeforeEmi;
        projectionText = `🔴 HIGH RISK: Insufficient balance on Day ${emiDueDay} | Shortfall: ₹${(shortfall / 1000).toFixed(1)}K | ${emiMissProbability}% miss probability`;
    } else if (balanceAfterEmi < 0) {
        projectionText = `🔴 CRITICAL: Negative balance after EMI (₹${(Math.abs(balanceAfterEmi) / 1000).toFixed(1)}K) | ${emiMissProbability}% miss probability`;
    } else if (balanceAfterEmi < avgDailyDebit * 3) {
        const bufferDays = currentMonthData.bufferDays;
        projectionText = `⚠️ MEDIUM-HIGH RISK: Post-EMI buffer only ${bufferDays} days (₹${(balanceAfterEmi / 1000).toFixed(1)}K) | ${emiMissProbability}% miss probability`;
    } else {
        const bufferDays = currentMonthData.bufferDays;
        projectionText = `✅ LOW RISK: EMI payment likely to succeed | Post-EMI buffer: ${bufferDays} days (₹${(balanceAfterEmi / 1000).toFixed(1)}K) | ${emiMissProbability}% miss probability`;
    }
    
    document.getElementById('customer-projection-text').textContent = projectionText;
}

