import './styles/App.css';
import Header from './const-elements/header/header';
import {ContentL, ContentD, ContentN} from './content-pieces/content';
import Nav from './const-elements/nav/nav';
import Footer from './const-elements/footer/footer';
import Calendar from './content-pieces/calendar/calendar';
import DougDetails from './content-pieces/doug';
import { Route, Routes } from 'react-router-dom';

export default function DougBase({baseUrl}){
    return(<>
        <Header thumbNail={0}/>
        <main>
        <h2 className="row second"><span>Ludington Pimary Care</span><span>Phone: (505) 730 - 9895</span><span>Email: Doug.Ludington@gmail.com</span></h2>
        <div className="container"> 
            <Nav baseUrl={baseUrl}></Nav>
            <div className='item'><Routes>
                <Route path={baseUrl + "/"} element={<ContentD content={[["test p 1"], ["test p 2"]]} row={false}/>} />
                <Route path={baseUrl + "/how-it-works"} element={<ContentN content={[["test p 1"], ["test p 2"]]} row={false}/>} />
                <Route path={baseUrl + "/douglas-ludington"} element={<DougDetails/>} />
                <Route path={baseUrl + "/services"} element={<></>} />
                <Route path={baseUrl + "/rates-and-pricing"} element={<></>} />
                <Route path={baseUrl + "/faqs"} element={<></>} />
                <Route path={baseUrl + "/contact"} element={<></>} />
                <Route path={baseUrl + "/get-on-the-waitlist"} element={<></>} />
                <Route path={baseUrl + "/calendar"} element={<Calendar></Calendar>} />
            </Routes></div>
        </div>
        </main>
        <Footer />
    </>)
}