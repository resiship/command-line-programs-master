var program = require('commander');

program
  .version('0.0.1')

program
  .command('show [name]')
  .description('initialize command')
  .action(function(name){
        console.log('Yes '+ name +'...I have started...');
});

program
  .command('bye')
  .description('by command')
  .action(function(){
        console.log('Bye for now');
  
});

program
  .command('*')
  .action(function(env){
    console.log('Please enter a Valid command');
});

program.parse(process.argv);
