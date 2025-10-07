const pool = require("../database/")

/* ***************************
 * Get all classification data
 *************************** */
async function getClassifications() {
  try {
    const data = await pool.query(
      "SELECT * FROM public.classification ORDER BY classification_name"
    )
    return data.rows
  } catch (error) {
    console.error("Error fetching classifications: ", error)
    return []
  }
}

/* ***************************
 * Get inventory items by classification ID
 * If database not ready, returns sample data
 *************************** */
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i
       JOIN public.classification AS c
       ON i.classification_id = c.classification_id
       WHERE i.classification_id = $1`,
      [parseInt(classification_id)] // <- ensure it's an integer
    );
    return data.rows;
  } catch (error) {
    console.error("getInventoryByClassificationId error:", error);
  }
}

module.exports = { getClassifications, getInventoryByClassificationId }