const db = require('../routes/db-config')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const user = req.body

    if (!user.email || !user.password) {
        return res.json({ status: "error", error: "Por favor entre com seu email e senha" })
    } else {

        db.query('SELECT email FROM accounts WHERE email = ?', [user.email], async (err, result) => {
            if (err) throw err
            if (result[0]) {
                return res.json({ status: "error", error: "Email já se encontra registrado" })
            } else {
                const password = await bcrypt.hash(user.password, 8);
                const sql = "INSERT INTO accounts (email, password) VALUES (?, ?)";
                db.query(sql, [`${user.email}`, `${password}`], (error, result) => {
                    if (error) throw error
                    return res.json({ status: "success", success: "Usuário registrado com sucesso" })
                })
            }
        })
    }
}

module.exports = register;