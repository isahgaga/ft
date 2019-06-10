import React,{useState} from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Info from './info';
import Payment from './payment';

const styles = theme => ({
    root:{
        display:'flex',
        height:'100%',
        width:'100%'
    },
    col1:{
        height:'100%',
        backgroundColor: '#f3f3f3',
        borderRight: '1px solid #cccccc',
    },
    col2:{
        flexGrow:1,
    },
    item:{
        padding:10,
        borderBottom: '1px solid #cccccc',
    },
    inactive:{
        color:'#c9c9c9'
    }
  });

export const AddInvoice = withStyles(styles, { name: 'AddInvoice' }) (({classes})=>{
    const [activeTab, changeActiveTab] = useState(0)
    return(
        <div className={classes.root}>
           <div className={classes.col1}>
<div className={classNames(classes.item,{[classes.inactive]: activeTab !== 0})} onClick={()=>changeActiveTab(0)}>Invoice information</div>
<div className={classNames(classes.item,{[classes.inactive]: activeTab !== 1})} onClick={()=>changeActiveTab(1)}>Payments</div>
           </div>
           <div className={classes.col2}>
            {
                activeTab === 0 && <Info next={()=>changeActiveTab(1)}/>
            }
            {
                activeTab === 1 && <Payment />
            }
           </div>
        </div>
    )
})