* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #0b1020;
  color: white;
  line-height: 1.7;
}

header {
  background: #11182d;
  padding: 18px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #00d9ff;
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #111c45, #24104d);
}

.hero h1 {
  font-size: 38px;
  margin-bottom: 15px;
}

.hero p {
  color: #ccd2e5;
  font-size: 18px;
  margin-bottom: 25px;
}

button {
  border: none;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: white;
  padding: 12px 25px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  transform: scale(1.05);
}

.section {
  padding: 50px 6%;
}

.section h2,
.orders h2 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card,
.package {
  background: #151e38;
  border: 1px solid #293554;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
}

.card h3,
.package h3 {
  margin: 12px 0 5px;
  font-size: 21px;
}

.card p {
  color: #aeb8d0;
  margin-bottom: 15px;
}

.game-image {
  height: 170px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
}

.pubg {
  background: linear-gradient(135deg, #f59e0b, #78350f);
}

.freefire {
  background: linear-gradient(135deg, #ef4444, #7f1d1d);
}

.game {
  background: linear-gradient(135deg, #8b5cf6, #312e81);
}

.package strong {
  display: block;
  font-size: 25px;
  margin: 10px;
  color: #00d9ff;
}

.orders {
  text-align: center;
  padding: 60px 20px;
  background: #11182d;
}

.orders p {
  color: #aeb8d0;
}

footer {
  text-align: center;
  padding: 25px;
  color: #8893ad;
}

@media (max-width: 700px) {

  header {
    flex-direction: column;
    gap: 15px;
  }

  nav {
    gap: 12px;
    font-size: 14px;
  }

  .hero h1 {
    font-size: 30px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 35px 18px;
  }
}
