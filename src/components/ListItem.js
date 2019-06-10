import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = theme => ({
    root: {
        padding: 8,
        border: '1px solid black',
        borderRadius:2,
        marginBottom: 10,
        listStyle:'none',
        display:'flex',
        justifyContent: 'space-between'
    }
  });

export const ListItem = withStyles(styles, { name: 'ListItem' }) (({children,classes})=>{
    return (
        <li className={classes.root}>
            {children}
        </li>
    )
})
ListItem.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
  };