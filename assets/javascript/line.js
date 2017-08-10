
// need to connect to datasource
	
	//Creates a svg visualization with 
	var vis = d3.select("#visualisation"),
	    WIDTH = 1000,
	    HEIGHT = 500,
	    MARGINS = {
	        top: 20,
	        right: 20,
	        bottom: 20,
	        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0,6]);
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,40]);

    xAxis = d3.svg.axis()
    	.scale(xScale);
  
	yAxis = d3.svg.axis()
    	.scale(yScale)
    	.orient("left");

	vis.append("svg:g")
		.attr("class","axis")
    	.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    	.call(xAxis);

	vis.append("svg:g")
		.attr("class","axis")
		.attr("transform", "translate(" + (MARGINS.left) + ",0)")
    	.call(yAxis);

	var lineGen = d3.svg.line()
		.x(function(d) {
			return xScale(d.rank);
		})
		.y(function(d) {
		    return yScale(d.price);
	}).interpolate("basis");

	vis.append('svg:path')
	  .attr('d', lineGen(walmart))
	  .attr('stroke', '#0777ca')
	  .attr('stroke-width', 3)
	  .attr('fill', 'none');

	vis.append('svg:path')
	  .attr('d', lineGen(amazon))
	  .attr('stroke', '#ff9900')
	  .attr('stroke-width', 3)
	  .attr('fill', 'none');