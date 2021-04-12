import React from "react";

import POKEMON_DATA from "./homepage.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: POKEMON_DATA
    };
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        {pokemons.map(({ id, ...otherPokemonProps }) => (
          <CollectionPreview key={id} {...otherPokemonProps} />
        ))}
      </div>
    );
  }
}

export default HomePage;
