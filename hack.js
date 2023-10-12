 if (localStorage.getItem("RetroBowl.0.savedata.ini")) {
            let z = prompt("how many credits do you have right now (please input correct number)")
            let x = localStorage.getItem("RetroBowl.0.savedata.ini")
            let y = x.replace(`coach_credit="${z}"`, 'coach_credit="99999"')
            localStorage.setItem("RetroBowl.0.savedata.ini", y)
            window.location = window.location
          } else {
            alert("you must open up a new game save first!")
          }
        }
