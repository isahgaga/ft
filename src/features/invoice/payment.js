import React, { useEffect } from 'react';
import { Button } from '../../components/button';
import withStyles from 'react-jss';
import { List } from '../../components/list';
import { ListItem } from '../../components/ListItem';
import { connect } from 'react-redux';
import { getPayments,addInvoice } from '../../actions';

const styles = theme => ({
    root: {
        padding: 30
    },
    cell: {
        width: '32.66%',
        '&:last-child': {
            width: 'auto'
        }
    },
    search: {
        marginRight: 15
    },
    input: {
        flexGrow: 1,
        height: 40,
        fontSize: 16
    },
    searchWrapper: {
        display: 'flex',
        alignItems: 'center',

    }
});

export const Payment = withStyles(styles, { name: 'Payment' })(({ classes, payments, getPayments, addInvoice }) => {
    useEffect(() => {
        getPayments()
    }, [getPayments]);
    return (
        <div className={classes.root}>
            <div className={classes.searchWrapper}>
                <span className={classes.search}>Search IBAN:</span>
                <input className={classes.input} placeholder="search" />
            </div>
            <p>Found bank Transfers</p>
            <List>
                {
                    payments.map(payment => (
                        <ListItem onCLick={() => { }} key={payment.id}>
                            <span className={classes.cell}>{payment.comment}</span>
                            <span className={classes.cell}>{payment.amount}</span>
                            <span className={classes.cell}>{payment.iban}</span>
                        </ListItem>
                    ))
                }
            </List>
            <div style={{ textAlign: 'center' }}>
                <Button onCLick={()=>addInvoice()}>Done</Button>
            </div>

        </div>
    )
})
const mapStateToProps = (state) => ({
    payments: state.payments
})
const mapDispatchToProps = dispatch => ({
    getPayments: () => {
        dispatch(getPayments())
    },
    addInvoice: (payload)=>dispatch(addInvoice(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Payment)