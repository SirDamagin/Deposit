const topText = document.querySelector('.top-text');
const midText = document.querySelector('.mid-text');
const siteBox = document.querySelector('.site-box');
const startButton = document.querySelector('.startButton');
const decoration = document.querySelector('.decoration');

function addAnimations()
{
    topText.classList.add('topTextMoving');
    midText.classList.add('midTextMoving');
    siteBox.classList.add('siteBoxMoving');
    startButton.classList.add('buttonAway');
    decoration.classList.add('decorationDropping');
}