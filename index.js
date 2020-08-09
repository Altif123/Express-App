import express, { response } from 'express'

const app = express();
const PORT = 3000;

//Public folder on path public
app.use(express.static('public'));

//Images folder on path images
app.use('/images', express.static('images'));

app.get('/',(req, res)=>
    // get data 
    response.json()
)


app.post('/newItem', (req, res) =>
    res.send(`a post request with / route on port ${PORT}`)
)

app.put('/item', (req, res) =>
    res.send(`a put request with /item route on port ${PORT}`)
)

app.delete('/item', (req, res) =>
    res.send(`a delete request with /item route on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Your server is running on port:${PORT}`)
);
