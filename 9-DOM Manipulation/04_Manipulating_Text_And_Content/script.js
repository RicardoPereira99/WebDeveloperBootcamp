var p = document.getElementsByTagName("p")[0];

// p.textContent Return the text 
// p.textContent = "Corgi mixes are really really super adorable";
// We can't use tags in textContent. So we have this solution
p.innerHTML = "<strong>HEYYYY</strong>";

var ul = document.querySelector("ul");