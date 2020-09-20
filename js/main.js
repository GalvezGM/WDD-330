const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  }
];

function tableOfContents() {
    var ol = document.createElement("ol");
    var li, a, text;
    for (var i = 0;  i < links.length; ++i) {
      li = document.createElement('li');
      a  = document.createElement('a');
      text = document.createTextNode(links[i]["label"]);
  
      a.href = links[i]["url"];
      a.appendChild(text);
      li.appendChild(a);
      ol.appendChild(li);
  
    }
    document.querySelector("#tableOfContents").appendChild(ol);
  }
  tableOfContents();