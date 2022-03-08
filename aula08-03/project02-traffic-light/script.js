function changeLightTraffic() {
    if (document.getElementById("circleGreen").className === "circle circle-green") {
        document.getElementById("circleGreen").className = 'circle circle-off'
        document.getElementById("circleYellow").className = 'circle circle-yellow'
    } else {
        if (document.getElementById("circleYellow").className === "circle circle-yellow") {
            document.getElementById("circleYellow").className = 'circle circle-off'
            document.getElementById("circleRed").className = 'circle circle-red'
        }
        else {
            document.getElementById("circleGreen").className = 'circle circle-green'
            document.getElementById("circleRed").className = 'circle circle-off'
        }
    }

}