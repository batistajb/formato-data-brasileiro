# Formatar Data para Padrão Brasileiro
Package Help para formatar uma data passada por parâmetro para o padrão brasileiro "DD/MM/AAAA"


```
$ npm i @batistajb/formato-data-brasileiro

```

```
const { mixedDateToDateString, mixedDateToDatetimeString } = require('formato-data-brasileiro/index');
```
ou 
```
import { mixedDateToDateString, mixedDateToDateString }  from "formato-data-brasileiro/index";
```

```
const date = new Date('2021-07-24 00:00:00');

let data = mixedDateToDateString(date) //data convertida DD/MM/AAAA

let dataComMinutos = mixedDateToDatetimeString(date) //data convertida DD/MM/AAAA HH:MM::SS
```

Teste com Jest

```
# unit tests
$ npm run test
```
