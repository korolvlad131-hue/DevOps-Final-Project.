const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const startTime = Date.now();

const server = http.createServer((req, res) => {
    if (req.url === "/api/status") {
        const status = {
            application: "DevOps Status Dashboard",
            status: "running",
            uptime: Math.floor((Date.now() - startTime) / 1000),
            timestamp: new Date().toISOString()
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(status));
        return;
    }

    if (req.url === "/") {
        const filePath = path.join(__dirname, "public", "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Internal Server Error");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(data);
        });

        return;
    }

    res.writeHead(404);
    res.end("Not Found");
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`DevOps Dashboard running on port ${PORT}`);
});