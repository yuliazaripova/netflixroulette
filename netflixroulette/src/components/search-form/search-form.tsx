import * as React from 'react';
import RadioToolbar from '../radio-toolbar';

import './search-form.css';

interface ISearchFormProps {

}

const SearchForm:React.FC<ISearchFormProps> = () => {
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
              <RadioToolbar name="search-form"
                            items={[
                                    {
                                      id:"title", 
                                      isChecked:true
                                    },
                                    {
                                      id:"genre"
                                    }
                              ]}/>

              <input className="search-form_submit-btn" type="submit" value="Search" />
            </div>
            
        </form>
      </div>
    )
}

export default SearchForm;

