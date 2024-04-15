const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sqlite-test');

db.serialize(() => {
    db.run("CREATE TABLE info (email TEXT)");

    const stmt = db.prepare("INSERT INTO info VALUES (?)");
    stmt.finalize();
});

const gravar = (texto) => {
    db.run("INSERT INTO info VALUES (?)", texto)
}

module.exports = { gravar }
