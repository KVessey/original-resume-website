import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={10}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName} <span style={{fontSize: '.6em', fontStyle: 'italic'}}>{this.props.gpa}</span></h4>
                    <p style={{paddingLeft: '20px'}}>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;