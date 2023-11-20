const stars = document.querySelectorAll('.star');

stars.forEach(function(star, index) {
    star.addEventListener('click', function() {
        for (let i=0; i<=index; i++) {
            stars[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++) {
            stars[i].classList.remove('checked');
            
        }

    })
})
const stars1 = document.querySelectorAll('.star1');
stars1.forEach(function(star1, index) {
    star1.addEventListener('click', function() {
        for (let i=0; i<=index; i++) {
            stars1[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++) {
            stars1[i].classList.remove('checked');
            
        }

    })
})

const stars2 = document.querySelectorAll('.star2');
stars2.forEach(function(star1, index) {
    star1.addEventListener('click', function() {
        for (let i=0; i<=index; i++) {
            stars2[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++) {
            stars2[i].classList.remove('checked');
            
        }

    })
})