import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = theme => ({
    root: {
        backgroundColor: '#cfe2f3',
        padding: 8,
        color: 'black',
        border: '1px solid black',
        borderRadius:4,
        cursor: 'pointer'
    }
  });

export const Button = withStyles(styles, { name: 'Button' }) (({children,classes,onClick})=>{
    return (
        <button className={classes.root} onClick={onClick}>
            {children}
        </button>
    )
})
Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    onClick: PropTypes.func
  };