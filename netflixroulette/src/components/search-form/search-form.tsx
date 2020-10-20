import * as React from 'react';
import enterSvg from '../../../assets/enter.svg'

import './search-form.css';

export default class SearchForm extends React.Component<{}, {}> {
  render() {
    return(
      <div className="search-form_container">
        <form className="search-form">
          <label className="search-form_label" htmlFor="search-form_input">
            Find your movie
          </label>
          <div className="search-form_input-wrapper">
          <input 
            id="search-form_input" 
            type="text"
            placeholder="Enter the movie"/>
        
            </div>
            <div className="search-form_btn-container">
              <div className="search-form_radio-toolbar">
                <span className="search-form_radio-label">Search by</span>
                <input type="radio" id="title" name="radioSearch" value="title" checked/>
                <label htmlFor="title">title</label>

                <input type="radio" id="genre" name="radioSearch" value="genre"/>
                <label htmlFor="genre">genre</label>
              </div>

              <input className="search-form_submit-btn" type="submit" value="Search" />
            </div>
            
        </form>
      </div>
    )
  }
}
