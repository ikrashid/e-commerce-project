import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Directory.scss';
import MenuItem from '../menuItem/MenuItem';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections} from '../../redux/directory/directory-selectors';

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {sections.map(({id, ...sectionProps}) => <MenuItem key={id} 
                                              {...sectionProps}
                                          />)}
  </div>

)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);