import * as React from 'react';
import RadioToolbar from '../../../common/components/radio-toolbar';

interface ISearchFormViewProps {
  searchMovies: (e: React.FormEvent<EventTarget>) => void,
  updateSearchValue: (e:React.ChangeEvent<HTMLInputElement>) => void,
  updateSearchBy: (v:string) => void,
  searchValue: string
}

const items = [
  {
    id:"title", 
    isChecked:true
  },
  {
    id:"genres",
    value:"genre"
  }
];

const SearchFormView:React.FC<ISearchFormViewProps> = ({ searchMovies, updateSearchValue, updateSearchBy, searchValue }) => {
  return(
    <div className="search-form_container">
    <form className="search-form" onSubmit={searchMovies}>
      <label className="search-form_label" htmlFor="search-form_input">
        Find your movie
      </label>
      <div className="search-form_input-wrapper">
        <input 
          id="search-form_input" 
          type="text"
          placeholder="Enter the movie"
          onChange={updateSearchValue}
          value={searchValue}
          />
        </div>
        <div className="search-form_btn-container">
          <RadioToolbar name="search-form"
                        label="search by"
                        items={items}
                        onChange={updateSearchBy}
                        />

          <input className="search-form_submit-btn" type="submit" value="Search" />
        </div>
    </form>
  </div>
  )
}

export default SearchFormView;
