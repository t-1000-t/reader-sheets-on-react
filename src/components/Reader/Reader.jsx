import React, { Component } from 'react';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../db/publications.json';

const reader = [styles.reader];
class Reader extends Component {
  state = {
    currentPage: null,
  };

  move = 1;

  componentDidMount() {
    const { search } = this.props.location;
    if (!search) this.saveHistory(this.move);

    const item = new URLSearchParams(this.props.location.search).get('item');
    if (item < this.move || item > publications.length) {
      this.saveHistory(this.move);
      return;
    }
    this.setState({ currentPage: Number(item) });
  }

  saveHistory = item =>
    this.props.history.push({ ...this.props.location, search: `item=${item}` });

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    if (location.search === prevProps.location.search) return;
    const item = new URLSearchParams(location.search).get('item');
    this.setState({ currentPage: Number(item) });
  }

  handleCounter = ({ target: { innerText } }) =>
    innerText === 'Назад'
      ? this.saveHistory(this.state.currentPage - 1)
      : this.saveHistory(this.state.currentPage + 1);

  render() {
    const { currentPage } = this.state;
    console.log(publications.length);
    return (
      <div className={reader}>
        <Controls
          onCounter={this.handleCounter}
          numPage={currentPage}
          items={publications.length}
        />
        <Counter numPage={currentPage} artic={publications.length} />
        {currentPage && <Publication items={publications[currentPage - 1]} />}
      </div>
    );
  }
}

export default Reader;
