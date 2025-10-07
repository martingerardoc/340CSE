const db = require("./database");

(async () => {
  try {
    const result = await db.query("SELECT NOW()");
    console.log("Database connected:", result.rows);
  } catch (err) {
    console.error("DB connection failed:", err);
  }
})();