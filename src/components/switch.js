

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

const styles = theme => ({
    root: {

    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: 60,
        height: 34,
        '& > input': {
            opacity: 0,
            width: 0,
            height: 0,
        }
    },
    round: {

    },
    slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '.4s',
        '&:before': {
            position: 'absolute',
            content: '""',
            height: 26,
            width: 26,
            left: 4,
            bottom: 4,
            backgroundColor: 'white',
            transition: '.4s',
        },
        '&$round': {
            borderRadius: 34
        },
        '&$round:before': {
            borderRadius: '50%'
        }
    },
    input: {
        '&:checked + $slider': {
            backgroundColor: '#2196F3'
        },
        '&:focus + $slider': {
            boxShadow: '0 0 1px #2196F3'
        },
        '&:checked + $slider:before': {
            transform: 'translateX(26px)'
        }
    },

}
);

export const Switch = withStyles(styles, { name: 'Switch' })(({ classes, onChange }) => {
    return (
        <label className={classes.switch}>
            <input className={classes.input} type="checkbox" onChange={onChange}/>
            <span className={classNames(classes.slider, classes.round)} ></span>
        </label>
    )
})
Switch.propTypes = {
    classes: PropTypes.object,
    onChange: PropTypes.func
};

