import router from "../routes/index.routes";

import fileUpload from "express-fileupload";
import cors from "cors";
import express from "express";
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({ tempFileDir: '/temp' }))
app.use('/api/images', router)

export default app;