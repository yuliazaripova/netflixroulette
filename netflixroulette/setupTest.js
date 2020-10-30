import { configure, shallow, render, mount, toJson } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });


global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
