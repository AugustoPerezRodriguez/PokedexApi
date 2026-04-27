import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function getPokemon(nombre) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${nombre}`,
    { httpsAgent: agent }
  );

  const data = res.data;

  return {
    nombre: data.name,
    peso: data.weight,
    altura: data.height,
    tipos: data.types.map(t => t.type.name),
    imagen: data.sprites.front_default
  };
}

async function getPokemonXId (id){

    const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    { httpsAgent: agent }
  );

  const data = res.data;

  return {
    nombre: data.name,
    peso: data.weight,
    tipos: data.types.map(t => t.type.name),
    imagen: data.sprites.front_default
  };

}
async function getPokemons(limit, offset) {
    const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    { httpsAgent: agent }

  );

  return res.data.results;
}

async function getPokemonByType(tipo) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/type/${tipo}`,
    { httpsAgent: agent }
  );

  const data = res.data;

  return data.pokemon.map(p => p.pokemon.name);
}

export { getPokemon, getPokemonXId, getPokemons, getPokemonByType};

