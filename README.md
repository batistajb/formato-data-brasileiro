# Formatar Data para Padrão Brasileiro
Formatar uma data passada por parâmetro para o padrão brasileiro "DD/MM/AAAA"


```
npm i formato-data-brasileiro

```

```
const { mixedDateToDateString, mixedDateToDatetimeString } = require('formato-data-brasileiro/index');

const date = new Date('2021-07-24 00:00:00');

let data = DateUtilsFormatBrazilian.mixedDateToDateString(date) //data convertida DD/MM/AAAA

let dataComMinutos = DateUtilsFormatBrazilian.mixedDateToDatetimeString(date) //data convertida DD/MM/AAAA HH:MM::SS

```