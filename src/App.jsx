import './styles/App.css';
import Header from './const-elements/header/header';
import {ContentL, ContentD, ContentN} from './content-pieces/content';
import Nav from './const-elements/nav/nav';
import Footer from './const-elements/footer/footer';
import Calendar from './content-pieces/calendar/calendar';
import DougDetails from './content-pieces/doug';
import { Route, Routes } from 'react-router-dom';

export default function App(){
    return(<>
        <Header thumbNail={0}/>
        <main>
        <h2 className="row second"><span>Ludington Pimary Care</span><span>Phone: (505) 730 - 9895</span><span>Email: Doug.Ludington@gmail.com</span></h2>
        <div className="container"> 
            <Nav></Nav>
            <div className='item'><Routes>
                <Route path={"/"} element={<ContentD content={[["test p 1"], ["test p 2"]]} row={false}/>} />
                <Route path={"/how-it-works"} element={<ContentN content={[["test p 1"], ["test p 2"]]} row={false}/>} />
                <Route path={"/douglas-ludington"} element={<DougDetails/>} />
                <Route path={"/services"} element={<></>} />
                <Route path={"/rates-and-pricing"} element={<></>} />
                <Route path={"/faqs"} element={<></>} />
                <Route path={"/contact"} element={<></>} />
                <Route path={"/get-on-the-waitlist"} element={<></>} />
                <Route path={"/calendar"} element={<Calendar></Calendar>} />
            </Routes></div>
        </div>
        </main>
        <Footer />
    </>)
}