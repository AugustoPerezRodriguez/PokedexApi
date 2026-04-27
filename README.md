"# PokedexApi" 
Cómo se dedujo la estructura de las URLs
La estructura fue deducida analizando las respuestas de la API en el navegador y en herramientas como Postman, identificando patrones en las rutas y los parámetros utilizados.

/pokemon/{id o nombre}: permite obtener la información de un Pokémon específico.


/pokemon?limit=&offset=: permite obtener una lista paginada de Pokémon.


/type/{tipo}: permite filtrar Pokémon según su tipo.


En base a estos endpoints, se diseñaron rutas propias dentro del servidor desarrollado con Express, adaptando la estructura a un formato más simple y controlado:


/pokemon/:nombre


/pokemons


/tipo/:tipo



Qué devuelve cada endpoint
Cada endpoint del servidor cumple una función específica:


/pokemon/:nombre devuelve un objeto con información detallada de un Pokémon (nombre, peso, tipos e imagen).


/pokemons devuelve una lista limitada de Pokémon, con posibilidad de paginación mediante parámetros.


/tipo/:tipo devuelve una lista de Pokémon que pertenecen a un tipo determinado.



Manejo de errores
Cuando ocurre un error (por ejemplo, al ingresar un Pokémon o tipo inexistente, o ante problemas de conexión), la API responde con un objeto JSON con el siguiente formato:
{  "error": "mensaje de error"}
Los códigos de estado utilizados son:


404 Not Found: cuando el recurso solicitado no existe.


500 Internal Server Error: cuando ocurre un error interno o de conexión.


Los casos de error contemplados incluyen:


Nombre de Pokémon inválido.


Tipo inexistente.


Problemas de conexión con la API externa.



Conclusión
Se desarrolló una API funcional que consume datos de una fuente externa y los adapta a endpoints propios. Durante el desarrollo se aplicaron conceptos clave como el consumo de APIs, la gestión de rutas con Express, la transformación de datos y el manejo de errores. Esto permitió construir una base sólida para futuras ampliaciones del sistema.
