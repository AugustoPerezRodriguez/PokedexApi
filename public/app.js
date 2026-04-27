const URL = "http://localhost:3000";

// loading
function setLoading(msg) {
  document.getElementById("loading").innerText = msg;
}

// mostrar resultado
function setResultado(html) {
  document.getElementById("resultado").innerHTML = html;
}

// 🔍 Buscar Pokémon
async function buscarPokemon() {
  const nombre = document.getElementById("nombre").value.trim();

  if (!nombre) {
    alert("Ingresá un nombre");
    return;
  }

  try {
    setLoading("Cargando...");
    const res = await fetch(`${URL}/pokemon/${nombre}`);
    const data = await res.json();

    setResultado(`
      <h2>${data.nombre}</h2>
      <img src="${data.imagen}">
      <p>Peso: ${data.peso}</p>
      <p>Altura: ${data.altura ?? "N/A"}</p>
      <p>Tipos: ${data.tipos.join(", ")}</p>
    `);

  } catch (err) {
    setResultado("<p>Error: Pokémon no encontrado</p>");
  } finally {
    setLoading("");
  }
}

// 🔥 Buscar por tipo
async function buscarTipo() {
  const tipo = document.getElementById("tipo").value.trim();

  try {
    setLoading("Cargando...");
    const res = await fetch(`${URL}/tipo/${tipo}`);
    const data = await res.json();

    setResultado(data.map(p => `<p>${p}</p>`).join(""));

  } catch {
    setResultado("<p>Error</p>");
  } finally {
    setLoading("");
  }
}

// 📋 Lista
async function listarPokemons() {
  try {
    setLoading("Cargando...");
    const res = await fetch(`${URL}/pokemons?limit=10`);
    const data = await res.json();

    setResultado(
      data.map(p => `<p>${p.name}</p>`).join("")
    );

  } catch {
    setResultado("<p>Error</p>");
  } finally {
    setLoading("");
  }
}