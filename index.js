import express from "express";
import clientesRoutes from "./routes/clientesRoutes.js";
import alquilerRoutes from "./routes/alquilerRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", clientesRoutes);
app.use("/api", alquilerRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});