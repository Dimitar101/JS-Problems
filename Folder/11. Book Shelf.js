function solve(arrInfo) {

    class Shelf {
        constructor(ID, genre) {
            this.ID = ID;
            this.genre = genre;
            this.books = [];
        }
    }

    class Book {
        constructor(title, author, genre) {
            this.title = title;
            this.author = author;
            this.genre = genre;
        }
    }

    let shelvesLog = [];
    let shelvesIdLog = new Set();


    for (const iterator of arrInfo) {
        if (iterator.includes('->')) {
            let [ID, genre] = iterator.split(' -> ');
            // if (!shelvesLog.find(x => x.ID == ID)) {
            //     shelvesLog.push(new Shelf(ID, genre))
            // }

            if (!shelvesIdLog.has(ID)) {
                shelvesLog.push(new Shelf(ID, genre));
            }
            shelvesIdLog.add(ID);
        }
        else if (iterator.includes(':')) {
            let title = iterator.split(': ')[0];
            let [author, genre] = iterator.split(': ')[1].split(', ');

            let currShelf = shelvesLog.find(x => x.genre == genre);
            if (currShelf) {
                currShelf.books.push(new Book(title, author, genre));
            }
        }
    }

    
    shelvesLog.sort((a, b) => b.books.length - a.books.length);
    for (const shelf of shelvesLog) {
        console.log(`${shelf.ID} ${shelf.genre}: ${shelf.books.length}`);

        shelf.books.sort((a, b) => a.localeCompare - b.localeCompare);
        for (const book of shelf.books) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}


// solve(
//     [
//         '1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'
//     ]
// );

solve(
    [
        '1 -> mystery', '2 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Lions and Rats: Gabe Roads, history',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi'
    ]
);
