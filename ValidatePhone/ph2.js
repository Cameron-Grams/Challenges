function telephoneCheck(str){
  var q = /1?\s?\-?\(?\d{3}\)?\s?\-?\d{3}\s?\-?\d{4}/;
  return q.test(str);
}





var a = /(^1?\-?\d{3}\-?\d{3}\-?\d{4})/;



b = "555-555-5555";
c = "(555)555-5555";
d = "(555) 555-5555";
e = "555 555 5555";
f = "5555555555";
g = "1 555 555 5555";


console.log(b.match(q));
console.log(q.test(b));


console.log(c.match(q));
console.log(d.match(q));
console.log(e.match(q));
console.log(f.match(q));
console.log(g.match(q));
