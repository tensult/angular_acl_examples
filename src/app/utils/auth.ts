
export class Auth {

    public static grantList = [
        { role: 'employee', resource: 'header', action: ['HR-helpdesk', 'Help', 'Finance', 'Immigration Service', 'employee', 'home', 'reports'] },
        { role: 'attorney', resource: 'header', action: ['help', 'attorney', 'home'] },
        { role: 'approver1', resource: 'header', action: ['help', 'approver', 'employee', 'home'] },
        { role: 'approver2', resource: 'header', action: ['help', 'C&B Team', 'approver', 'employee', 'home'] },
        { role: 'hr', resource: 'header', action: ['HR-helpdesk', 'Help', 'Finance', 'Immigration Service', 'employee', 'home'] },
        { role: 'employee', resource: 'sidebar',  action: ['My Profile', 'Visa Stamping Request', 'WorkPermit Request', 'Assignment letter', 'Travel Letter', 'Visa Status', 'LCA Transfer', 'Check List', 'Guidelines', 'Set Surrogate'] },
        { role: 'attorney', resource: 'sidebar', action:  ['pending', 'sent For filling', 'Acknowledge', 'RFE', 'Workpermit Details', 'LCA Transfer Pending', 'Invoice', 'Bank Details', 'Reports', 'Password Change'] },
        { role: 'approver1', resource: 'sidebar', action: ['help', 'approver', 'employee', 'home'] },
        { role: 'approver2', resource: 'sidebar', action: ['help', 'C&B Team', 'approver', 'employee', 'home'] },
        { role: 'hr', resource: 'sidebar', action: ['HR-helpdesk', 'Help', 'Finance', 'Immigration Service', 'employee', 'home'] }
    ];
}