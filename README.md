# Formatar Data para Padrão Brasileiro ![npm](https://img.shields.io/npm/v/@batistajb/formato-data-brasileiro?label=vers%C3%A3o) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/batistajb/formato-data-brasileiro/Node.js%20Package?label=GitHub%20Actions&logo=github)
Package Help para formatar uma data passada por parâmetro para o padrão brasileiro "DD/MM/AAAA"


```
$ npm i @batistajb/formato-data-brasileiro

```

```
const { mixedDateToDateString, mixedDateToDatetimeString } = require('@batistajb/formato-data-brasileiro');
```
ou 
```
import { mixedDateToDateString, mixedDateToDateString }  from "@batistajb/formato-data-brasileiro";
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
