const data = [
    {
        name: "Naimisha Reddy",
        Maths:"65",
        Physics:"82",
        Chemistry : "75",
        Percentage : "83 %"
    },
    {
        name: "priya",
        Maths:"67",
        Physics:"89",
        Chemistry : "85",
        Percentage : "85.3 %"
    },
    {
        name: "Arthi",
        Maths:"90",
        Physics:"90",
        Chemistry : "90",
        Percentage : "90 %"
    },
    {
        name: "suba",
        Maths:"95",
        Physics:"95",
        Chemistry : "95",
        Percentage : "95%"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Maths : " + data[i].Maths +"</h3>" + "<h3>" + "Physics : " 
            + data[i].Physics +"</h3>" +"<h3>" + "Chemistry : " + data[i].Chemistry +"</h3>"+
            "Percentage : " + data[i].Percentage +"</h3>"

            return;
        }
    }
    results.innerHTML = "<h3>" + "No data" + "</h3>" 
}) 