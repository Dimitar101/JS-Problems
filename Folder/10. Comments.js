function solve(arrInfo) {

    class Article {
        constructor(articleTitle) {
            this.articleTitle = articleTitle;
            this.usersComments = [];
        }
    }

    class UserComment {
        constructor(username, commentTitle, comment) {
            this.username = username;
            this.commentTitle = commentTitle;
            this.comment = comment;
        }
    }

    let listOfUsers = new Set();
    let listOfArticles = new Set();

    let articleLog = [];

    for (const iterator of arrInfo) {
        if (iterator.includes('user')) {
            let username = iterator.split(' ')[1];
            listOfUsers.add(username);
        }
        else if (iterator.includes('article')) {
            let articleTitle = iterator.split(' ')[1];
            listOfArticles.add(articleTitle);
            articleLog.push(new Article(articleTitle));
        }
        else if (iterator.includes('posts on')) {
            let [username, articleTitle] = iterator.split(': ')[0].split(' posts on ');
            let [commentTitle, comment] = iterator.split(': ')[1].split(', ');

            if (listOfUsers.has(username) && listOfArticles.has(articleTitle)) {
                let curr = articleLog.find(x => x.articleTitle == articleTitle);
                curr.usersComments.push(new UserComment(username, commentTitle, comment));
            }
        }
    }

    articleLog.sort((a, b) => b.usersComments.length - a.usersComments.length);
    for (const Article of articleLog) {
        console.log('Comments on ' + Article.articleTitle);
        
        Article.usersComments.sort((a, b) => a.username.localeCompare(b.username));
        for (const UserComment of Article.usersComments) {
            console.log(`--- From user ${UserComment.username}: ${UserComment.commentTitle} - ${UserComment.comment}`);
        }
    }
}


// solve(
//     [
//         'user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'
//     ]
// );

solve(
    [
        'user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'
    ]
);
