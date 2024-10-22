function descriptingCommand(arr){
    let text = arr.shift();
    command = arr.shift();
    
    while (command !== 'Finish'){
        //console.log(command);
        let tokens = command.split(' ')
        let action = tokens.shift();

        if (action === 'Replace'){
            let currentChar = tokens.shift();
            let newChar = tokens.shift();
            while (text.includes(currentChar)){    
                text = text.replace(currentChar, newChar);
            }
            console.log(text);
        } else if (action === 'Cut'){
            let start = Number(tokens[0]);
            let end = Number(tokens[1])+1;
            if (start >=0 && start < text.length && end >= 0 && end < text.length) {
                text = text.substring(0, start)+ text.substring(end);
                console.log(text); 
            } else {
                console.log('Invalid indices!');
            }  
        } else if (action === 'Make'){
            //console.log(tokens);
            if (tokens[0] === 'Upper'){
                text = text.toUpperCase();
            } else if (tokens[0] === 'Lower'){
                 text = text.toLowerCase();
            } 
            console.log(text);
        } else if (action === 'Check'){
            if (text.includes(tokens[0])){
                console.log(`Message contains ${tokens[0]}`);  
            } else {
                console.log(`Message doesn't contain ${tokens[0]}`);             
            }

        } else if (action === 'Sum'){
            let sum = 0;
            let begin = tokens[0];
            let end = tokens[1];
            if (begin >=0 && begin < text.length && end >= 0 && end <= text.length) {
                for (let i = begin; i <= end; i++) {
                    const char = text[i];
                    const charCode = char.charCodeAt();
                    sum += charCode;
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        }

        command = arr.shift();
    }
    
}

// descriptingCommand((["ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"])
//     );

descriptingCommand(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"]);
    