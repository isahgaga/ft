import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = theme => ({
    root: {
        padding: 8
    },
    modal: {
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        padding: 16,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor: '#cccccc'
    },
    content: {
        height: '100%',
        overflowY: 'auto',
        backgroundColor: '#fff'
    },
    close: {
        justifySelf: 'flex-end',
        cursor: 'pointer'
    },
    title:{
        flexGrow:1,
        textAlign: 'center'
    }
});

export const Dialog = withStyles(styles, { name: 'Dialog' })(({ children, classes, closeFn,title }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>
                <span className={classes.title}>{title}</span>
                <span className={classes.close} onClick={closeFn}>X</span>
            </div>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
})
Dialog.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    closeFn: PropTypes.func,
    title: PropTypes.string
};
