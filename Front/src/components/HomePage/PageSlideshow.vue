<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images" :key="index" :class="['carousel-item', { active: currentIndex === index }]">
        <transition :name="transitionName">
          <img v-if="currentIndex === index" :src="image" class="d-block w-100" alt="...">
        </transition>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
    <div class="carousel-indicators">
      <span
          v-for="(image, index) in images"
          :key="index"
          @click="setSlide(index)"
          data-bs-target="#carouselExampleControls"
          :data-bs-slide-to="index"
          :class="{ active: currentIndex === index }">
      </span>
    </div>
  </div>
</template>

<script>
import image0 from '../../assets/slideShow/11.jpg';
import image1 from '../../assets/slideShow/seine.jpeg';
import image2 from '../../assets/slideShow/2.jpg';
import image3 from '../../assets/slideShow/notredame.jpg';
import image4 from '../../assets/slideShow/louvre.webp';
import image5 from '../../assets/slideShow/notredame.jpg';
import image6 from '../../assets/slideShow/trocadero.jpg';
import image7 from '../../assets/slideShow/tuileries.jpg';
import image8 from '../../assets/slideShow/grandpalais.png';
import image9 from '../../assets/slideShow/invalide.webp';
import image10 from '../../assets/slideShow/hdv.jpg';


export default {
  data() {
    return {
      images: [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10],
      currentIndex: 0,
      direction: 'forward',
      interval: null,
    };
  },

  mounted() {
    this.interval = setInterval(this.nextSlide, 5000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    transitionName() {
      if (this.direction ==='forward'){
        return "fade"
      }else{
        return "fade-reverse"
      }
    },
  },
  methods: {
    resetInterval() {
      clearInterval(this.interval);  // Clear the existing interval
      this.interval = setInterval(this.nextSlide, 5000);  // Set a new interval
    },
    nextSlide() {
      this.direction = 'forward';
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.resetInterval();
    },
    prevSlide() {
      this.direction = 'backward';
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.resetInterval();
    },
    setSlide(index) {
      if(index > this.currentIndex){
        this.direction = "forward";
      }else{
        this.direction = "backward";
      }
      this.currentIndex = index;
    },
  },
};
</script>


<style scoped>

.carousel-title {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 10px;
  z-index: 3;
  color: white;
  font-size: 2em;
}

.carousel-inner img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}

.carousel-inner {
  height: 100vh;
  background-color: black;
}


.carousel-control-prev, .carousel-control-next {
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: transparent;
  background-image: none;
  border: none;
  font-size: 24px;
}

.carousel-control-prev-icon:after {
  content: '\2190';
}

.carousel-control-next-icon:after {
  content: '\2192';
}

.carousel-indicators {
  bottom: 10px;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-indicators .active {
  background-color: white;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  z-index: 2;
}
.fade-reverse-enter-active, .fade-reverse-leave-active {
  transition: opacity 1s;
}
.fade-reverse-enter, .fade-reverse-leave-to {
  opacity: 0;
  z-index: 2;
}
.fade-enter-active, .fade-leave-active, .fade-reverse-enter-active, .fade-reverse-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
