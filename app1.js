function userQuestion()
{
    let userAnswer = prompt('Are you coding? Yes or No');
    
    if (userAnswer.toLocaleLowerCase() == 'yes')
    {
        let url = "https://c.tenor.com/GfSX-u7VGM4AAAAM/coding.gif"
        document.write('<img src="' + url + '">');
    }
    else
    {
        window.location = "https://kstov.github.io/HTML/blank";
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

    randomImage[0] = "https://media4.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif";
    randomImage[1] = "https://c.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif";
    randomImage[2] = "https://i.gifer.com/Ry6p.gif";
    randomImage[3] = "https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif";
    randomImage[4] = "https://media.giphy.com/media/lGD7VxrtwNalqhx68w/giphy.gif";

    var number = Math.floor(Math.random()*randomImage.length)

    document.write('<img src="'+randomImage[number]+'" />');
}
