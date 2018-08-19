import React, { Component } from 'react';
import Listbox from './Listbox';
import styled from 'styled-components';

const Main = styled.div`
  float: right;
  padding-right: 10px;
`;

class Filter extends Component {
  static defaultProps = {
    filters: [
      { name: 'Date', path: 'timestamp' },
      { name: 'Votes', path: 'voteScore' },
    ],
  };

  state = {
    selectedFilter: '',
  };

  onChange = (event) => {
    const { onFilter } = this.props;

    const value = event.target.value;
    const callback = () => onFilter(value);

    this.setState({selectedFilter: value}, callback);
  };

  render() {
    const { filters } = this.props;
    const { selectedFilter } = this.state;

    return (
      <Main>
        <Listbox
          name="filter"
          label="Filter by"
          value={selectedFilter}
          options={filters}
          onChange={this.onChange}
        />
      </Main>
    );
  }
}

export default Filter;