import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/kyle.png'

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>

                            <hr/>

                            <p>
                                Java / Spring | JavaScript | NodeJS | React | HTML/CSS | Bootstrap | SQL | MongoDB
                            </p>

                            <div className="social-links">

                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/kylevessey/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/KVessey" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/*FreeCodeCamp*/}
                                <a href="https://www.freecodecamp.org/kvessey" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/*YouTube*/}
                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a> */}

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;