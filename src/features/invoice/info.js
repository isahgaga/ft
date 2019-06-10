import React, { useState } from 'react';
import { Button } from '../../components/button';
import withStyles from 'react-jss';
import { Switch } from '../../components/switch';
import { addInvoice } from '../../actions';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        padding: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    formGroup: {
        marginBottom: 20
    },
    btnWrapper: {

    }
});

export const Info = withStyles(styles, { name: 'Info' })(({ classes, next, addInvoice }) => {
    const [fromBankAccount, changefromBankAccount] = useState(false)
    return (
        <div className={classes.root}>
            <div className={classes.formWrapper}>
                <div className={classes.formGroup}>
                    <label>Date: </label>
                    <input type='text' />
                </div>
                <div className={classes.formGroup}>
                    <label>Subject: </label>
                    <input type='text' />
                </div>
                <div className={classes.formGroup}>
                    <Switch onChange={({ target }) => changefromBankAccount(target.checked)} />
                </div>
                {
                    !fromBankAccount &&
                    (<div className={classes.formGroup}>
                        <label>Amount: </label>
                        <input type='text' />
                    </div>)
                }


            </div>
            <div className={classes.btnWrapper}>
                {
                    fromBankAccount ? <Button onClick={next}>Next</Button> : <Button onClick={()=>addInvoice()}>Done</Button>
                }
            </div>

        </div>
    )
})
const mapStateToProps = (state) => ({
    
})
const mapDispatchToProps = dispatch => ({
    addInvoice: (payload)=>dispatch(addInvoice(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Info)