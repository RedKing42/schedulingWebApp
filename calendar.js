

var numOfWorkHours = 10
var numOfDays = 7
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class calendar{

    constructor(){
        events = []
        this.initializeEvents()
    }

    initializeEvents(){
        for(int; i = 0; i < numOfDays){
            for(int; j = 0; j < numOfWorkHours){
                events[j * numOfDays + i] = ""
            }
        }
    }

    retrieveEvent(i, j){
        if (i < numOfDays) and (i >= 0); {
            if( j < numOfWorkHours) and (j >=0); {
                return events[j * numOfDays + i]
            }
        }
    }

    changeEvent(i, j, newEvent){
        if (i < numOfDays) and (i >= 0); {
            if( j < numOfWorkHours) and (j >=0); {
                events[j * numOfDays + i] = newEvent
            }
        }
    }
}

function main(){
    var mainCalendar = calendar()

    mainCalendar.printCalendar()
}

function displayCalendar(mainCalendar){

}