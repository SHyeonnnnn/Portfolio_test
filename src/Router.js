import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Kocca from './routes/kocca'
import Megabox from './routes/megabox'
import Sumgo from './routes/sumgo'
import Todolist from './routes/todolist'
import Trello from './routes/trello'
import Cointracker from './routes/cointracker'
import Netflix from './routes/netflix'
import Home from './components/Home'
import Profile from './components/Profile'
import Project from './components/Project'
import Contact from './components/Contact'

const Router = () => {
    return (
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/kocca' element={<Kocca/>} />
                <Route path = '/megabox' element={ <Megabox/> } />
                <Route path = '/sumgo' element={ <Sumgo/> } />
                <Route path = '/todolist' element={ <Todolist/> } />
                <Route path = '/trello' element={ <Trello/> } />
                <Route path = '/cointracker' element={ <Cointracker/> } />
                <Route path = '/netflix' element={ <Netflix/> } />
                <Route path = '/profile' element={ <Profile/> } />
                <Route path = '/project' element={ <Project/> } />
                <Route path = '/contact' element={ <Contact/> } />
            </Routes>
    );
};

export default Router;