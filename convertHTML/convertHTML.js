function convertHTML(str){
  var work_string = str;
  var values = {
    "&amp;": /&/g,
    "&gt;": />/g,
    "&lt;": /</g,
    "&quot;": /"/g,
    "&apos;": /'/g
  }

  var keys_conv = Object.keys(values);

  for (i in values){
    work_string = work_string.replace(values[i], i);
  }
  return work_string;
}

/*
& &amp;
< &lt;
> &gt;
"  &quot;
'  &apos;

*/

var g = convertHTML("Hamburgers < Pizza < Tacos") 

// Hamburgers &​lt; Pizza &​lt; Tacos.



//var g = convertHTML("Dolce & Gabana > Harris Teeter's"); // Dolce &amp; Gabana
console.log(g);
