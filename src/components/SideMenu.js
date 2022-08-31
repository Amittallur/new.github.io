import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
        backgroundImage: 
 "url('https://thumbs.dreamstime.com/b/golden-bitcoins-black-background-left-side-trading-concept-crypto-currency-bitcoin-balck-94366896.jpg')",
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}

export default withStyles(style)(SideMenu);
