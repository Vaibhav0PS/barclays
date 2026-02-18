// ========================================
// AI INTERVENTION MODAL FUNCTIONS
// ========================================

const GEMINI_API_KEY = 'AIzaSyB2OiuZWmSFjo6RBsb5eg88wh-13nN_kd4';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

let currentInterventionCustomer = null;
let isAIAutomationEnabled = false;

// Test that the script is loaded
console.log('[SUCCESS] intervention.js loaded successfully');

// Make function globally accessible
window.openInterventionModal = openInterventionModal;
window.closeInterventionModal = closeInterventionModal;
window.toggleAIAutomation = toggleAIAutomation;
window.updateInterventionMessage = updateInterventionMessage;
window.regenerateMessage = regenerateMessage;
window.sendIntervention = sendIntervention;
window.scheduleIntervention = scheduleIntervention;

// Open Intervention Modal
function openInterventionModal() {
    console.log('=== openInterventionModal called ===');
    
    // Get the current customer from the detail view
    let customer = null;
    
    // Check if mockCustomers exists
    if (typeof mockCustomers === 'undefined') {
        console.error('mockCustomers is not defined!');
        alert('Error: Customer data not loaded. Please refresh the page.');
        return;
    }
    
    console.log('mockCustomers available:', mockCustomers.length, 'customers');
    
    // Try to get from selectedCustomer global variable
    if (typeof selectedCustomer !== 'undefined' && selectedCustomer) {
        console.log('Using selectedCustomer:', selectedCustomer);
        customer = selectedCustomer;
    } else {
        console.log('selectedCustomer not available, trying to get from page');
        // Try to get customer ID from the page
        const customerIdElement = document.getElementById('customer-id-subtitle');
        if (customerIdElement) {
            const customerId = customerIdElement.textContent.trim();
            console.log('Found customer ID from page:', customerId);
            customer = mockCustomers.find(c => c.id === customerId);
        } else {
            console.error('customer-id-subtitle element not found');
        }
    }
    
    if (!customer) {
        console.error('No customer found!');
        alert('Please select a customer first');
        return;
    }
    
    console.log('Customer found:', customer.name, customer.id);
    currentInterventionCustomer = customer;
    
    // Populate modal with customer data
    document.getElementById('intervention-customer-name').textContent = currentInterventionCustomer.name;
    document.getElementById('intervention-customer-id').textContent = currentInterventionCustomer.id;
    document.getElementById('intervention-emi-amount').textContent = `₹${(currentInterventionCustomer.emiAmount / 1000).toFixed(1)}K`;
    
    // Calculate days to EMI
    const today = new Date('2026-02-17');
    const emiDate = new Date(currentInterventionCustomer.nextEmiDate);
    const daysToEmi = Math.ceil((emiDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById('intervention-days-to-emi').textContent = `${daysToEmi} days`;
    
    // Calculate miss probability based on risk score
    const missProbability = currentInterventionCustomer.riskScore;
    document.getElementById('intervention-miss-probability').textContent = `${missProbability}%`;
    
    // Set risk badge
    const riskBadge = document.getElementById('intervention-risk-badge');
    const riskClass = currentInterventionCustomer.riskLevel === 'high' ? 'risk-high' : 
                      currentInterventionCustomer.riskLevel === 'medium' ? 'risk-medium' : 'risk-low';
    riskBadge.innerHTML = `<span class="risk-badge ${riskClass}">${currentInterventionCustomer.riskLevel.toUpperCase()} RISK</span>`;
    
    // Reset toggle
    document.getElementById('ai-automation-toggle').checked = false;
    isAIAutomationEnabled = false;
    document.getElementById('manual-strategy-section').style.display = 'block';
    document.getElementById('ai-automation-description').textContent = 'Manually select intervention strategy below';
    
    // Generate initial message
    updateInterventionMessage();
    
    // Check if AI should auto-trigger
    if (missProbability > 70 && daysToEmi <= 5) {
        // Auto-enable AI automation for high-risk cases
        setTimeout(() => {
            document.getElementById('ai-automation-toggle').checked = true;
            toggleAIAutomation();
        }, 500);
    }
    
    // Show modal
    document.getElementById('intervention-modal').style.display = 'flex';
}

// Close Intervention Modal
function closeInterventionModal() {
    document.getElementById('intervention-modal').style.display = 'none';
    currentInterventionCustomer = null;
}

// Toggle AI Automation
function toggleAIAutomation() {
    const toggle = document.getElementById('ai-automation-toggle');
    isAIAutomationEnabled = toggle.checked;
    
    const manualSection = document.getElementById('manual-strategy-section');
    const description = document.getElementById('ai-automation-description');
    const strategySelect = document.getElementById('intervention-strategy');
    
    if (isAIAutomationEnabled) {
        manualSection.style.display = 'none';
        description.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg><strong>AI Agent Active:</strong> Intervention will be auto-triggered based on RL policy';
        description.style.color = '#059669';
        strategySelect.disabled = true;
        
        // Auto-select best strategy using RL policy
        const missProbability = currentInterventionCustomer.riskScore;
        const today = new Date('2026-02-17');
        const emiDate = new Date(currentInterventionCustomer.nextEmiDate);
        const daysToEmi = Math.ceil((emiDate - today) / (1000 * 60 * 60 * 24));
        
        let autoStrategy = 'soft_reminder';
        if (missProbability > 70 && daysToEmi <= 5) {
            autoStrategy = 'urgent_reminder';
        } else if (missProbability > 60 && daysToEmi <= 7) {
            autoStrategy = 'restructure_offer';
        } else if (missProbability > 50) {
            autoStrategy = 'emi_extension';
        }
        
        strategySelect.value = autoStrategy;
        updateInterventionMessage();
    } else {
        manualSection.style.display = 'block';
        description.textContent = 'Manually select intervention strategy below';
        description.style.color = '#6B7280';
        strategySelect.disabled = false;
    }
}

// Update Intervention Message based on strategy
function updateInterventionMessage() {
    const strategy = document.getElementById('intervention-strategy').value;
    const customer = currentInterventionCustomer;
    
    if (!customer) return;
    
    const today = new Date('2026-02-17');
    const emiDate = new Date(customer.nextEmiDate);
    const daysToEmi = Math.ceil((emiDate - today) / (1000 * 60 * 60 * 24));
    
    let message = '';
    
    switch(strategy) {
        case 'soft_reminder':
            message = `Dear ${customer.name},

This is a friendly reminder that your EMI payment of ₹${(customer.emiAmount / 1000).toFixed(1)}K is due in ${daysToEmi} days (${customer.nextEmiDate}).

We noticed your account balance may need attention. Please ensure sufficient funds are available to avoid any inconvenience.

For assistance, contact us at 1800-XXX-XXXX or visit your nearest branch.

If you have already made the payment, please ignore this message.

Best regards,
Barclays Customer Care Team`;
            break;
            
        case 'urgent_reminder':
            message = `URGENT: EMI Payment Due Soon

Dear ${customer.name},

Your EMI payment of ₹${(customer.emiAmount / 1000).toFixed(1)}K is due in ${daysToEmi} days (${customer.nextEmiDate}).

[!] Current account balance may be insufficient. Please arrange funds immediately to avoid:
• Late payment charges
• Impact on credit score
• Additional interest

Quick Actions:
• Transfer funds to your account
• Set up auto-debit
• Contact us for payment options

24/7 Helpline: 1800-XXX-XXXX

If you have already made the payment, please ignore this message.

Regards,
Barclays Collections Team`;
            break;
            
        case 'restructure_offer':
            message = `Special Loan Restructuring Offer

Dear ${customer.name},

We understand financial situations can change. We're here to help!

Your current EMI: ₹${(customer.emiAmount / 1000).toFixed(1)}K
Due date: ${customer.nextEmiDate}

Restructuring Options Available:
• Extend loan tenure (reduce EMI by up to 30%)
• Moratorium period (skip 1-2 EMIs)
• Interest rate revision

Speak to our Relationship Manager:
Call: 1800-XXX-XXXX
Email: restructure@barclays.com

This offer is valid for 7 days. Terms & conditions apply.

If you have already made the payment, please ignore this message.

Warm regards,
Barclays Loan Restructuring Team`;
            break;
            
        case 'emi_extension':
            message = `EMI Payment Extension Approved

Dear ${customer.name},

Good news! We can extend your EMI payment deadline.

Current due date: ${customer.nextEmiDate}
EMI amount: ₹${(customer.emiAmount / 1000).toFixed(1)}K

Extension Options:
• 7-day extension (minimal charges)
• 15-day extension (standard charges)
• Custom payment plan

To activate extension:
1. Reply "EXTEND" to this message
2. Call 1800-XXX-XXXX
3. Visit online banking portal

Note: Extension charges may apply. This is a one-time facility.

If you have already made the payment, please ignore this message.

Best regards,
Barclays Customer Support`;
            break;
            
        case 'partial_payment':
            message = `Partial Payment Option Available

Dear ${customer.name},

We understand you may be facing temporary cash flow challenges.

EMI due: ₹${(customer.emiAmount / 1000).toFixed(1)}K
Due date: ${customer.nextEmiDate}

Partial Payment Accepted:
• Pay minimum 50% now (₹${(customer.emiAmount * 0.5 / 1000).toFixed(1)}K)
• Balance within 15 days
• Avoid late payment penalties

How to proceed:
1. Make partial payment via online banking
2. Call us at 1800-XXX-XXXX to confirm
3. Schedule balance payment

This is a special facility to help you maintain good credit standing.

If you have already made the payment, please ignore this message.

Regards,
Barclays Payment Solutions Team`;
            break;
    }
    
    document.getElementById('intervention-message').value = message;
}

// Regenerate Message with Gemini AI
async function regenerateMessage() {
    const strategy = document.getElementById('intervention-strategy').value;
    const customer = currentInterventionCustomer;
    const messageTextarea = document.getElementById('intervention-message');
    const regenerateBtn = document.getElementById('regenerate-btn');
    
    if (!customer) return;
    
    // Show loading state
    regenerateBtn.disabled = true;
    regenerateBtn.classList.add('loading');
    regenerateBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>Generating...';
    
    const today = new Date('2026-02-17');
    const emiDate = new Date(customer.nextEmiDate);
    const daysToEmi = Math.ceil((emiDate - today) / (1000 * 60 * 60 * 24));
    
    const strategyNames = {
        'soft_reminder': 'Soft Reminder',
        'urgent_reminder': 'Urgent Reminder',
        'restructure_offer': 'Loan Restructuring Offer',
        'emi_extension': 'EMI Extension',
        'partial_payment': 'Partial Payment Option'
    };
    
    const prompt = `You are a professional banking communication specialist at Barclays Bank. Generate a customer intervention message with the following details:

Customer Name: ${customer.name}
Customer ID: ${customer.id}
EMI Amount: ₹${(customer.emiAmount / 1000).toFixed(1)}K
Days to EMI: ${daysToEmi} days
EMI Due Date: ${customer.nextEmiDate}
Risk Level: ${customer.riskLevel.toUpperCase()}
Strategy: ${strategyNames[strategy]}

CRITICAL COMPLIANCE REQUIREMENTS (RBI Guidelines):
1. Must be respectful and non-threatening
2. Must include grievance contact information
3. Must include opt-out option
4. Must end with: "If you have already made the payment, please ignore this message."
5. Use professional banking tone
6. Be empathetic and solution-oriented
7. Keep message concise (under 200 words)
8. Include specific action steps
9. Mention helpline: 1800-XXX-XXXX

Generate a compliant, professional, and effective intervention message:`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate message');
        }
        
        const data = await response.json();
        const generatedMessage = data.candidates[0].content.parts[0].text;
        
        messageTextarea.value = generatedMessage;
        
        // Show success feedback
        regenerateBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        setTimeout(() => {
            regenerateBtn.style.background = '';
        }, 1000);
        
    } catch (error) {
        console.error('Error generating message:', error);
        alert('Failed to generate AI message. Please try again or edit manually.');
    } finally {
        // Reset button state
        regenerateBtn.disabled = false;
        regenerateBtn.classList.remove('loading');
        regenerateBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>Regenerate with AI';
    }
}

// Send Intervention
async function sendIntervention() {
    const message = document.getElementById('intervention-message').value;
    const strategy = document.getElementById('intervention-strategy').value;
    const customer = currentInterventionCustomer;
    
    if (!message.trim()) {
        alert('Please generate or enter an intervention message');
        return;
    }
    
    // Simulate API call
    const interventionData = {
        customer_id: customer.id,
        customer_name: customer.name,
        strategy: strategy,
        message: message,
        emi_amount: customer.emiAmount,
        risk_level: customer.riskLevel,
        ai_automated: isAIAutomationEnabled,
        timestamp: new Date().toISOString()
    };
    
    console.log('Sending intervention:', interventionData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success toast
    showToast('Intervention sent successfully!', 'success');
    
    // Log to console (in real app, this would go to DynamoDB)
    console.log('Intervention logged to DynamoDB:', interventionData);
    
    // Close modal
    closeInterventionModal();
}

// Schedule Intervention
function scheduleIntervention() {
    const message = document.getElementById('intervention-message').value;
    
    if (!message.trim()) {
        alert('Please generate or enter an intervention message');
        return;
    }
    
    // In a real app, this would open a date/time picker
    const scheduleTime = prompt('Enter schedule time (e.g., "2026-02-18 10:00 AM"):');
    
    if (scheduleTime) {
        showToast(`Intervention scheduled for ${scheduleTime}`, 'success');
        console.log('Scheduled intervention:', {
            customer: currentInterventionCustomer.id,
            schedule_time: scheduleTime,
            message: message
        });
        closeInterventionModal();
    }
}

// Show Toast Notification
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Create icon based on type
    const icon = type === 'success' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 8px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 8px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    
    toast.innerHTML = icon + message;
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)'};
        color: white;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        display: flex;
        align-items: center;
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add toast animations to CSS dynamically
if (!document.getElementById('toast-animations')) {
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
