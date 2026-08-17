const db = require("../database/connection");
async function deleteUser(id) {
    await db.query(
        "DELETE FROM users WHERE id=$1",
        [id]
    );
}
async function getUsers() {
    const result = await db.query(
        "SELECT * FROM users ORDER BY id"
    );

    return result.rows;
}

async function createUser(nome, email) {
    const result = await db.query(
        "INSERT INTO users(nome,email) VALUES($1,$2) RETURNING *",
        [nome, email]
    );

    return result.rows[0];
}

module.exports = {
    getUsers,
    createUser
};