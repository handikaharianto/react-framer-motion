import { Link } from "react-router-dom";

const links = [
  {
    name: "Staggered and scroll animation",
    url: "/staggered-and-scroll",
  },
  {
    name: "Fade in and up animation",
    url: "/fade-in-and-up",
  },
];

function App() {
  return (
    <div className="App">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default App;
