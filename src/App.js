import React, { Component } from "react";
import Auth from './services/auth/auth'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyEditor from "./SurveyEditor";
import Callback from './components/Callback'
import { mapDefaultValuesToPage } from './blocks/blocks'
import Header from './components/Header'
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

// form json
// import { waco } from './forms/waco'
// import { columbus } from './forms/columbus'
// import { pittsburgh } from './forms/pittsburgh'
import PersonalInfo from './blocks/personal-info'
import Appearance from './blocks/appearance'
import AddressHistory from './blocks/address-history'
import BusinessHistory from './blocks/business-history'
import BusinessInfo from './blocks/business-info'

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

const auth = new Auth()
const defaults = {
  "address-line-1": "1313 Fake Pl",
  "address-line-2": "APT 34",
  "are-you-a-us-citizen": "yes",
  "city": "O-town",
  "date-of-birth": "2018-10-05",
  "drivers-license-number": "1234567",
  "first-name": "John",
  "last-name": "Doe",
  "middle-name": "D",
  "place-of-birth": "Nebulous Galaxy",
  "primary-phone": "(555) 555-5555",
  "secondary-phone": "(555) 555-5555",
  "ssn": "555-55-5555",
  "states": "Maine",
  "zip": "90210"
}
// todo figure out default values
class App extends Component {
  state = {
    authed: auth.isAuthenticated(),
    loading: false,
    json: {pages: [mapDefaultValuesToPage(defaults, PersonalInfo)]}
  }
  blocks = {PersonalInfo, Appearance, AddressHistory, BusinessHistory, BusinessInfo}

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
    if (!auth.isAuthenticated()) {
      this.handleAuthentication()
    }
    console.log('personal info', PersonalInfo)
  }

  onValueChanged(result) {
    console.log("value changed!", result);
  }

  onComplete(result) {
    console.log("Complete! ", result);
  }

  getLoading() {
    return (<Callback />)
  }

  getLogin() {
    return null
  }

  handleAuthentication() {
    let { location } = window
    console.log('location', location)
    if (/access_token|id_token|error/.test(location.hash)) {
      this.setState({loading: true})
      auth.handleAuthentication()
        .then(() => this.setState({authed: true, loading: false}))
        .catch(err => {
          console.error(err)
          this.setState({authed: false, loading: false})
        })
    } else {
      this.setState({authed: false})
    }
  }

  getAppMenu(props) {
    console.log('routes', props)
    const authed = this.state.authed

    const authNav = authed ?
      { title: 'Logout', linkProps: {onClick:()=>auth.logout()}, buttonProps: { color: 'secondary', variant: 'contained' } }
      : { title: 'Login', linkProps: {onClick:()=>auth.login()}, buttonProps: { color: 'secondary', variant: 'contained' } };

    return (
      <div>
        <Header
          variant='center'
          color='primary'
          brand={{
            title: 'Licensr',
            variant: 'headline'
          }}
          appBarProps={{
            position: 'fixed',
          }}
          navItems={[
            { title: 'Uniforms', to: '/uniforms' },
            authNav
          ]}
        />
        {props.children}
      </div>
    )
  }

  getForm() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.state.json)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
          {/*<button onClick={() => this.setState({json: waco})}>waco</button>
          <button onClick={() => this.setState({json: columbus})}>columbus</button>
          <button onClick={() => this.setState({json: pittsburgh})}>pittsburgh</button>*/}
          {Object.keys(this.blocks).map(block => <button key={block} onClick={() => this.setState({ json: { pages: [ this.blocks[block] ] }})}>{block}</button>)}
          
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you want to show survey editor, uncomment the line below*/}
          <h1>SurveyJS Editor in action:</h1>
          <SurveyEditor />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  getBody() {
    console.log('state', this.state)
    if (this.state.loading) {
      return this.getLoading()
    }
    if (this.state.authed) {
      return this.getForm()
    }
    return this.getLogin()
  }

  render() {
    return this.getAppMenu({children: this.getBody()})
  }
}

export default App;
