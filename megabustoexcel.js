total = ''
parser = new DOMParser();
var txt = document.documentElement.innerHTML;
htmlDoc=parser.parseFromString(txt, "text/html");

htmlDoct = htmlDoc.getElementsByClassName('btn btn-default btn-copy')[0].remove();
ticketsSections = htmlDoc.getElementsByClassName('row account-mytickets-section');

count = 0;
for (var i=0; i < ticketsSections.length; i++) {
	part = ''
	if (count == 0) {
		console.log('Current Tickets\n------------------------');
	} else {
		console.log('\nPast Tickets\n------------------------');
	}
	ticketElems = ticketsSections[i].getElementsByClassName('ticket--basket');
	for (var j=0; j < ticketElems.length; j++) {
		ticketString = ''
		ticket = ticketElems[j];


		// Booking Time of the ticket
		bookingTimes = ticket.getElementsByClassName('row ticket__booking-time');
		dateString = '';
		timeString = '';
		for (var x=0; x < bookingTimes.length; x++) {
			partsElem = bookingTimes[x].getElementsByClassName('col-xs-6');
			for (var k=0; k < partsElem.length; k++) {
				dateTimeString = '';
				partElem = partsElem[k];
				bookingTimeElems = partElem.getElementsByClassName('ticket__booking-time__item');

				dateString = bookingTimeElems[0].textContent.trim() + '\t';
				timeString += bookingTimeElems[1].textContent.trim() + '\t';
			}
		}

		// Origin and Destination of ticket
		times = ticket.getElementsByClassName('col-xs-12 ticket__stops');
		timeElem = times[0].getElementsByClassName('ticket__stops__item');
		originString = timeElem[0].textContent.trim() + '\t';
		destString = timeElem[1].textContent.trim() + '\t';


		// Price of the ticket
		priceElem = ticket.getElementsByClassName('ticket__price__item');
		priceString = priceElem[0].textContent.replace(/ /g,'') + '\t';

		// Reservation Number of ticket
		reservationNumberElem = ticket.getElementsByClassName('ticket__reservation__no');
		reservationNumberString = reservationNumberElem[0].textContent.replace(/ /g,'').replace('Copy', '') + '\t';


		// Concatenating all the data together
		ticketString += dateString;
		
		ticketString += originString;
		ticketString += destString;

		ticketString += timeString;

		ticketString += priceString;

		ticketString += reservationNumberString

		part += ticketString + '\n';
		// total += '\n==========================\n';

	}
	count++;

	// Prints out first current tickets, and then past tickets
	console.log(part);
	total += part;
}
console.log('============');
// Prints out all tickets - current and past tickets.
console.log(total);



