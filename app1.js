function userQuestion()
{
    let userAnswer = prompt('Having a nice day? Yes or No');
    while(userAnswer.toLowerCase() == 'yes' || 'no')
    {
        let userAnswer = prompt('Are you enjoying coding? Yes or No');
            
        if (userAnswer.toLowerCase() == 'yes')
        {
            let url = "https://c.tenor.com/GfSX-u7VGM4AAAAM/coding.gif"
            document.write('<img src="' + url + '">');
            break;
        }
        else if (userAnswer == 'no')
        {
            alert('Come on you know you are!')
        }
    }
}

function getUserName()
{
    let userName = prompt('Please Enter Name: ');
    
    document.write('Welcome ' + userName);
}

//code from https://www.javatpoint.com/random-image-generator-in-javascript
function getRandomImage()
{
    var randomImage = new Array();

    randomImage[0] = ""
    randomImage[1] = "https://media4.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif";
    randomImage[2] = "https://c.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif";
    randomImage[3] = "https://i.gifer.com/Ry6p.gif";
    randomImage[4] = "https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif";
    randomImage[5] = "https://media.giphy.com/media/lGD7VxrtwNalqhx68w/giphy.gif";

    // var number = Math.floor(Math.random()*randomImage.length)

    
    for (let i=0, len = randomImage.length; i < len; ++i)
    {
        pickNumber = prompt('Pick a number from 1 to 5');
        if(pickNumber > 5)
        {
            alert('Try Again! Pick a number from 1 to 5')
        }
        else if(pickNumber < 1)
        {
            alert('Try Again! Pick a number from 1 to 5')
        }
        else
        {
            document.write('<img src="'+randomImage[pickNumber]+'" />');
            break;
        }
    }
}
