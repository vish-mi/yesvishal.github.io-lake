
$(document).ready(function() {
var database = firebase.database();
var firbaseheadingRef = firebase.database().ref();

firbaseheadingRef.on('value',function(snapshot){
	//heading.innerText= snapshot.val();
	// console.log(snapshot);
	console.log(snapshot.val());
	var obj = snapshot.val();
	console.log(obj[0]["Timestamp"]);
	var tbl=$("<table/>").attr("id","mytable");
	$("#div1").append(tbl);
	for(var i=0;i<obj.length;i++)
{
    var tr="<tr>";
    var td1="<td>"+obj[i]["Human readable date"]+"</td>";
    var td2="<td>"+obj[i]["Timestamp"]+"</td>";
    var td3="<td>"+obj[i]["node-mcu_temp-humid"]+"</td></tr>";
    
   $("#mytable").append(tr+td1+td2+td3); 
  
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Bellandur Lake", "Varthur Lake", "Hebbal Lake", "Ulsoor Lake", "Nagavara Lake", "Sankey tank Lake "],
        datasets: [{
            label: '# of Votes',
            data: [obj[0]["node-mcu_temp-humid"], obj[1]["node-mcu_temp-humid"], obj[2]["node-mcu_temp-humid"], obj[3]["node-mcu_temp-humid"], obj[4]["node-mcu_temp-humid"], obj[5]["node-mcu_temp-humid"]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


});




});