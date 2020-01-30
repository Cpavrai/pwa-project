module.exports = {
  listToken: client => {
    client.query("SELECT * from token", [], (err, res) => {
      console.log(err ? err.stack : res.rows);
      return err ? err.stack : res.rows;
    });
  },
  saveToken: (client, token) => {
    client.query(
      "INSERT INTO token(value, timestamp) VALUES($1::text, $2::text) RETURNING *",
      [token, new Date().toISOString().slice(0, 10)],
      (err, res) => {
        console.log(err ? err.stack : res.rows);
        return err ? err.stack : res.rows;
      }
    );
  }
};
