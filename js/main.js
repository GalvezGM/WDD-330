const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week 3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week 4 notes",
    url: "week4/index.html"
  },
  {
    label: "Week 5 notes",
    url: "week5/index.html"
  },
  {
    label: "Week 6 Midterm Checkin",
    url: "week6/midterm checkin/index.html"
  },
  {
    label: "Week 7 notes",
    url: "week7/index.html"
  },
  {
    label: "Week 8 notes",
    url: "week8/index.html"
  },
  {
    label: "Week 9 notes",
    url: "week9/index.html"
  },
  {
    label: "Week 10 notes",
    url: "week10/index.html"
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