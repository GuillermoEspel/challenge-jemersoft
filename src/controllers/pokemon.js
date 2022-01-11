const axios = require('axios');
const path = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonById = async (url, details = false) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    let result = {
      id: data.id,
      name: data.name,
      types: data.types,
      weight: data.weight,
      abilities: data.abilities,
      photo: data.sprites.front_default
    };
    if (details) {
      result.moves = data.moves.map(o => o.move.name)
    }
    return result;
  } catch (error) {
    const msgError = 'Error in "getPokemonById", error: ' + error.toString();
    console.error(error);
    throw new Error(msgError);
  }
}

const getPokemons = async (req, res) => {
  const { offset, limit } = req.query;
  let query = '?';
  if (offset && limit) {
    query += `offset=${offset}&limit=${limit}`;
  } else if (offset) {
    query += `offset=${offset}`;
  } else if (limit) {
    query += `limit=${limit}`;
  }

  const response = await axios.get(`${path}${query}`);
  const data = response.data;

  let result = {};
  result.next = data.next;
  result.previous = data.previous;
  let listTasks = [];
  for (const item of data.results) {
    listTasks.push(getPokemonById(item.url, false));
  }
  Promise.all(listTasks).then(values => {
    result.results = values;
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json({ message: error.message });
  });
}
const getPokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getPokemonById(`${path}/${id}`, true);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = {
  getPokemons,
  getPokemon,
};