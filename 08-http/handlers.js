const comments = require("./data");
const qs = require("querystring");
const fs = require("fs");

function getHome(req, res) {
    fs.readFile("./files/comment-form.html", (err, data) => {
        if (err) {
            console.error("Error reading HTML file:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Server error while loading HTML file");
        } else {
            res.statusCode === 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greetings from the HTTP server</h1>");
    res.write("</div></body></html>");
    return res.end();
}

function getTEXT(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("This is plain text");
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(comments));
}

function pageIsNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>Page not found!</h1>");
}

function postComment(req, res) {
    res.setHeader("Content-type", "text/plain");
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const comment = qs.parse(body);
                comment.id = parseInt(comment.id);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write("<h1>Comment data was received</h1>");
                res.write("<a href='/'>Submit one more comment</a>");
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid form data");
            }
        });
    } else if (req.headers["content-type"] === "application/json") {
        let commentJSON = "";
        req.on("data", (chunk) => (commentJSON += chunk));
        req.on("end", () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end("Comment data was received");
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Data must be in JSON format");
    }
}

module.exports = {
    getHome,
    getHTML,
    getTEXT,
    getComments,
    postComment,
    pageIsNotFound,
};
