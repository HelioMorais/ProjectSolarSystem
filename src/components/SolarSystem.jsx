import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map((element) => {
            const { name, image } = element;
            return (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />);
          })}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
