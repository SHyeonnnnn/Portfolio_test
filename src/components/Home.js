import {FullPage,Slide} from 'react-full-page';
import Main from './Main';
import Header from './Header';
import Profile from './Profile';
import Project from './Project';
import Contact from './Contact';
import Line from './Line';

const Home = () => {
  return (
  <>
  <Header /> 
  <FullPage>
    <Slide>
      <Line />
      <Main />
    </Slide>
    <Slide>
      <Profile />
    </Slide>
    <Slide>
      <Project />
    </Slide>
    <Slide>
      <Contact />
    </Slide>
  </FullPage>
  </>
  )
};

export default Home;