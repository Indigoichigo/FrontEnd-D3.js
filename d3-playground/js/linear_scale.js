const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 600)
    .attr('height', 600)

d3.json('json/linear_scale.json').then(data => {


    // 設邊距
    const margin = {
        top: 20,
        right: 20,
        bottom: 100,
        left: 100
    }

    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const graph = svg.append('g')
        .attr('width', graphWidth)
        .attr('hieght', graphHeight)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // 顯示資料中的最小的、最大的、最小與最大的(兩個都顯示)
    const min = d3.min(data, d => d.order);
    const max = d3.max(data, d => d.order);
    const extent = d3.extent(data, d => d.order)
    console.log(min, max, extent);

    // domain 範圍
    // range 以同比例domain顯示在這個range中
    const y = d3.scaleLinear()
        .domain([0, max])
        .range([graphHeight, 0]);

    // 自動計算要多少寬
    const x = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    const rects = graph.selectAll('rect')
        .data(data)

    // 設定x,y軸資訊
    const xAxisGroup = graph.append('g')
        .attr('transform', `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append('g');
    
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(3)
        .tickFormat(d => d + ' orders');

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    xAxisGroup.selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        .attr('fill', 'orange')
        .attr('font-size', '16px')


    // 數據顯示
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.order))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.order));

})
