const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

// utilizacion de nuestros routes
app.use('/users',require('./routes/index.js'));


// varrible para puerto de acceso
const PORT = process.env.PORT || 3000;



// route
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>');
// });


app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});