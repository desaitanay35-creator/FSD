import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
    import Home from './Home.jsx'
    import Contact from './Contact.jsx'
    import Nopage from './NoPage.jsx'
    import About from './About.jsx'
import NoPage from './NoPage.jsx'
    function MainR(){
        return(
            <>
               <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/About">about</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
               </Router>
            </>
        )
    }
export default MainR