# Readme

API que sirve un diccionario Español (salvadoreño)-Náhuat basado en el libro [**Timumachtikan!**](http://tushik.org/wp-content/uploads/timumachtikan-pdf-texto.pdf), por *Alan R. King*.

Para poner a funcionar el API sigue los siguientes pasos:
1. Clona este repositorio y posiciónate en el nuevo directorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Instala globalmente gulp.
4. Corre el daemon de MongoDB con el comando `mongod --smallfiles`.
5. En una consola diferente, ejecuta `node parseDic.js` para poblar la base de datos.
6. Pon el servidor a correr ejecutando `node server.js`. Un mensaje en la consola te indicará el puerto en el que está corriendo.
7. Ejecuta `gulp` en una consola diferente.
8. Visita localhost en el puerto especificado para ver las instrucciones de uso.



#LICENSE

Copyright (c) 2016, Juan Nelson Martínez Dahbura <jnelsonm64@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
