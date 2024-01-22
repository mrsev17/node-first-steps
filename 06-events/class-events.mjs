import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQuantity = 0;
        this.on("likePost", (username) => {
            console.log(`${username} liked your post!`);
        });
        this.on("error", (error) => {
            console.error(error);
        });
    }
    like(username) {
        if (!username) {
            this.emit("error", new Error("No username in the like request!"));
        } else {
            this.likesQuantity += 1;
            this.emit("likePost", username);
        }
    }
}

const post = new Post("Sam Sapiel", "Hello world");

// post.on("likePost", (username) => {
//     console.log(`${username} liked your post!`);
// });

// console.log(post.author);
// console.log(post.text);
// console.log(post.likesQuantity);

post.like("Martin Iden");

setTimeout(() => post.like("Arthur Morgan"), 2000);
setTimeout(() => post.like("Tony Soprano"), 3000);

post.like();

// console.log(post.author);
// console.log(post.text);
// console.log(post.likesQuantity);
