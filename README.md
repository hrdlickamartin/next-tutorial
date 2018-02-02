# Projekt v NEXT s deployem na debian 9
```
yarn install - inicialiace projektu, podle package.json stahne moduly
```
## Instalace
```
yarn init - vytvoří package json
yarn add next react react-dom - nainstaluje
yarn add isomorphis-unfetch
yarn add --dev flow-bin (https://github.com/este/este/blob/master/.flowconfig) - do souboru přidat // @flow
yarn add flow-typed -D
```
Nutné ještě vytvořit
- .flowconfig (nastavení flow)
- .prettierrc (jak má formátovat)

> Spustit yarn dev nebo yarn build && yarn start

# DigitalOcen - Debian 9
- nastavit ssh key (id_rsa.pub) v průvodci při vytváření serveru na DigitaloOcean
- v phpstorm nastavit *DEPLOYMENT*:
```
pres sftp
user: root
ssh: id_rsa
```
### Instalace přes terminal
```
ssh root@ip-address
```
- instalace apache
- instalace node, npm

##### check:
- node -v, npm -v

##### upload projektu:
nahrát vytvořený projekt, do této cesty
```
/var/www/html/react
```
##### nastavit vhosts:
standatní cesta pro vhosts.
- Pozor již býva default přednastavený označení 000_XXX.conf
```
/etc/apache2/sites-available
$ vim react.conf
$ restart service apache2 restart
```
##### Spustit projekt na vzdáleném serveru:
možnost jako na localu, ale musím být pořát připojený
```
$ npm run build
$ npm run start
```

##### Bez nutnosti prihlaseni k terminalu:
využijeme pm2, který udrží proces při životě
```
$ npm install -g pm2
$ pm2 start start.sh
```

##### Restart po změně kodu:
Pokud v appce dojde ke změně je třeba ji přebuildovat pomocí restartu servici pm2
```
$ pm2 restart all
```

## Prisma
```
$ npm install -g prisma
$ prisma init hello-world
prisma deploy
```

Při initu test vybrat
- druhou moznost
- zases druhou advance-node

```
cd test
yarn dev

yarn add babel-plugin-transform-flow-strip-types
yarn add babel-plugin-transform-object-rest-spread
yarn add babel-preset-env
yarn add babel-register
```
## Poznámky
import exp from “/packages” - exp musí být default - export default exp jinak
import { exp } from “..”

getInitialProps - Načte data ze server side rendering

<Hello name=“Kitty” fn=/>

EsLint - pravidla pro psani JS

type Props = {|
  stars: number,
|} - exact object types znamena ze objekt neni dale rozsiritelny
