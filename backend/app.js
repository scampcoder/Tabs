// grab buttons
const btns = document.querySelectorAll('.tab-btn');
// grab about section
const about = document.querySelector('.about');
// grab article divs
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active from other/all btns
        btns.forEach(function(btn){
            btn.classList.remove('active');
            //add active for selected btn
            e.target.classList.add('active');
        });
    }
});

