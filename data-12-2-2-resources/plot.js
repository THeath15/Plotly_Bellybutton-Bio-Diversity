console.log(cityGrowths);

// Sort the cities in descending order of population growth.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);
// Select only the top five cities in terms of growth.
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);
// Create separate arrays for the city names and their population growths.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames);
console.log(topFiveCityGrowths);
// Use Plotly to create a bar chart with these arrays.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  // Skill Drill: Use the same dataset to create a bar chart of the seven largest cities by population.
  var sortedLargeCities = cityGrowths.sort((a,b) =>
  a.population - b.population).reverse(); 
  console.log(sortedLargeCities);
  // Select only the top five cities in terms of growth.
  var topSevenLargeCities = sortedLargeCities.slice(0,7);
  console.log(topSevenLargeCities);
//   // Create separate arrays for the city names and their population growths.
  var topSevenLargeCityNames = topSevenLargeCities.map(city=> city.City);
  var topSevenLargeCityGrowths = topSevenLargeCities.map( population => parseInt(population.population));
  
  console.log(topSevenLargeCityNames);
  console.log(topSevenLargeCityGrowths);
  // Use Plotly to create a bar chart with these arrays.
  var trace1 = {
      x: topSevenLargeCityNames,
      y: topSevenLargeCityGrowths,
      type: "bar"
    };
    var data = [trace1];
    var layout = {
      title: "Seven Largest Cities by Population",
      xaxis: {title: "City" },
      yaxis: {title: "Population Growth, 2016-2017"}
    };
    Plotly.newPlot("bar-plot", data, layout);
