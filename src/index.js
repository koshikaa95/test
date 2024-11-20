import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Login } from '../src/components/login/login';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Databinding} from './components/login/databinding';
//import Sample from './components/login/sample';
//import MountDemo from './components/login/mountdemo';
import {Fakestore} from './components/login/fakestore';
import { MobileEvents } from './components/login/mobile_events';
import {ButtonEvents} from './components/login/buttonevents';
import {ElementState} from './components/login/elementevents';
import {SlideEvents} from './components/login/slideevents';
import {FormikDemo} from './components/login/formikdemo';
import {FormikState} from './components/login/formik';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormikState />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
