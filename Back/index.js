const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/users.router');
const rolesRoutes = require('./routes/roles.router');
const droitsRoutes = require('./routes/droits.router');
const role_droitRoutes = require('./routes/role_droit.router');
const mapRoutes = require('./routes/map.router');
const prestationsRoutes = require('./routes/prestations.router');
const typePrestationsRoutes = require('./routes/typePrestations.router');
const standsRoutes = require('./routes/stands.router');
const loginRoutes = require('./routes/authentication.router');
const panierRoutes = require('./routes/panier.router');
const commandeRoutes = require('./routes/commande.router');
const statistiquesRoutes = require('./routes/statistiques.router');
const typeEmplacementLogistiqueRoutes = require('./routes/typeEmplacementLogistique.router');
const emplacementLogistiqueRoutes = require('./routes/emplacementLogistique.router');
const homePageRoutes = require('./routes/homePage.router');
const avisRoutes = require('./routes/avis.router');


dotenv.config();
const app = express();
const cors = require('cors');

app.use(cors({
  origin: '*'  // Autorise les requêtes de toutes les origines
}));

app.use(express.json());
app.use("/api/panier", panierRoutes);
app.use("/api/roles", rolesRoutes);

app.use("/api/droits", droitsRoutes);
app.use("/api/role-droit", role_droitRoutes);

app.use("/api/users", usersRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/login",loginRoutes);
app.use("/api/prestations",prestationsRoutes);

app.use("/api/typePrestations",typePrestationsRoutes);  // a mettre en type-prestations

app.use("/api/stands",standsRoutes);
app.use("/api/homePage",homePageRoutes);
app.use("/api/statistiques",statistiquesRoutes);
app.use("/api/commande", commandeRoutes);
app.use("/api/type-emplacement-logistique", typeEmplacementLogistiqueRoutes);
app.use("/api/emplacement-logistique", emplacementLogistiqueRoutes);
app.use("/api/avis", avisRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); // npm start