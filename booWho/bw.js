function booWho(bool){
  return (typeof(bool) === 'boolean')
}

console.log(booWho(true));
console.log(booWho([1,2,3]));
console.log(booWho('pigfucker'));

