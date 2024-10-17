import JumbotronSection from './pages/jumbotronsection'
import ContactUsSection from './pages/contactussection'
import TestimoniSection from './pages/testimonisection'
import './App.css'

function App() {
    return (
    <div>
      <div>Navbar</div>
      <div>
        <h1> First React Application </h1>
        <JumbotronSection name={"Sherlock Holmes"}/>
        <ContactUsSection/>
        <TestimoniSection/>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default App;
