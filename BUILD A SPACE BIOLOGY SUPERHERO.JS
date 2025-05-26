function show_hide(){
        var x =  document.getElementById("Hide");
        x.classList.toggle('hide');
}
(function () {
    let socials = document.querySelectorAll('.social div')
        
    socials.forEach(function(social, index) {
      social.style.animation = `moveIn .5s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`
    })
  }())

