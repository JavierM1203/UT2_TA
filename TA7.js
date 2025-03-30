function getTheTitles(array) {
    var result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = { title: array[i].title }
    }
    return result;
}

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }    ,
    {
        title: 'Book4',
        author: 'Name4'
    }
]

console.log(getTheTitles(books));
