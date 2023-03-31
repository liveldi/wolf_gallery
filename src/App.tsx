// Gallery based on https://www.aspinallfoundation.org/port-lympne/short-breaks/wolf-lodge/

import { WolfGallery } from './WolfGallery';

import './styles/reset.css';
import './styles/index.css';


function App() {
  return (
    <main id="main">
      <WolfGallery
        photos={[
          { id: 1, src: '/photos/1.jpg', description: 'Norway 1' },
          { id: 2, src: '/photos/2.jpg', description: 'Norway 2' },
          { id: 3, src: '/photos/3.jpg', description: 'Norway 3' },
          { id: 4, src: '/photos/4.jpg', description: 'Norway 4' },
          { id: 5, src: '/photos/5.jpg', description: 'Norway 5' },
          { id: 6, src: '/photos/6.jpg', description: 'Norway 6' },
          { id: 7, src: '/photos/7.jpg', description: 'Norway 7' },
        ]}
      />
    </main>
  )
}

export default App;
