function hello_python(){

    const {PythonShell} = require('python-shell');

    let options = {
        mode: 'text',
        pythonPath: 'C:/Users/info/Anaconda3/python.exe',
        scriptPath: './python/'
    };

    let pyshell = new PythonShell('hello.py', options)

    pyshell.on('message', function(message){
        console.log(message);
    });

    pyshell.end(function(err, code, signal){
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        console.log('finished');
    });
}