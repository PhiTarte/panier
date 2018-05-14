import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import renderer from 'react-test-renderer';
import potos from '../data/dataArticle';

const poto = potos[0]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article {...poto}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Article {...poto}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});