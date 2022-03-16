import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './page/Home'
import About from './page/About'
import Service from './page/Service'
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
const Section = styled.section`
overflow-x:hidden;
`;
const App = () => {
  const location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
