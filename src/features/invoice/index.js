import React, { useState, useEffect } from 'react';
import { Button } from '../../components/button';
import withStyles from 'react-jss';
import { List } from '../../components/list';
import { ListItem } from '../../components/ListItem';
import { Dialog } from '../../components/dialog';
import { AddInvoice } from './addInvoice';
import { connect } from 'react-redux';
import { getInvoices } from '../../actions';


const styles = theme => ({
    btnWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    root: {
        padding: '5px 80px'
    },
    cell: {
        width: '16.33%',
        '&:last-child': {
            width: 'auto'
        }
    },
    edit: {
        marginRight: 10,
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    delete: {
        cursor: 'pointer',
        fontWeight: 'bold'
    },
});

export const Invoice = withStyles(styles, { name: 'Invoice' })(({ classes, invoices, getInvoices  }) => {
    const [openDialog, changeOpenDialog] = useState(false)
    useEffect(() => {
        getInvoices()
    }, [getInvoices]);
    return (
        <div className={classes.root}>
            <p>Invoice list:</p>
            <div className={classes.btnWrapper}>
                <Button onClick={() => changeOpenDialog(true)}>Add new invoice</Button>
            </div>
            <List>
                {
                    invoices.map(invoice => (
                        <ListItem key={invoice.id}>
                            <span className={classes.cell}>{invoice.date}</span>
                            <span className={classes.cell}>{invoice.comment}</span>
                            <span className={classes.cell}>{invoice.amount}</span>
                            <span className={classes.cell}>{invoice.iban}</span>
                            <span className={classes.cell}> <span className={classes.edit}>Edit</span> <span className={classes.delete}>Delete</span></span>
                        </ListItem>
                    ))
                }
            </List>
            {
                openDialog && (
                    <Dialog closeFn={() => changeOpenDialog(false)} title='Invoice'>
                        <AddInvoice />
                    </Dialog>
                )
            }
        </div>
    )
})

const mapStateToProps = (state) => ({
    invoices: state.invoices
})
const mapDispatchToProps = dispatch => ({
    getInvoices: () => {
        dispatch(getInvoices())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Invoice)