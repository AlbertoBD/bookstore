const books = [
    {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "The Lord of the Rings is an epic high fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold",
        price: "119.99",
        image: "https://m.media-amazon.com/images/I/A1yy50fuVnL._AC_UY545_FMwebp_QL65_.jpg",
        rating: 5,
        stock: 10,
    },
    {
        id: 2,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The story follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry is snatched away from his normal life by his former friend, the evil Lord Voldemort, who killed Harry's parents, but in their place, he receives a mysterious letter from the wizard Harry Potter, telling him that he is to become a Horcrux, the object of the Wizarding world's most powerful curse.",
        price: "35.99",
        image: "https://m.media-amazon.com/images/I/91BT--NUiKL._AC_SX296_SY426_FMwebp_QL65_.jpg",
        rating: 5
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "The Hobbit, or There and Back Again is a children's fantasy novel written by English author J. R. R. Tolkien. It is based on the 1937 novel The Hobbit by the same author. The story follows the quest of home-loving hobbit Bilbo Baggins and his company of dwarves, Gandalf the Grey, to reclaim their mountain home from Smaug the dragon.",
        price: "65.99",
        image: "https://m.media-amazon.com/images/I/A18niDmK8pL._AC_SX296_SY426_FMwebp_QL65_.jpg",
        rating: 5
    },
    {
        id: 4,
        title: "Game of Thrones",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. It is filmed at Titanic Studios in Belfast and elsewhere in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, Spain, and the United States.",
        price: "25.99",
        image: "https://m.media-amazon.com/images/I/81VqkhMFpuL._AC_SX296_SY426_FMwebp_QL65_.jpg",
        rating: 5
    },
    {
        id: 5,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "70.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 6,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 7,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "53.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 8,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 9,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 10,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 11,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 12,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 13,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 14,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 15,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 16,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fiction",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 17,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fiction",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 18,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fiction",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "19.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 19,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 20,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 21,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 22,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Drama",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 23,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fiction",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
    {
        id: 24,
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        genre: "Fiction",
        description: "A Song of Ice and Fire is a series of fantasy novels written by American author George R. R. Martin. It is the first novel in Martin's A Song of Ice and Fire series and the first novel in the Martin series to be adapted for the screen, and the first novel in the series to be adapted for hardcover. It was first published on August 1, 1996 by HarperCollins Publishers in the United States.",
        price: "12.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
        rating: 5
    },
];

function getBookById(id) {
    const book = books.find(book => book.id == id);
    if (!book) return null
    return book;
};

function getBooks() {
    return books;
};

module.exports = {
    getBookById,
    getBooks
}