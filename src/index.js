import express from "express";  
import cors from "cors";     

import { getPokemon, getPokemons, getPokemonByType } from "./modules/Pokedex.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, "../public")));


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
    res.status(404).send({ error: error.message });
  }
});

app.get("/pokemon/:id", async(req,res)=> {
    try{
        const id = req.params.id
        const pokemon = await getPokemonXId (id);
        res.status(200).send(pokemon)
    }
    catch(error){
        res.status(500).send({error:error.message });
    }
})

app.get("/pokemons", async (req, res) => {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;

    const lista = await getPokemons(limit, offset);

    res.status(200).send(lista);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener la lista" });
  }
});

app.get("/tipo/:tipo", async (req, res) => {
  try {
    const tipo = req.params.tipo.toLowerCase();

    const lista = await getPokemonByType(tipo);

    res.status(200).send(lista);
  } catch (error) {
    res.status(404).send({ error: "Tipo no encontrado" });
  }
});

// === Arranca el servidor ===

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});