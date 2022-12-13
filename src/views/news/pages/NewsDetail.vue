<template>
  <div class="d-flex">
    <div class="content-right new-detail">
      <div class="d-flex flex-column main-content">
        <v-card class="mt-5 new-pic">
          <v-img
            lazy-src=""
            class="new-image"
            :src="require(`@/assets/home/news/new1-image.webp`)"
          >
          </v-img>
        </v-card>
        <div class="kanit-font text-break mt-5" style="font-size: 50px">
          <span style="font-weight: bold"
            >WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?</span
          >
        </div>
        <div>
          <p class="d-flex kanit-font col-gap-2" style="font-size: 17px">
            <span class="red-text" style="font-weight: bold">COMMUNITY</span>
            <span class="gray-text">10 Oct 2022</span>
          </p>
        </div>
        <div class="kanit-font" style="font-size: 18px">
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit porttitor consectetur
            vulputate sed in in ac pretium. Sed eget pellentesque consequat
            mauris nec in. Nisl mauris tortor viverra consectetur habitant
            elementum semper. In tellus aliquet et aliquam lectus sit convallis
            enim.
          </p>

          <p>
            Consequat fames ut sagittis eu lorem eu. Sem id arcu integer
            pellentesque bibendum nunc. Est volutpat erat sed sapien. Quis
            condimentum faucibus tincidunt cursus diam. Integer adipiscing
            fermentum tortor odio venenatis in mattis. Elit id adipiscing
            pulvinar quam amet tincidunt. Feugiat eget pellentesque urna pretium
            sit mi pellentesque. Ante id vel massa iaculis viverra. Suspendisse
            suspendisse blandit dolor lectus nunc vel in. Viverra eget
            adipiscing sagittis pulvinar blandit. Malesuada blandit velit tellus
            eget pharetra arcu et.
          </p>

          <p>
            Lorem velit nulla vehicula et ullamcorper turpis sapien. Massa amet
            enim tortor tincidunt nisl at non at. Convallis velit magna
            elementum aliquet. Etiam elit tempor amet fames ipsum nunc eu.
            Vestibulum duis orci quam elit pharetra duis bibendum nunc elit.
            Aliquam mi eget sit eget laoreet ac vel. Faucibus sollicitudin
            posuere vitae egestas. Pellentesque tellus purus aliquam diam porta.
            Posuere tempus pellentesque sem semper velit vitae viverra. Amet
            quam turpis sit eget id penatibus enim. Enim diam velit massa
            habitant nunc turpis. Aliquet bibendum quam non molestie. Massa id
            purus integer eget risus. Sagittis quis morbi egestas porta
            vulputate. Pellentesque amet leo lacus consequat euismod donec.
          </p>

          <p>
            Aliquam nam tempor dui placerat tristique. Volutpat elit eu magna
            nunc tristique sapien lorem. Id tincidunt nec ultricies odio. Mi
            nunc dui consectetur tellus turpis elit adipiscing odio. Condimentum
            feugiat erat in sed amet imperdiet fames sed. At neque tellus
            maecenas facilisi felis purus sit vel. Eget et et dignissim tellus
            mauris neque ornare. Magna urna aenean id aliquam ultricies mattis
            enim vitae ipsum. Aenean aliquet at dignissim suspendisse a et
            morbi. Nibh suspendisse mi volutpat risus quam tellus. Semper in
            eget egestas diam risus suspendisse eget vel. Tincidunt duis sed
            purus rutrum sed. Turpis vulputate purus vel ipsum interdum netus.
            Odio sed vel tincidunt tempor duis felis. Amet quam turpis sit eget
            id penatibus enim.
          </p>
        </div>
        <div class="d-flex justify-space-between mt-12">
          <div class="d-flex kanit-font col-gap-15 align-center">
            <div class="slider">
              <v-img
                :src="require(`@/assets/home/media/slide-left.webp`)"
              ></v-img>
            </div>
            <span class="align-seft-center gray-text" style="font-size: 19px"
              >Older</span
            >
          </div>
          <div class="d-flex align-center">
            <v-btn color="violet bungee-font" class="white--text btn-customize">
              <span>View All</span>
            </v-btn>
          </div>
          <div class="d-flex kanit-font col-gap-15 align-center">
            <span class="align-seft-center gray-text" style="font-size: 19px"
              >Newer</span
            >
            <div class="slider">
              <v-img
                :src="require(`@/assets/home/media/slide-right.webp`)"
              ></v-img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-left">
      <div class="d-flex flex-column row-gap-15 new-list mt-10 ml-8">
        <detailCard
          v-for="(value, index) in news"
          :key="value.type"
          :index="index"
          :news="value"
        >
        </detailCard>
      </div>
    </div>
  </div>
</template>

<script>
import detailCard from "../components/new-detail-card.vue";
export default {
  components: {
    detailCard: detailCard,
  },
  data() {
    return {
      news: [
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          type: "NEWS",
          title: "WAS THE HARDEST CHALLENGE EVER...",
          createdDate: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          type: "NEWS",
          title: "WAS THE HARDEST CHALLENGE EVER...",
          createdDate: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          type: "NEWS",
          title: "WAS THE HARDEST CHALLENGE EVER...",
          createdDate: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          type: "NEWS",
          title: "WAS THE HARDEST CHALLENGE EVER...",
          createdDate: "10 Oct 2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.new-pic {
  width: 100%;
  max-height: max-content;
  border: solid 5px black;
  border-radius: 16px;
}
.new-detail {
  height: max-content;
  margin-bottom: 50px;
}
.btn-customize {
  border-radius: 10px;
  height: 45px !important;
}
.main-content {
  width: 80%;
  margin-left: 250px;
  font-weight: 500;
}
.content-right {
  height: 1312px;
  width: 74%;
  background-color: transparent;
}
.content-left {
  width: 26%;
  background-color: #f8f8f8;
}
.new-image {
  object-fit: contain;
  max-height: 450px;
}
.col-gap-2 {
  column-gap: 2%;
}
.col-gap-15 {
  column-gap: 15px;
}
.row-gap-15 {
  row-gap: 20px;
}
.red-text {
  color: red;
}
.gray-text {
  color: gray;
}
.new-list {
  width: 70%;
}
</style>
