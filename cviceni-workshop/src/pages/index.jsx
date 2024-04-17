import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { WorkshopIntro } from '../components/WorkshopIntro.jsx';
import { Instructor } from '../components/Instructor.jsx';
import { Venue } from '../components/Venue.jsx';

const response = await fetch('http://localhost:4000/api/workshops/0');
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <WorkshopIntro data={data} />
      <Instructor data={data} />
    </header>
    <main>
      <Venue data={data} />
    </main>
    <footer></footer>
  </div>,
);
