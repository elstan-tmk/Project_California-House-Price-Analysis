# Final_Project California House Price Analysis

https://oxypetalumm.github.io/Final_Project/

(Show homepage Github icon) Our group is Elstan and me, Lina
Our group is pretty small, we didn’t want to make our project complicated and ended up not having enough time to finish, so our project is relatively small.
Here is our presentation
## Introduction and Inspiration
**Background information:**

Many of us probably have noticed, since last year, California housing prices have been rocketing. Meanwhile, home sales have been strong. According to California Association of Realtors (C.A.R)’s data, as of April 2021,
·         Year 2021 home sales increased 65% comparing to 2020,
·         Year-to-date until April home sales increased 26%,
·         April 2021 single-family-home sales totaled over 450thousand,
·         2021 median home price increased 34% comparing to 2020, and in April, median home price breaks $8000,000 (8million),
·         San Francisco Bay Area has the highest home sales increase. Its year-over-year home sales increased 101%

According to Gallup, 
1. 53% of Americans believe now is a good time to buy a home
2. 71% of Americans believe that home prices are going to increase over the next year in their local market.

As we looked at datasets on Kaggle while doing our research, my teammate and I became interested in analyzing California home prices. We wanted to find out what factors are associated with home value in addition to mortgage rates and on market house inventory. Furthermore, we were interested in using the dataset to practice making predictions by using scikit learn.
On Kaggle, we found this dataset: “California Housing Prices” (https://www.kaggle.com/harrywang/housing)
which was based on the 1990 census record. It had been the only dataset we were able to find about California house price records. (Here’s the dataset – show dataset).

The data to make it easier for you to understand when we talk about our graphs:
1. Longitude: A measure of how far west a house is; a higher value is farther west
2. Latitude: A measure of how far north a house is; a higher value is farther north
3. Housing Median Age: Median age of a house within a block; a lower number is a newer building
4. Total Rooms: Total number of rooms within a block
5. Total Bedrooms: Total number of bedrooms within a block
6. Population: Total number of people residing within a block
7. Households: Total number of households, a group of people residing within a home unit, for a block
8. Median Income: Median income for households within a block of houses (measured in tens of thousands of US Dollars)
9. Median House Value: Median house value for households within a block (measured in US Dollars)
10. Ocean Proximity: Location of the house with relation to ocean/sea

We use Tableau to create graphs to analyze house value’s correlations with ocean proximity, income, population, households, total rooms, and total bedrooms.
Here’s the ocean proximity’s correlation with house value:


Technologies
Our project is created with:
Pandas 1.2.0
HTML/CSS/Bootstrap
Tableau 2021.1
 
### Analysis

**Correlation Analysis:**

We want to first explore the correlations between different attributes. Correlation coefficient is between -1 and  1, representing negative and positive correlations. 0 means there is no linear correlation.
Two findings after combining attributes:
rooms_per_household is slightly more correlated (0.151) with house value than total_rooms (0.134)
bedrooms_per_room is much more correlated (-0.256) than total_rooms (0.134) and total_bedrooms (0.0497): houses with lower bedroom/room ratio is more expensive: this sort of make sense, more expensive houses may have more offices, dens, playrooms, etc.


Housing Values Vs. Median income
We can see there are a number of "horizontal lines" in the plot: one clear one at  500,000,one at 450,000, another one at $350,000, and a few other ones. Try to find out why that is happening. If you cannot figure out the reason, removing those data points (if not too many) might be a good idea before feeding the data to the algorithms.


CA House Prices vs. Population
The following geographical data visualization show that the price is related to the location and population density.

 










CA House Prices vs. Ocean Proximity
As seen on the bar chart, the most expensive houses are the ones near bay, followed by near ocean, less than 1 hour distance from ocean, and lastly inland houses. The shades of color indicate the amount of houses, the darker the color the more house are in those area.






California House Prices vs. House Age
The following figure shows the relationship between the House age and the price,  


 
 Scikit Learn
 
Median House Values vs. Ocean Proximity
What are the factors that push up home value:
Ocean proximity? – Yes
Housing age? – Not necessary
Population?


Model Of Machine Learning:

Linear Regression:

![df](static/images/Results/Linear Regression.png)

Decision Tree:





Random Forest:




Comparison:
Random Forest is much better that the previous Linear Regression and Decision Tree. We assume Random Forest model is the best for this Machine Learning Model.









