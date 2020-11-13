import { configure, shallow, render, mount, toJson } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new ReactSixteenAdapter() });


global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
