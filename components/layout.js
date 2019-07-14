import Header from '../components/header';

const LayoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
const Layout = props => (
  <div style={LayoutStyle}>
    <Header></Header>
    {props.children}
  </div>
);

export default Layout;
