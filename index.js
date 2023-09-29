require("dotenv").config();
const app = require("./app");

PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
