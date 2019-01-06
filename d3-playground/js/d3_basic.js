// d3選擇器用法
const a = d3.select('div')
console.log(a);

// d3選擇器多選用法
const b = d3.selectAll('div')
console.log(b);

// ---------------------------------
const canvas = d3.select('.canvas');

//將svg標籤加到.canvas下，然後直接用attr chaining點下去
const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

// 將下面三個形狀加到g標籤下
const group = svg.append('g')
    .attr('transform', 'translate(50, 100)')
    

group.append('rect')
    .attr('height', 100)
    .attr('width', 200)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20)

group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill','pink');

group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red')
    .attr('stroke-width', 3)

// ---------------------------------
svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', '#cdf')
    .text('hello D3')
    .style('font-family', 'arial')
