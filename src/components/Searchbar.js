import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, SubmitBtn, Input } from './Searchbar.styled';
import { MdImageSearch } from 'react-icons/md';

class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  //==============================================
  handleWordChange = event => {
    this.setState({ searchWord: event.currentTarget.value.toLowerCase() });
  };

  //=================================
  handleWordSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchWord.trim() === '') {
      return toast.error('Введите запрос');
    }
    // Проп который передается форме для вызова при сабмите
    this.props.onSubmitProp(this.state.searchWord);
    this.reset();
  };

  //===========================================
  reset = () => {
    this.setState({ searchWord: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleWordSubmit}>
          <Input
            type="text"
            value={this.state.searchWord}
            onChange={this.handleWordChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SubmitBtn type="submit">
            <MdImageSearch fontSize="2em" />
          </SubmitBtn>
        </Form>
      </Header>
    );
  }
}
export default Searchbar;
