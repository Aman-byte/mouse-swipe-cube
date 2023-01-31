 const cube = document.querySelector('.cube');
      let xAngle = 45;
      let yAngle = 45;

      document.addEventListener('mousemove', function (event) {
        xAngle = -(window.innerHeight / 2 - event.clientY) / 5;
        yAngle = (window.innerWidth / 2 - event.clientX) / 5;

        cube.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
      });
