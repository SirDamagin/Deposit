const topText = document.querySelector('.top-text');
const midText = document.querySelector('.mid-text');
const botText = document.getElementById('botText');
const siteBox = document.querySelector('.site-box');
const startButton = document.querySelector('.startButton');
const decoration = document.querySelector('.decoration');
const decoration2 = document.querySelector('.decoration2');

function addAnimations()
{
    topText.classList.add('topTextMoving');
    midText.classList.add('midTextMoving');
    botText.classList.add('midTextMoving');
    siteBox.classList.add('siteBoxMoving');
    startButton.classList.add('buttonAway');
    decoration.classList.add('decorationDropping');
    decoration2.classList.add('decorationDropping');
}