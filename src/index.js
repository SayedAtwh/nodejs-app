const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CloudPulse | DevOps Dashboard</title>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #070b16;
    color: white;
    overflow-x: hidden;
}

/* Background */

body::before {
    content: "";
    position: fixed;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(0, 180, 255, 0.15), transparent 70%);
    top: -250px;
    left: -200px;
    z-index: -1;
}

body::after {
    content: "";
    position: fixed;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(150, 70, 255, 0.13), transparent 70%);
    right: -200px;
    bottom: -200px;
    z-index: -1;
}

/* Navbar */

nav {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    background: rgba(7,11,22,0.75);
    backdrop-filter: blur(15px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 1px;
}

.logo span {
    color: #00c8ff;
}

nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
}

nav a {
    color: #aab4c8;
    text-decoration: none;
    transition: 0.3s;
}

nav a:hover {
    color: #00c8ff;
}

.status {
    padding: 8px 15px;
    border-radius: 20px;
    background: rgba(0,255,160,0.08);
    color: #00ffa6;
    font-size: 13px;
    border: 1px solid rgba(0,255,160,0.2);
}

/* Hero */

.hero {
    min-height: 530px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 8%;
    gap: 50px;
}

.hero-text {
    max-width: 650px;
}

.badge {
    display: inline-block;
    padding: 8px 15px;
    border-radius: 30px;
    background: rgba(0,200,255,0.08);
    border: 1px solid rgba(0,200,255,0.25);
    color: #00c8ff;
    margin-bottom: 25px;
    font-size: 14px;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 80px);
    line-height: 1;
    margin-bottom: 25px;
}

.hero h1 span {
    background: linear-gradient(90deg,#00c8ff,#7c5cff,#ff4fd8);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    color: #9ba8bd;
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 30px;
}

.buttons {
    display: flex;
    gap: 15px;
}

.btn {
    padding: 14px 24px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.primary {
    background: linear-gradient(90deg,#00aaff,#6655ff);
    color: white;
    box-shadow: 0 10px 30px rgba(0,150,255,0.25);
}

.primary:hover {
    transform: translateY(-3px);
}

.secondary {
    border: 1px solid rgba(255,255,255,0.12);
    color: white;
}

.secondary:hover {
    background: rgba(255,255,255,0.05);
}

/* Graphic */

.graphic {
    width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.orbit {
    position: absolute;
    border: 1px solid rgba(0,200,255,0.2);
    border-radius: 50%;
    animation: rotate 15s linear infinite;
}

.orbit.one {
    width: 300px;
    height: 300px;
}

.orbit.two {
    width: 220px;
    height: 220px;
    animation-duration: 10s;
    animation-direction: reverse;
}

.orbit.three {
    width: 140px;
    height: 140px;
    animation-duration: 7s;
}

.core {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: linear-gradient(135deg,#00c8ff,#7455ff);
    box-shadow:
        0 0 30px #00bfff,
        0 0 80px rgba(90,80,255,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    animation: pulse 2s infinite;
}

.node {
    position: absolute;
    width: 14px;
    height: 14px;
    background: #00eaff;
    border-radius: 50%;
    box-shadow: 0 0 15px #00eaff;
}

.node.a {
    top: 45px;
}

.node.b {
    right: 25px;
}

.node.c {
    bottom: 45px;
}

.node.d {
    left: 25px;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%,100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.08);
    }
}

/* Stats */

.stats {
    padding: 30px 8% 70px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
}

.card {
    background: rgba(255,255,255,0.035);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 25px;
    backdrop-filter: blur(15px);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-6px);
    border-color: rgba(0,200,255,0.3);
}

.card-title {
    color: #8995aa;
    font-size: 14px;
    margin-bottom: 15px;
}

.number {
    font-size: 34px;
    font-weight: bold;
}

.green {
    color: #00ffa6;
}

.blue {
    color: #00c8ff;
}

.purple {
    color: #9c7cff;
}

.orange {
    color: #ffb347;
}

/* Monitoring */

.monitor {
    padding: 40px 8% 100px;
}

.section-title {
    margin-bottom: 30px;
}

.section-title h2 {
    font-size: 35px;
}

.section-title p {
    color: #8995aa;
    margin-top: 10px;
}

.dashboard {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}

.chart {
    height: 300px;
    position: relative;
    overflow: hidden;
}

.chart svg {
    width: 100%;
    height: 100%;
}

.chart-line {
    fill: none;
    stroke: #00c8ff;
    stroke-width: 4;
    stroke-linecap: round;
    filter: drop-shadow(0 0 8px #00c8ff);
}

.services {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.service {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: rgba(255,255,255,0.035);
    border-radius: 12px;
}

.service-name {
    display: flex;
    align-items: center;
    gap: 10px;
}

.dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00ffa6;
    box-shadow: 0 0 10px #00ffa6;
}

/* Footer */

footer {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 30px 8%;
    text-align: center;
    color: #69758a;
}

/* Responsive */

@media(max-width:900px) {

    nav ul {
        display: none;
    }

    .hero {
        flex-direction: column;
        text-align: center;
    }

    .buttons {
        justify-content: center;
    }

    .stats-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .dashboard {
        grid-template-columns: 1fr;
    }

}

@media(max-width:550px) {

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .graphic {
        width: 300px;
        height: 300px;
    }

    .orbit.one {
        width: 230px;
        height: 230px;
    }

    .orbit.two {
        width: 170px;
        height: 170px;
    }

    .orbit.three {
        width: 110px;
        height: 110px;
    }

}

</style>
</head>

<body>

<nav>

    <div class="logo">
        Cloud<span>Pulse</span>
    </div>

    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#monitor">Monitoring</a></li>
        <li><a href="#services">Services</a></li>
    </ul>

    <div class="status">
        ● All Systems Operational
    </div>

</nav>


<section class="hero" id="home">

    <div class="hero-text">

        <div class="badge">
            ⚡ Next Generation Cloud Platform
        </div>

        <h1>
            Build. Deploy.<br>
            <span>Scale.</span>
        </h1>

        <p>
            A modern cloud infrastructure dashboard designed
            to monitor applications, services and infrastructure
            in real time.
        </p>

        <div class="buttons">

            <a href="#monitor" class="btn primary">
                View Dashboard
            </a>

            <a href="#services" class="btn secondary">
                Explore Services
            </a>

        </div>

    </div>


    <div class="graphic">

        <div class="orbit one">
            <div class="node a"></div>
            <div class="node c"></div>
        </div>

        <div class="orbit two">
            <div class="node b"></div>
        </div>

        <div class="orbit three">
            <div class="node d"></div>
        </div>

        <div class="core">
            ☁
        </div>

    </div>

</section>


<section class="stats">

    <div class="stats-grid">

        <div class="card">
            <div class="card-title">UPTIME</div>
            <div class="number green">99.99%</div>
        </div>

        <div class="card">
            <div class="card-title">REQUESTS</div>
            <div class="number blue">24.8K</div>
        </div>

        <div class="card">
            <div class="card-title">RESPONSE TIME</div>
            <div class="number purple">42ms</div>
        </div>

        <div class="card">
            <div class="card-title">ACTIVE NODES</div>
            <div class="number orange">12</div>
        </div>

    </div>

</section>


<section class="monitor" id="monitor">

    <div class="section-title">

        <h2>Infrastructure Monitor</h2>

        <p>
            Real-time overview of your cloud infrastructure.
        </p>

    </div>


    <div class="dashboard">

        <div class="card chart">

            <svg viewBox="0 0 800 300"
                 preserveAspectRatio="none">

                <polyline
                    class="chart-line"
                    points="
                    0,230
                    60,210
                    120,220
                    180,160
                    240,190
                    300,120
                    360,150
                    420,90
                    480,130
                    540,80
                    600,110
                    660,60
                    720,90
                    800,40
                    "
                />

            </svg>

        </div>


        <div class="card services" id="services">

            <div class="service">

                <div class="service-name">
                    <div class="dot"></div>
                    API Server
                </div>

                <span class="green">Healthy</span>

            </div>


            <div class="service">

                <div class="service-name">
                    <div class="dot"></div>
                    Database
                </div>

                <span class="green">Healthy</span>

            </div>


            <div class="service">

                <div class="service-name">
                    <div class="dot"></div>
                    Load Balancer
                </div>

                <span class="green">Healthy</span>

            </div>


            <div class="service">

                <div class="service-name">
                    <div class="dot"></div>
                    Kubernetes
                </div>

                <span class="green">Healthy</span>

            </div>

        </div>

    </div>

</section>


<footer>

    CloudPulse © 2026
    <br>
    Built with Node.js & Express

</footer>


<script>

    // Simple live request simulation

    setInterval(() => {

        const requests =
            Math.floor(Math.random() * 5000) + 20000;

        const response =
            Math.floor(Math.random() * 20) + 35;

        document.querySelector(".blue").textContent =
            (requests / 1000).toFixed(1) + "K";

        document.querySelector(".purple").textContent =
            response + "ms";

    }, 2000);

</script>

</body>
</html>
  `);
});


app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "CloudPulse",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 CloudPulse running on port ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
});