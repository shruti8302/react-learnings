const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
book;

const {
  title,
  author,
  genres,
  pages,
  publicationDate,
  hasMovieAdaptation,
  ...otherFields
} = book;

const updatedBook = { ...book, publicationDate: "2001-12-19", pages: 1210 };
updatedBook;

const getYear = (str) => str.split("-")[0];

const summary = `${title}, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has${hasMovieAdaptation ? "" : " not"} been adapted as a movie.`;

summary;

// Short circuiting means the logical operator takes the first value if the condition does not met without checking the second value
// in and operator if the first value is false, it will return false without checking the second value otherwise it will return the second value

// falsy: 0, '', null, undefined
console.log(false && true);
console.log(true && false);
console.log(hasMovieAdaptation && "The book has a movie");
console.log("Ashish" && "Some String"); //Some String will get returned as Ashish is a truthy value
console.log(0 && "Some String"); // 0 will return as it is falsy value

//or operator works completely opposite, if the first value is true it will short circuit 2nd value without
console.log("Shruti" || 0);
console.log(0 || "Ashish");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// The ?? operator in JavaScript is called the nullish coalescing operator.
// It returns the right-hand value only when the left-hand value is null or undefined, otherwise it keeps the left-hand value.

// 🔑 Difference from || (OR operator):
// || considers falsy values (0, "", false, null, undefined) as triggers.
// ?? only checks for null and undefined.

const countWrong = book.reviews.librarything.reviewsCount || "No reviews";
console.log(book.reviews.librarything.reviewsCount);
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "No reviews";
count;
