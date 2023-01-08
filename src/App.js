import Companies from "./component/companies/companies";
import Features from "./component/features/features";
import Header from "./component/header/header";
import WhatIsGpt from "./component/whatIsGpt/whatIsGpt";
import Imagination from './component/imagination/imagination.jsx'
import Cta from "./component/cta/cta";
import Blog from './component/blog/blog.jsx'
import Footer from "./component/footer/footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Companies />
            <WhatIsGpt />
            <Features />
            <Imagination />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
