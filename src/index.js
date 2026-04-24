import express from "express";  
import cors from "cors";     

import { getPokemon, getPokemons } from "./modules/Pokedex.js";

const app = express();
const port = 3000;

// === Middlewares ===
app.use(cors());                 // Habilita CORS (permite llamadas cross-origin)
app.use(express.json());         // Parsea bodies en formato JSON

//ENDPOINTS
app.get('/', (req, res) => {
  res.status(200).send('¡Ya estoy respondiendo!');
});

app.get("/pokemon/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const pokemon = await getPokemon(nombre);

    res.status(200).send(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/pokemon/:id", async(req,res)=> {
    try{
        const id = req.params.id
        const pokemon = await getPokemonXId (id);
        res.status(200).send(pokemon)
    }
    catch(error){
        res.status(500).json({error:error.message });
    }
})

app.get("/pokemons", async (req, res) => {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;

    const lista = await getPokemons(limit, offset);

    res.status(200).json(lista);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista" });
  }
});

// === Arranca el servidor ===

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});