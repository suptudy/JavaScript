let yearInput = document.getElementById("year");
let monthInput = document.getElementById("month");
let dayInput = document.getElementById("day");

let dayCalculateBtn = document.getElementById("day-calculate-btn");

let display = document.getElementById("display");

function inputDate() { 
    let year = parseInt(yearInput.value);
    let month = parseInt(monthInput.value);
    let day = parseInt(dayInput.value);

    return [ year, month, day];
}

function isLeap(year) {
    if(year % 4 == 0) { 
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            } else { 
                 return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function calculateTotalDays(year, month, day) {
    
    let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    for(let index=1; index < year; index++) {
        if(isLeap(index)){
            totalDays = totalDays + 366;
        } else {
            totalDays = totalDays + 365;
         }
    }

    for (let index=1; index < month; index++){
        totalDays = totalDays + monthDays[index];
    }

    if(isLeap(year) && month >=3) {
        totalDays = totalDays +1;
    }

    totalDays = totalDays + day;

    return totalDays;
}

function calculateDateName(totalDays) {

    let dayNameArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return dayNameArray[totalDays % 7];
}

dayCalculateBtn.addEventListener("click", function(){
    let [year, month, day] = inputDate();
    let totalDays = calculateTotalDays(year, month, day);
    let dayName = calculateDateName(totalDays);
    
    // let calendar = new Calandar();
    // let dayName = calendar.answer(year, month, day);

    display.innerHTML = `${dayName} 입니다.`;
});
