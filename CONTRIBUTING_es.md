[EN](CONTRIBUTING.md) | [ES](CONTRIBUTING_es.md)
# Contribuciones

Despues de clonar el proyecto por favor instale las dependencias con:

```
$ npm install
```

Ahora puede correr el servidor en modo de desarrollo con el comando `serve`.

```
$ npm run serve
```

Puede añadir su propia lección añadiendo una carpeta en el directorio `src/views`. Usando la siguiente estructura de archivos:

```
HelloWorld
│   code.js
│   index.vue
│   README.md
```

* `code.js`: El codigo que busca previsualizar usando la sentencia `export`.
* `index.vue`: El resultado del ejemplo que le gustaría mostrar.
* `README.md`: La descripcion de la leccion que quiere dar en lenguaje Markdown.

Despues tendrá que añadir la ruta a su lección en el archivo `src/router.js`.

```javascript
{
  path: '/hello-world',
  name: 'HelloWorld',
  meta: { title: 'Hello World!' }
}
```

* `name`: El nombre de su carpeta.
* `title`: El texto que se mostrará en la navegación.

Despues de todos los pasos por favor envienos un Pull Request con la rama `master` como objetivo.

# Peticiones de caracteristicas

Todas la ideas y consejos son bienvenidos. Por favor cree un issue con alguna explicación de sus ideas. Su issue podría ser algo invaluable para los desarrolladores en el futuro, no dude 
