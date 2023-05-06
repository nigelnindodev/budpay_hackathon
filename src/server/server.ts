
import * as Koa from 'koa';
import * as KoaBody from 'koa-bodyparser';

import { jsonLog } from 'koa-json-log';

const app = new Koa();

app.use(jsonLog());
app.use(KoaBody());


app.listen(3000);

console.log(`Server is running at http://localhost:3000/`);
