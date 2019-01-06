const data = [
    {
        width: 200,
        height: 100,
        fill: 'purple',
    },
    {
        width: 100,
        height: 60,
        fill: 'pink',
    },
    {
        width: 50,
        height: 30,
        fill: 'red',
    }
]

const svg1 = d3.select('.canvas1 > svg');

// 下面這種寫法要有相對應數量的DOM
// <svg width="600" height="600">
//     <rect></rect>
//     <rect></rect>
//     <rect></rect>
// </svg>  

// d儲存的是上面data中的資料
// i是index
// n是標籤
const rects1 = svg1.selectAll('rect')
    .data(data)
    .attr('width', (d, i, n) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill);


// 一般會這樣寫
const svg2 = d3.select('.canvas2 > svg');

// 先綁定資料
const rects2 = svg2.selectAll('rect')
    .data(data)

// 設定屬性上去
rects2.attr('width', (d, i, n) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill);

// d3會自動判斷需要幾個DOM
rects2.enter()
    .append('rect')
    .attr('width', (d, i, n) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill);