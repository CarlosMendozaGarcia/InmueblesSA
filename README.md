Este es un proyecto realizado en Next.js junto a typescript, base de datos en mongo db
## Inicializar

primero se debera de instalar las librerias utilizadas en el proyecto para ello:

```bash
npm install
```
y a su vez colocar en la raiz  un .env conteniendo la URL para la conexión a la base de datos:

```bash
MONGODB_URI=mongodb+srv://<mongodb_user>:<mongodb_user_password@cluster0.x7sy9u7.mongodb.net/?retryWrites=true&w=majorityappName=Cluster0

```
## Base de datos / API

se debe de inicializar la base de datos por lo que se debe de utilizar el siguiente comando:

```bash
npm run seed
```

Esto creara en la base de datos 50 propiedades con nombre, barrio, ciudad, precio y tipo de venta aleatorios

los endpoints agregados a este proyecto fueron GET:api\propiedades y POST:api\propiedades

## Ejecución del proyecto

Para ejecutar el proyecto se debera de colocar el siguiente comando en la terminal

```bash
npm run dev
```
y abrir [http://localhost:3000](http://localhost:3000) en el navegador para visualizar 
