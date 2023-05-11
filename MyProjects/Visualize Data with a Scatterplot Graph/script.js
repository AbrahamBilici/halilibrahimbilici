

const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';


Promise.all([d3.json(url)])
    .then(data => ready(data[0]))
    .catch(err => console.log(err));




function ready(dataset) {
    const timetooltip = [];

    for (let i = 0; i < dataset.length; i++) {
        timetooltip.push(dataset[i].Time);
    };

    for (let i = 0; i < dataset.length; i++) {
        dataset[i].Tooltip = timetooltip[i]
    };



    const w = 920;
    const h = 630;
    const p = 30;


    const timeMinSec = (d) => {
        d = d.split(":");
        let date = new Date();
        date.setMinutes(d[0]);
        date.setSeconds(d[1]);
        return date.getTime();
    }

    const timeData = (d) => {
        let parsedT = d.Time.split(":");
        d.Time = new Date(Date.UTC(1970, 0, 1, 0, parsedT[0], parsedT[1])).toISOString();

        return d.Time;
    }

    // title

    d3.select('#main').append('h2').attr('id', 'title').text('Doping in Professional Bicycle Racing');


    // svg chart

    const svg = d3.select('#main')
        .append('svg')
        .attr("width", w).attr("height", h).attr('class', 'graph');




    // x-Axis





    const xScale = d3.scaleLinear().domain([d3.min(dataset, d => d.Year), d3.max(dataset, d => d.Year)]).range([p, w - p - 60])


    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));



    //y-Axis


    const timeFormat = d3.timeFormat("%M:%S");



    const yScale = d3.scaleTime().domain([d3.min(dataset, d => timeMinSec(d.Time)), d3.max(dataset, d => timeMinSec(d.Time))]).range([p, h - p - 100])

    const yAxis = d3.axisLeft(yScale).tickFormat(timeFormat);



    // append x-axis and y-axis

    svg.append('g').attr('transform', `translate(60,100)`)

    svg.select('g').append('g').attr('id', 'x-axis').attr('transform', `translate(0,500)`).call(xAxis);


    svg.select('g').append('g').attr('id', 'y-axis').attr('transform', `translate(30,0)`).call(yAxis);



    // circle values 



    svg.select('g').selectAll('circle').data(dataset).enter().append('circle')
        .attr('class', 'dot').attr('id', d => d.Time)
        .attr('cx', (d, i) => xScale(d.Year))
        .attr('cy', (d, i) => yScale(timeMinSec(d.Time)))
        .attr('r', 6)
        .attr('data-xvalue', d => d.Year)
        .attr('data-yvalue', (d, j) => timeData(d))
        .attr('fill', d => {
            if (d.Doping == '') {
                return 'orange'
            } else {
                return 'blue'
            }
        });







    // legend


    const legend = svg.select('g').append('g').attr('id', 'legend')

    const leg1 = legend.append('g').attr('class', 'legend-label').attr('transform', `translate(0,250)`)

    leg1.append('rect').attr('x', 822).attr('width', 18).attr('height', 18).attr('fill', 'blue');


    leg1.append('text').text('Riders with doping allegations').attr('x', 816).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end');


    const leg2 = legend.append('g').attr('class', 'legend-label').attr('transform', `translate(0,230)`)

    leg2.append('rect').attr('x', 822).attr('width', 18).attr('height', 18).attr('fill', 'orange');

    leg2.append('text').text('No doping allegations').attr('x', 816).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end');


    // tooltip

    const tooltip = d3.select('#main').append('div').attr('id', 'tooltip')
        .style('position', 'absolute')
        .style('visibility', 'hidden')
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style('width', '200px')
        .style('height', '70px')
        .style('font', '12px sans-serif')
        .style('background', 'lightsteelblue')


    d3.select('#main').selectAll('circle')
        .on('mouseover', (event, d) => {
            tooltip.html('')
                .attr('data-year', d.Year)
                .style('visibility', 'visible')
                .style("top", event.pageY + "px")
                .style("left", event.pageX + 50 + "px");

            tooltip.append('text').text(`${d.Name}: ${d.Nationality}`);
            tooltip.append('br');
            tooltip.append('text').text(`Year: ${d.Year} , Time: ${d.Tooltip}`);
            tooltip.append('br');
            tooltip.append('br');
            tooltip.append('text').text(` ${d.Doping}`);
        })
        .on('mouseout', () => tooltip.style('visibility', 'hidden'))




}