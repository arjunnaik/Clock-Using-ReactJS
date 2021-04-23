import React from 'react';
import ReactDOM from 'react-dom';

function work(){


  const d = new Date();


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var hh = d.getHours();
  hh = ("0" + hh).slice(-2);
  var mm = d.getMinutes();
  mm = ("0" + mm).slice(-2);
  var ss = d.getSeconds();
  ss = ("0" + ss).slice(-2);
  
  var dd = d.getDate();
  dd = ("0" + dd).slice(-2);
  var mo = d.getMonth();
  mo = ("0" + mo).slice(-2);
  const yy = d.getFullYear();
  
  
  
  
  const styleTime = {
    textAlign: "center",
    fontSize: "150px",
    marginTop: "200px",
    marginBottom: "0px",
    alignItems: "center"
    
  };
  const styleDate = {
    color: "#6DF047",
    textAlign: "center"
  
  };
  
  styleTime.color=getRandomColor();
  styleDate.color="#9999ff";
  
  ReactDOM.render(<div>
     <h1 style={styleTime}>{hh}:{mm}:{ss}</h1>
     <h1 style={styleDate}>{dd}/{mo}/{yy}</h1>
    </div>,document.getElementById('root')
  );
  
  }

  window.setInterval(work,1000)

