function kalender(date, datum, monat, jahr)
{
	document.open();
	
	//�berschrift und Buttons.
	document.write('<!DOCTYPE html>');
	document.write('<html>');
	document.write('<head>');
	document.write('<link rel="stylesheet" href="kalender.css">'); 
	document.write('<script type="text/javascript" src="kalender.js"></script>');
	document.write('<title>Kalender</title>');
	document.write('</head>');
	document.write('<body>');
	document.write('<h1>Kalender</h1><br>');
	document.write('<a href="javascript:prev(date, datum, monat, jahr);">< </a>');
	document.write('<a href="javascript:next(date, datum, monat, jahr);"> ></a><br></br>');
	
	//Gibt unter dem Titel den jeweiligen Monat an.
	switch(monat) 
		{
			case 0: document.write("<h2>Januar</h2>");	
					break;
			case 1: document.write("<h2>Februar</h2>");	
					break;
			case 2: document.write("<h2>M�rz</h2>");	
					break;
			case 3: document.write("<h2>April</h2>");	
					break;
			case 4: document.write("<h2>Mai</h2>");	
					break;
			case 5: document.write("<h2>Juni</h2>");	
					break;
			case 6: document.write("<h2>Juli</h2>");	
					break;
			case 7: document.write("<h2>August</h2>");	
					break;
			case 8: document.write("<h2>September</h2>");	
					break;
			case 9: document.write("<h2>Oktober</h2>");	
					break;
			case 10: document.write("<h2>November</h2>");	
					break;
			case 11: document.write("<h2>Dezember</h2>");	
					break;		
			default: document.write("<h2>How did you even get there? oO</h2>");
		}
		
	//date.setDate(1) holt das Jahr und getDay() den Wochentag.
	date.setDate(1);
	var tag=date.getDay();
	
	//Der �bersicht halber wird der Wert von Sonntag von 0 auf 7 gesetzt.
	if(tag == 0)
	{
		tag=7;
	}
		
	//Hier wird mit Javascript die Tabelle generiert.
	document.write("<table border=0 id=kalender>");
	document.write("<tr><th>Mo<th>Di<th>Mi<th>Do<th>Fr<th>Sa<th>So</tr>");
	document.write("<tr>");
		
	//Die fehlenden Zeilen in der Tabelle werden aufgef�llt
	for(var i=1; i<tag; i++)
	{
		document.write("<td>");
	}
	
	for(j=1; j<32; j++)
	{
		date.setDate(j);
	
		if(monat == date.getMonth() && j == datum)
		{
			//Der aktuelle Tag soll markiert werden.
			document.write("<td id=tag><b>", j, "</b></td>");
		} else {
			document.write("<td>",j,"</td>");
		}
	
		tag++;
	
		//Wenn die aktuelle Woche vorbei ist wird tag wieder auf 1 gesetzt.
		if(tag > 7)
		{
			document.write("</tr>\n<tr>");
			tag=1;
		}
	}
	document.write("</tr>\</table>");
	document.write('</body>');
	document.write('</html>');
	document.close();
}

function next(date, datum, monat, jahr) {
	if(monat == 11) {
		date.setMonth(1);
	}
	kalender(date, datum, monat, jahr);
}

function prev(date, datum, monat, jahr) {
	if(monat == 0) {
		date.setMonth(11);
	}
	kalender(date, datum, monat, jahr);
}