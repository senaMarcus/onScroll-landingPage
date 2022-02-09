import './App.css';

import Hero from './components/Hero'
import Slider from './components/Slider'

import travel_01 from "./assets/travel-01.jpg"
import travel_02 from "./assets/travel-02.jpg"
import travel_03 from "./assets/travel-03.jpg"

function App() {
  return (
    <div className="App">
      <Hero imageSrc={travel_01}/>
      <Slider 
      imageSrc={travel_02} 
      title={"Seja um EXPLORADOR!"} 
      subtitle={"Nossa plataforma oferece a você uma enorme variedade de lugares incríveis para conhecer! "}
      />
      <Slider 
      imageSrc={travel_03} 
      title={"Memórias para sua linha do tempo."} 
      subtitle={"Sua viagem dos sonhos à apenas alguns cliques... "}
      flipped={true}
      />
    </div>
  );
}

export default App;
