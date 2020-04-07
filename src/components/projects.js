import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                            'url(https://reactjs.org/logo-og.png) center / cover'}}>Personal Resume Website</CardTitle>
                        <CardText>
                            My personal resume website, which is created in React
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/KVessey/resume-website" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                            <Button colored>CodePen</Button>
                            <a href="/" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                            'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                            This is dummy text to describe the project
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                            'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #3</CardTitle>
                        <CardText>
                            This is dummy text to describe the project
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                            'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #4</CardTitle>
                        <CardText>
                            This is dummy text to describe the project
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>Angular Projects to be added....</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>Java Projects to be added....</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>MongoDB Projects to be added....</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div><h1>NodeJS Projects to be added....</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Java</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>                    
            </div>
        )
    }
}

export default Projects;