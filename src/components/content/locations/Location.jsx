import React from 'react';
import { connect } from 'react-redux';

import View from './View';

function Location(props) {
  const locations = props.locations.map(location => {
    const { img_path, address } = location;
    return (
      <View 
        key={address}
        image={img_path}
        location={location.location}
        address={address}
      />
    )
  })
  return (
    <div>
      <section className="wrapper">
        <h3>Maui By Air The Best Way Around The Island</h3>
        {locations}
      </section>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    locations: state.locations.locations
  }
}

export default connect(mapStateToProps)(Location);