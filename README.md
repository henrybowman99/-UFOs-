# UFO Website 

## Overview
The objective of this project was to create a webpage focused on providing information on UFO sightings. The main elements of the webpage are a title, banner, informational paragraph, and a filterable table of sightings data. I used HTML to create the basic layout of the webpage. I then used Javascript to make the page dynamic, allowing for fitering of the table. Lastly, I customized the styling of the webpage by utilizing CSS and adding to my prior HTML code.

## How to Filter the Webpage Table

The filter I created allows the webpage user to narrow down the data based on five categories: Date of sighting, the city the sighting occured in, the state the sighting occured in, the country the sighting occured in, and the shape of the UFO that was sighted. Before entering anything in the filters, the filter area and table looks as follows:

![Unfiltered table](https://user-images.githubusercontent.com/95651156/158865915-527c6ea2-f0a2-4c50-ad5d-94e3245fbac6.png)

As you can see, there is nothing entered in any of the filters on the left in the above image, and as a result, every observation from the data is included in the table. To change the data displayed in the table, all the user has to do is to input text in any (or all) of the filter boxes and press enter. For example, to see observations that occured in the state of California on January 6th, 2010 the user would input "1/6/2010" in the date box, input "ca" in the state box, and press enter. After doing so, the filter area and table look as follows:


![filter 1](https://user-images.githubusercontent.com/95651156/158867627-2a9922d5-6b5c-4544-9796-4a1a1228a955.png)

Suppose the user wanted to narrow the table down even further to display just the sighting that occured in San Diego. There are two ways to do this: Option 1 is to enter "san diego" in the city box, while Option 2 is to enter "light" in the shape box. An image of Option 1 is dislayed below.

![filter 3](https://user-images.githubusercontent.com/95651156/158869059-fb5927a7-eddb-456b-a6c8-61aa93b5e143.png).

Lastly, the user can remove a filter by deleting the text in the box and pressing enter. For example, suppose the user decides they want to see all the sightings that occuered in San Diego. To do this, they would simply clear the date and state filters and then press enter (NOTE: It's actually not necessary to clear the state in this case since filtering on San Diego makes filtering on California irrelevant). The result is seen below.

![filter 4](https://user-images.githubusercontent.com/95651156/158870391-311247ce-826b-4423-b752-46f400d6324e.png).

## Summary
I think the biggest drawback of the current webpage is that the table represents the sightings data in raw form. The page would look far better if there was code that took the data and formatted it before it is entered into the table. For example, "fresno", "ca", and "us" would show up as "Fresno", "CA", and "USA" instead.

One way in which I could further develop the webpage would be to give each observation a separate webpage that goes into further detail about the sighting. I would add links to each observation within the table that access these pages. Additionally, from an aesthetics standpoint, I think the webpage would be improved by adding another image to the left of the paragraph and above the filter boxes. The emptiness that currently defines this part of the page sticks out like a sore thumb, so I would add a picture of a UFO.
