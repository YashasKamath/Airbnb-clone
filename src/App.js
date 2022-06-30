import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import CardObject from './CardObject';
import Card from './Components/Card'

function App() {
  // const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
  // const ans=pokemon.map(x=>`<p>${x}</p>`)
  // console.log(ans)
  const cards=CardObject.map(x=>
    <Card 
        key={x.id}
        {...x}
    />
  )
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='cards'>
        {cards}
      </section>
    </div>
  );
}

export default App;

        {/* <Card
                img="Katie.png"
                rating={5}
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
            <Card
                img="wedding.png"
                rating={5}
                reviewCount={30}
                country="USA"
                title="Learn wedding photography"
                price={125}
            />
            <Card
                img="bike.png"
                rating={4.8}
                reviewCount={2}
                country="USA"
                title="Group Mountain Biking"
                price={50}
            /> */}