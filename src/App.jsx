import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Example/Examples';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}