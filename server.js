import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath} from 'url';
import renderApp from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const part = html.split("not rendered");

const express = app();
app.use("/assets",
express.statis(path.resolve(__dirname, "./dist/client/assets"))
)

app.use((req, res) => {
    res.write(parts[0]);

    const stream = renderApp(req.url, {
        onShellReady(){
            // if its the crawler, do nothing here
            stream.pipe(res)
        },
        onShellError(){
            // do error handling here
        },
        onAllReady(){
            // if it the crawler
            // stream.pipe(res)

            res.write(parts[1]);
            res.end();
        },
        onError(err){
            console.error(err)
        }
    })
})