/*********************** 
requerment 
 creat star in background
*********************** */

/*********************** 
 steps : 
 1 . select tergeted element
 2 . creat any element such as i or span 
 3. add class in this created element
 4.fix there width ,height , position and animation
 * 
********************** */


// step - 1  : select tergeted element
let container = document.querySelector('.container');

// step 2 to 4 

let i = 0 ;
while(i < 300){
    let star = document.createElement('i');
    star.classList.add('star');
    container.appendChild(star);

    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    let size = Math.random() * 4 ;
    let duration = Math.random() * 2 ;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = 2 + duration + 's';
    star.style.animationDelay = duration + 's';

    i++;
}