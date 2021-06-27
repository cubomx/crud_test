require('./bootstrap');

/* import the main component */
import App from './components/app';
import  { render } from 'react-dom';

if (document.getElementById('root')){
    render(<App />, document.getElementById('root'));
}