import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = theme => ({
    root: {
        padding: 8
    }
  });

export const List = withStyles(styles, { name: 'List' }) (({children,classes})=>{
    return (
        <ul className={classes.root}>
            {children}
        </ul>
    )
})
List.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
  };