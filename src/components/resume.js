import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../img/kyle.png'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={avatar}
                                alt="avatar"
                                style={{height: '250px', borderRadius: '150px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '.5em'}}>Kyle Vessey</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #32CD32', width: '60%' }}/>

                        <p>
                            Software Engineer with 5 years of experience designing and testing applications for the telecommunications sector. 
                            I am currently part of a Agile team working on enterprise applications to enhance solutions for our Service Providers and customers globally.
                            My professional skill set includes mostly the Java stack as well as the Javascript (NodeJS and React) for my daily duties at my current position, 
                            however I really enjoy creating side projects in Python as well. 
                        </p>

                        <hr style={{borderTop: '3px solid #32CD32', width: '60%' }}/>

                            <h5>Address</h5>
                            <p style={{paddingLeft: '15px'}}>Located in Spring, Texas, 77386</p>
                            <p style={{paddingLeft: '15px'}}>Willing to Relocate</p>

                            <h5>Phone</h5>
                            <p style={{paddingLeft: '15px'}}>(832) 392-4958</p>

                            <h5>Email</h5>
                            <p style={{paddingLeft: '15px'}}>k.vessey@gmail.com</p>

                            <h5>Personal Website</h5>
                            <p style={{paddingLeft: '15px'}}>www.kylevessey.com</p>
                            
                            <h5>GitHub</h5>
                            <p style={{paddingLeft: '15px'}}>www.github.com/kvessey</p>

                        <hr style={{borderTop: '3px solid #32CD32', width: '60%' }}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                            <Experience 
                                startYear={2017}
                                endYear="Present"
                                jobName="Cisco Systems, Inc."
                                jobDescription="Software Engineer"
                                jobDuties="●	Supported Cisco Cloud Collaboration Group’s transition from an on-premise telecommunication service to a 
                                multi-clustered cloud-based SaaS solution by writing highly scalable software in an Agile environment"
                            />
                            <Experience 
                                startYear={2015}
                                endYear={2017}
                                jobName="BroadSoft (Acquired by Cisco)"
                                jobDescription="Software Development Engineer in Test"  
                                jobDuties="●	Lead team in transition from manual testing to automation by using Java Selenium Webdriver to develop, 
                                execute and automate sanity/regression test cases."                              
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Education</h2>
                            <Education 
                                startYear={2010}
                                endYear={2019}
                                schoolName="University of Houston - Downtown"
                                gpa="(GPA: 3.46)"
                                schoolDescription="Bachelor's Degree in Computer Science - Cum Laude"
                            />
                            <Education 
                                startYear={2016}
                                endYear={2018}
                                schoolName="Lone Star College"
                                schoolDescription="Computer Programmer Certificate - With Distinction"
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />


                        <h2>Skills</h2>
                        <div className="software-skills">
                            <h3 style={{paddingLeft: '30px'}}>Software:</h3>

                            <Skills 
                                skill="Java"
                                progress={75}
                            />
                            <Skills 
                                skill="Groovy"
                                progress={80}
                            />
                            <Skills 
                                skill="JavaScript"
                                progress={75}
                            />
                            <Skills 
                                skill="JQuery"
                                progress={50}
                            />
                            <Skills 
                                skill="HTML5 / CSS"
                                progress={70}
                            />
                            <Skills 
                                skill="Freemarker"
                                progress={80}
                            />
                            <Skills 
                                skill="SQL"
                                progress={60}
                            />
                            <Skills 
                                skill="NodeJS"
                                progress={50}
                            />
                            <Skills 
                                skill="React.js"
                                progress={30}
                            />
                            <Skills 
                                skill="Backbone.js"
                                progress={30}
                            />
                            <Skills 
                                skill="Angular 7"
                                progress={30}
                            />
                            <Skills 
                                skill="SoapUI"
                                progress={40}
                            />
                            <Skills 
                                skill="Postman API"
                                progress={40}
                            />
                            <Skills 
                                skill="XML"
                                progress={60}
                            />
                            <Skills 
                                skill="C++"
                                progress={20}
                            />
                        </div>

                        <div className="version-control-skills">
                            <h3 style={{paddingLeft: '30px'}}>Build & Deployment Tools:</h3>
                            <Skills 
                                    skill="SVN"
                                    progress={70}
                            />
                            <Skills 
                                    skill="Git"
                                    progress={80}
                            />
                        </div>

                        <div className="server-tech-skills">
                            <h3 style={{paddingLeft: '30px'}}>Server Technology:</h3>
                            <Skills 
                                    skill="Linux"
                                    progress={60}
                            />
                            <Skills 
                                    skill="Tomcat"
                                    progress={50}
                            />
                            <Skills 
                                    skill="NGINX"
                                    progress={50}
                            />
                        </div>

                        <div className="automation-skills">
                            <h3 style={{paddingLeft: '30px'}}>Test Automation:</h3>
                            <Skills 
                                    skill="JUnit"
                                    progress={60}
                            />
                            <Skills 
                                    skill="Jmeter"
                                    progress={50}
                            />
                            <Skills 
                                    skill="Selenium"
                                    progress={50}
                            />
                            <Skills 
                                    skill="RobotFramework (Python)"
                                    progress={50}
                            />
                        </div>

                        <div className="build-skills">
                            <h3 style={{paddingLeft: '30px'}}>Build & Deployment Tools:</h3>
                            <Skills 
                                    skill="Apache Maven"
                                    progress={60}
                            />
                            <Skills 
                                    skill="Apache Ant"
                                    progress={50}
                            />
                            <Skills 
                                    skill="Jenkins"
                                    progress={40}
                            />
                        </div>

                        <div className="defect-tracking-skills">
                            <h3 style={{paddingLeft: '30px'}}>Defect Tracking Tools:</h3>
                            <Skills 
                                    skill="JIRA"
                                    progress={80}
                            />
                            <Skills 
                                    skill="TestLink"
                                    progress={70}
                            />
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;