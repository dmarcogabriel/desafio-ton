# Utils

Functions used to format, parse, map and other helpers for the application.

## shipsMapper.util

A mapper to filter ships that have 'unknown' prices, and to set it's id.

### Usage

```js
import {mapShips} from 'src/utils';

...
  const mappedShips = mapProducts(mapShips);  
...
```

### mapShips Function

* Params: Ship[]
* Return: Ship[]

It returns ships comming from API that don't have `id` property and some of then have their price
value to `"unknown"`.

---

## text.util

Here are one text util used to format texts on the app.

### Usage

```js
import {breakLongText} from 'src/utils';

...
  const text = breakLongText('This is a long text.');
  console.log(text) // > "This is a long te..."
...
```

### breakLongText Function

* Params: string
* Return: string

This is a function that prevent long texts that can break layouts in application.