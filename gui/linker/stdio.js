function timer(){

    const {PythonShell} = require('python-shell');

    let options = {
        mode: 'text',
        pythonPath: 'C:/Anaconda3/envs/electron/python.exe', //Custom on your environment
        scriptPath: './python/'
    };

    let pyshell = new PythonShell('timer.py', options);
    let discription = document.getElementById('sample');

    pyshell.on('message', function(message){
        console.log(message);
        discription.textContent = message;
    });

    pyshell.end(function(err, code, signal){
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        console.log('finished');
    });
}

function graph(){

    const {PythonShell} = require('python-shell');
    const Chart = require('chart.js');
    const Moment = require('moment');
    const ChartPlugin = require('chartjs-plugin-streaming');

    let options = {
        mode: 'text',
        pythonPath: 'C:/Anaconda3/envs/electron/python.exe', //Custom on your environment
        scriptPath: './python/'
    };

    let pyshell = new PythonShell('timer.py', options);
    let id = 'sample_chart';
    let ctx = document.getElementById(id).getContext('2d');
    let buffer = {};
    buffer['graph'] = [];
    if (document.getElementById(id).value === 'change'){
        chart.destroy()
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [],
                label: 'response',
                pointRadius: 1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            responsive:false,
            title: {
                text: 'sample chart',
                display: true
            },
            scales:{
                xAxes:[{
                    type: 'realtime'
                }],
                yAxes:[{
                    ticks: {
                        min: -1.2,
                        max: 1.2
                    }
                }]
            },
            plugins: {
                streaming: {
                    duration: 10000,
                    refresh: 100,
                    onRefresh: function(chart){
                        Array.prototype.push.apply(
                            chart.data.datasets[0].data, buffer['graph']
                        );
                        buffer['graph'] = []
                    }
                }
            }
        }
    });
    document.getElementById(id).value = 'change'

    pyshell.on('message', function(message){
        // console.log(message);
        buffer['graph'].push({
            x: Date.now(),
            y: parseFloat(message)
        });
    });

    pyshell.end(function(err, code, signal){
        if (err) throw err;
        // chart.destroy()
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        console.log('finished');
    });
}