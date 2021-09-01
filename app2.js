let userAnswer = prompt('Are you really coding? Yes or No');

if (userAnswer.toLocaleLowerCase() == 'yes')
{
    let url = "https://media4.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif"
    document.write('<img src="' + url + '">');
}