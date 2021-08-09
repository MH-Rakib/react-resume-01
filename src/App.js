import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Resume from "./Components/Pages/Resume/Resume";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Grid container>
            <Grid xs={12} sm={5} md={4} lg={3}>
              <Profile></Profile>
            </Grid>
            <Grid xs={12} sm={7} md={8} lg={9}>
              <Header></Header>
              <Switch>
                <Route path="/About">
                  <About />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
                <Route path="/Portfolio">
                  <Portfolio />
                </Route>
                <Route path="/Resume">
                  <Resume />
                </Route>
                <Route exact path="/">
                  <About />
                </Route>
              </Switch>
              <Footer></Footer>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </div>
  );
}

export default App;
