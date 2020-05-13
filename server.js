const express = require("express")
const cors = require("cors");
const app = express()
const port = 8000

require("./server/config/mongoose.config");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// This must come afer the lines above:
require("./server/routes/player.routes")(app);

app.listen(port, ()=>console.log(`The server is all fired up and listening on port ${port}`))