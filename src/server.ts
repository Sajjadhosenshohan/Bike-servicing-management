import { Server } from "http"
const port = 5000;

const main = () => {
    const server : Server = app.listen(port, ()=> {
        console.log(`Server is listening on port ${port}`)
    })
}