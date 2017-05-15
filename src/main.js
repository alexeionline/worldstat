import React, { Component } from 'react';
import { render } from 'react-dom';

import SquareDATA from './data/square';
import PopulationDATA from './data/population';

import App from './components/App';

const DATA = {
	square: SquareDATA,
	population: PopulationDATA,
};

render(<App defaultSource={'population'} sources={DATA} />, document.getElementById('root'));

