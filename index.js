import express from "express";
import clientesRoutes from "./routes/clientesRoutes.js";
import alquilerRoutes from "./routes/alquilerRoutes.js";
import autosRoutes from "./routes/autosRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", clientesRoutes);
app.use("/api", alquilerRoutes);

app.use("/api", autosRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando");
});

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});