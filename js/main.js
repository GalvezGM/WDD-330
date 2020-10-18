const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "week4/index.html"
  },
  {
    label: "Week5 notes",
    url: "week5/index.html"
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