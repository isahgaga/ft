import { REQUEST_INVOICES, REQUEST_PAYMENTS, REQUEST_ADD_INVOICE } from "./constants";

export const getInvoices = ()=>({
    type:REQUEST_INVOICES
})
export const getPayments = ()=>({
    type:REQUEST_PAYMENTS
})
export const addInvoice = (payload)=>({
    type:REQUEST_ADD_INVOICE,
    payload
})
