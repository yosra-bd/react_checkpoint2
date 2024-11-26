import logo from './logo.svg';
import './App.css';
import Players from './player/players';

function App() {
  let players =[
    {
      name: "Lionel Messi",
      team: "Inter Miami",
      nationality: "Argentina",
      jerseynumber: 10,
      age: 37,
      imageUrl: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
    },
    {
      name: "Cristiano Ronaldo",
      team: "Al Nassr",
      nationality: "Portugal",
      jerseynumber: 7,
      age: 39,
      imageUrl: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--914bcfe0-f610-4610-a77e-6ea53c53f630/_330603286208.app.webp?preferwebp=true&width=312"
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      nationality: "France",
      jerseynumber: 7,
      age: 25,
      imageUrl: "https://madeinfoot.ouest-france.fr/photos/ligue-1/2023/zoom/l1-20230829095732-7388.jpg"
    },
    {
      name: "Erling Haaland",
      team: "Manchester City",
      nationality: "Norway",
      jerseynumber: 9,
      age: 24,
      imageUrl: "https://i.guim.co.uk/img/media/738ce55b0210242ed89525dc7217389fcdd954f6/867_295_3097_1858/master/3097.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93c023f0b3182e74b5320381712d32d3"
    },
    {
      name: "Neymar Jr.",
      team: "Al Hilal",
      nationality: "Brazil",
      jerseynumber: 11,
      age: 32,
      imageUrl: "https://www.psg.fr/media/251568/123.jpg?quality=60&width=1600&bgcolor=ffffff"
    }
  ]

  return (
    <div className="App">
      {players.map((player)=>{
        return <Players player={player}/>
      }
      )}
    </div>
  );
}

export default App;
