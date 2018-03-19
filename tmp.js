const {URL, URLSearchParams} = require('url');
const myURL = new URL('/foo?name=Mike&pw=ooioi#23sssewr2323', 'https://example.org:8080/');

const params = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second']
});

console.log(params.getAll('query'));
console.log(params.toString());

console.log(myURL);