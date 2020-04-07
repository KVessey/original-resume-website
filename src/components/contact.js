import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../img/kyle.png'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kyle A Vessey</h2>
                        <img 
                            src={avatar}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Software Engineer with 5 years of experience designing and testing applications for the telecommunications sector. 
                            I am currently part of a Agile team working on enterprise applications to enhance solutions for our Service Providers and customers globally.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (832) 392-4958
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        <a className="email-link" href="mailto:k.vessey@gmail.com">k.vessey@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a className="email-link" href="https://www.linkedin.com/in/kylevessey/" rel="noopener noreferrer" target="_blank">linkedin.com/in/kylevessey/</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;