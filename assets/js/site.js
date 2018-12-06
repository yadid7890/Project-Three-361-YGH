(function(){
  if (typeof document.querySelector === 'undefined') {
    return; // be kind to old browsers and get out
  }
  var slideshow = document.querySelector('.gallery');
  // Replace the gallery class with slideshow
  slideshow.className = 'slideshow';
  var figcaption = slideshow.querySelector('figcaption');
  figcaption.innerHTML += '<b></b>';
  // Grab all the slides -- that is, the list items
  var slides = slideshow.querySelectorAll('li');
  console.log(slides.length, 'slides');

  slides[0].className = 'is-showing';

  // Create the next_slide stepper function from cycle(), defined below
  var next_slide = cycle(slides);
  var old_slide = slides[0];

  slideshow.addEventListener('click', function(e){
    old_slide.className = ''; // remove is-showing from old slide
    var slide = next_slide();
    slide.className = 'is-showing';
    old_slide = slide;
  })
  // Function to cycle endlessly through an array;
  function cycle(arr) {
    var max_index = arr.length - 1;
    var current_index = 0;
    return function() {
      // increment the index by 1
      current_index++;
      // if the index is bigger than 1, reset to 0
      if (current_index > max_index) {
        current_index = 0;
      }
      var item = arr[current_index];
      return item;
    }
  }
})();
