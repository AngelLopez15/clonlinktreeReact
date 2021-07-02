import Avatar from './components/Avatar'
import Button from './components/Button';
import './App.css';
import IconSocial from './components/IconSocial';
import Social from './data/redes.json'
import Redes from './data/links.json'

function App() {
  return (
    <>
      <Avatar name="Angel López" textColor="#052727" imagen="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg" textAlt="foto de un tigre" />
      <main className="main">
        {
          Redes.map(item => (
            <Button
              key={item.id}
              link={item.link}
              bgColor={item.bgcolor}
              textColor={item.textColor}
              imagen={item.imagen}
              textAlt={item.textAlt}
              textButton={item.textButton} />
          ))
        }
      </main>
      <footer className="footer">
        {
          Social.map(item => (
            <IconSocial
              key={item.id}
              link={item.link} 
              imagen={item.imagen}
              red={item.name}
            />
          ))
        }
      </footer>
    </>
  );
}

export default App;
