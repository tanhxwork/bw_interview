<template v-if="guides1 || guides2 || guides3">
  <Carousel control indicators>
    <CarouselInner>
      <CarouselItem>
        <CarouselItemImage width="250" :src="guides_01" />
        <CarouselCaption>
          <h5>Forex For Beginners</h5>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage width="250" src="/img/guides_02.png" />
        <CarouselCaption>
          <h5>Analysing Made Easy</h5>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage width="250" src="/img/guides_03.png" />
        <CarouselCaption>
          <h5>CFDs Starter Kit</h5>
        </CarouselCaption>
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</template>

<script>
import guides_01 from "/img/guides_01.png";
export default {
  data() {
    return {
      guides_01,
    };
  },
};
</script>
