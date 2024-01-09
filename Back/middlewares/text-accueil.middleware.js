const pool = require("../database/db");

exports.checkTextAccueilExists = async (req, res, next) => {
    const id = req.query.id_text_accueil

    if (!id) {
        return res.status(400).send("ID texte requis.");
    }

    try {
        const conn = await pool.connect();
        const checkResult = await conn.query("SELECT * FROM text_accueil WHERE id_text_accueil = $1", [id]);
        if (checkResult.rows.length === 0) {
            conn.release();
            return res.status(404).send("texte non trouvée");
        }
        conn.release();
        next();
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};