const svg = d3.select('.canvas > svg');

d3.json('json/external_data_json.json').then(data => {
    const circs = svg.selectAll('circle')
        .data(data);

    // add attrs to circs aleray in DOM
    circs.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)

    // append the enter selection to the DOM
    circs.enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)
})