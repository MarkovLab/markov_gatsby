import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { loadCSS } from 'fg-loadcss'
import Icon from '@material-ui/core/Icon';

import socialmediaStyle from 'assets/jss/components/socialmediaStyle'

const SocialMedia = ({ classes }) => {
    
    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
    
        return () => {
          node.parentNode.removeChild(node);
        };
    }, []);

    return (
        <div className={classes.container}>
            <a href="#" className={classes.item}>
                <Icon 
                    className="fab fa-facebook-square"  
                    fontSize="large"
                />
            </a>
            <a href="#" className={classes.item}>
                <Icon className="fab fa-linkedin"  fontSize="large" />
            </a>
            <a href="#" className={classes.item}>
                <Icon className="fab fa-medium"  fontSize="large" />
            </a>
            <a href="#" className={classes.item}>
                <Icon className="fab fa-twitter-square"  fontSize="large" />
            </a>
            <a href="#" className={classes.item}>
                <Icon className="fab fa-youtube-square"  fontSize="large" />
            </a>
            <a href="#" className={classes.item}>
                <Icon className="fab fa-instagram-square"  fontSize="large" />
            </a>
        </div> 
    )
}

export default withStyles(socialmediaStyle)(SocialMedia)