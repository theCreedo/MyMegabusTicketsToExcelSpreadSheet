# MyMegabusTicketsToExcelSpreadSheet
![Excel Spreadsheet](/Images/FinishedProduct.png)

A JavaScript script that takes the HTML of the Megabus's ['My Tickets'](https://us.megabus.com/account-management/my-tickets) and prints out the raw data of the tickets to paste into excel.


## How to use

1. Create an Excel Spreadsheet

2. Create different Exel Tabs for tickets (optional)
![Sheet Tabs Format](/Images/SheetTabsFormat.png)

3. Format the labels for the info given like this:
![Label Format](/Images/LabelFormat.png)

4. Go to [Megabus's My Tickets](https://us.megabus.com/account-management/my-tickets) page and right click to access 'Inspect'
![Inspect Page](/Images/Inspect.png)

5. Go to the console tab in 'Inspect', and paste the JavaScript code into the console. Press Enter.

6. Copy the text and paste it into cell 'A2' of your Excel spreadsheet

7. Format as necessary.


## Underlying code description

Basically, the code looks for important elements in the page based off of the class names, ex. ticket__price__item, ticket__reservation__no, etc... The code then takes the elements, gets the values inside of the element, and with some formatting, creates a string, which at the end is concatenated together to create a ticket.

These tickets are compiled into a variable that contains all the tickets.

I've made it so that you can also get a string of the 'Current Tickets' and 'Past Tickets' so you can keep track of previous expenditures or take note of how much you've paid currently.

NOTE: This does not keep track of the batches you bookes, nor how much is spent. It can only get the value of the tickets.

... will add more description later... hopefully


