
// need to connect to datasource
//should update visualization size based on 
	
	//Creates a svg visualization with set width, height, and margins
	var vis = d3.select("#visualisation"),
	    WIDTH = 1000,
	    HEIGHT = 500,
	    MARGINS = {
	        top: 20,
	        right: 20,
	        bottom: 20,
	        left: 50
    },

    //Sets the scale of the axis to match the full width and height of the graph
    var xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0,6]);
    var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,40]);

    //Applies the xScale to the xAxis
    xAxis = d3.svg.axis()
    	.scale(xScale);
  
  	//Applies the yScale to the yAxis and orients it vertically
	yAxis = d3.svg.axis()
    	.scale(yScale)
    	.orient("left");

	//Appends the x-Axis to the plot area with CSS ".axis"
	vis.append("svg:g")
		.attr("class","axis")
    	.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    	.call(xAxis);

	//Appends the y-Axis to the plot area with CSS ".axis"
	vis.append("svg:g")
		.attr("class","axis")
		.attr("transform", "translate(" + (MARGINS.left) + ",0)")
    	.call(yAxis);

	//creates a line variable with the rank datapiece as the X-variable and price as the Y-variable
	//.interpolate makes it smooth
	var lineGen = d3.svg.line()
		.x(function(d) {
			return xScale(d.rank);
		})
		.y(function(d) {
		    return yScale(d.price);
	}).interpolate("basis");

	//appends a line for the walmart dataset with color of #0777ca
	vis.append('svg:path')
	  .attr('d', lineGen(walmart))
	  .attr('stroke', '#0777ca') //walmart blue
	  .attr('stroke-width', 3)
	  .attr('fill', 'none');

	//appends a line for the amazon dataset with color of #ff9900
	vis.append('svg:path')
	  .attr('d', lineGen(amazon))
	  .attr('stroke', '#ff9900') //amazon orange
	  .attr('stroke-width', 3)
	  .attr('fill', 'none');