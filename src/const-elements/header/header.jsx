import { Route, Routes } from "react-router-dom";

export default function Header({thumbNail}){
    if (thumbNail == 0) {
        return (
            <header>
                <h1 className="no-margin">Image heading</h1>
                <h2>Whatever else wanted up here</h2>
            </header>
        );
    }
    return(
        <Routes>
          <Route path="/" element={<img src="" alt=""></img>} />
          <Route path="/how-it-works" element={<img src="" alt=""></img>} />
          <Route path="/dr-name" element={<img src="" alt=""></img>} />
          <Route path="/services" element={<img src="" alt=""></img>} />
          <Route path="/rates-and-pricing" element={<img src="" alt=""></img>} />
          <Route path="/faqs" element={<img src="" alt=""></img>} />
          <Route path="/contact" element={<img src="" alt=""></img>} />
          <Route path="/get-on-the-waitlist" element={<img src="" alt=""></img>} />
        </Routes>
    );
}