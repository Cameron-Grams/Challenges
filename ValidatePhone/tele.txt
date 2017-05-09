function telephoneCheck(str){
  var a = /\d{3}\-\d{3}\-\d{4}/.test(str) && (str.length === 12);
  var b = /\(\d{3}\)\d{3}\-\d{4}/.test(str) && (str.length === 13);
  var c = /\(\d{3}\)\s\d{3}\-\d{4}/.test(str) && (str.length === 14);
  var d = /\d{3}\s\d{3}\s\d{4}/.test(str) && (str.length === 12);
  var e = /\d{3}\d{3}\d{4}/.test(str) && (str.length === 10);
  var f = /1\s\d{3}\s\d{3}\s\d{4}/.test(str) && (str.length === 14);

  var g = /1\s\d{3}\-\d{3}\-\d{4}/.test(str) && (str.length === 14);
  var h = /1\s\(\d{3}\)\s\d{3}\-\d{4}/.test(str) && (str.length === 16);
  var i = /1\(\d{3}\)\d{3}\-\d{4}/.test(str) && (str.length === 14);

  return a || b || c || d || e || f || g || h || i;
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
