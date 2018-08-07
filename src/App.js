import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyEditor from "./SurveyEditor";
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
import { waco } from './forms/waco'
import { columbus } from './forms/columbus'
import { pittsburgh } from './forms/pittsburgh'
import PersonalInfo from './blocks/personal-info'
import Appearance from './blocks/appearance'
import AddressHistory from './blocks/address-history'
import BusinessHistory from './blocks/business-history'

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

class App extends Component {
  state = {
    json: {pages: [PersonalInfo, Appearance, AddressHistory, BusinessHistory]}
  }

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.state.json)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
          <button onClick={() => this.setState({json: waco})}>waco</button>
          <button onClick={() => this.setState({json: columbus})}>columbus</button>
          <button onClick={() => this.setState({json: pittsburgh})}>pittsburgh</button>
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
}

export default App;
