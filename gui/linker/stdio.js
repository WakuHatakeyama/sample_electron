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