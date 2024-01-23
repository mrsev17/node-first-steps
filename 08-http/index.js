const http = require("http");
const { getHome, getHTML, getTEXT, getComments, pageIsNotFound, postComment } = require("./handlers");
const port = 5002;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        return getHome(req, res);
    }
    if (req.method === "GET" && req.url === "/html") {
        return getHTML(req, res);
    }
    if (req.method === "GET" && req.url === "/text") {
        return getTEXT(req, res);
    }
    if (req.method === "GET" && req.url === "/comments") {
        return getComments(req, res);
    }
    if (req.method === "POST" && req.url === "/comments") {
        return postComment(req, res);
    }
    pageIsNotFound(req, res);
});

server.listen(port, () => {
    console.log(`Server was launched on port ${port}`);
});
