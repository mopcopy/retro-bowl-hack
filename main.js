 if (localStorage.getItem("RetroBowl.0.savedata.ini")) {let z = prompt("how many credits do you have right now (please input correct number)");localStorage.setItem("RetroBowl.0.savedata.ini", localStorage.getItem("RetroBowl.0.savedata.ini").replace(`coach_credit="${z}"`, 'coach_credit="999999999999"'));window.location = window.location;}else {alert("you must open up a new game save first!");}
