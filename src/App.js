import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Grid, Col, Row} from 'react-bootstrap';

import education from './editables/education.json';
import experience from './editables/experience.json';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEducations() {
    return education.map((entry, index) => {
      return (
        <div className="sub-container subeducation-container" key={index}>
          <Row className="school-row">
            <Col xs={12} md={8}>
              <a href={entry.school_link}><h5 className="school ">{entry.school}</h5></a>
            </Col>
            <Col xs={6} md={4}>
              <p className="year float-right" ex={6} md={4}>{entry.year}</p>
            </Col>
          </Row>
          <p className="degree">{entry.degree}</p>
          <p className="gpa"><span className="h6">{entry.gpa_title}</span>{entry.gpa}</p>
          <p className="relevant_coursework"><span className="h6">Relevant Coursework: </span>{entry.relevant_coursework}</p>
        </div>
      )
    })
  }

  renderDetails(details) {
    return details.map((entry, index) => {
      return (
        <li className="detail">{entry}</li>
      )
    })
  }

  renderExperienceDetails(d) {
    return d.map((entry, index) => {
      return (
        <div className="sub-container subwork-container" key={index}>
          <Row>
            <Col xs={12} md={8}>
              <a href={entry.header_link}><h5 className="header">{entry.header}</h5></a>
            </Col>
            <Col xs={6} md={4}>
              <h6 className="first-right-align float-right" ex={6} md={4}>{entry.first_right_align}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <p className="title">{entry.title}</p>
            </Col>
            <Col xs={6} md={4}>
              <p className="second-right-align float-right" ex={6} md={4}>{entry.second_right_align}</p>
            </Col>
          </Row>
          <ul>
            {this.renderDetails(entry.details)}
          </ul>
        </div>
      )
    })
  }

  renderExperiences() {
    return experience.map((entry, index) => {
      return (
        <div className="other-container" key={index}>
          <h3 className="page-header">{entry.section_title}</h3>
          {this.renderExperienceDetails(entry.section_data)}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Amy Chiu - Online Portfolio</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content="Amy Chiu" />
          <meta name="author" content="Amy Chiu" />
          <meta name="description" content="Amy Chiu - Online Portfolio" />
        </Helmet>
        <Grid>
          <div className="name-container">
            <h3>Amy Chiu - Online Portfolio</h3>
          </div>
          <div className="education-container">
            <h3 className="page-header">Education</h3>
            {this.renderEducations()}
          </div>
          {this.renderExperiences()}
        </Grid>
      </div>
    );
  }
}

export default App;
