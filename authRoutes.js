// const express = require("express");
// const { loginUser, signupUser } = require("../controllers/authController");
// const router = express.Router();

// router.post("/login", loginUser);
// router.post("/signup", signupUser);

// module.exports = router;

const express = require("express");
const router = express.Router();

// Example route for login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Add your authentication logic here
  if (email === "test@example.com" && password === "password") {
    res.status(200).json({ message: "Login successful", user: { email } });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Example route for signup
router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Add your signup logic here
  res.status(201).json({ message: "User registered successfully", user: { email } });
});

module.exports = router;

