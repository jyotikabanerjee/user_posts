import { Container } from 'react-bulma-components';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Container className="is-flex is-vcentered my-20">
        <Users />
      </Container>
    </div>
  );
}

export default App;