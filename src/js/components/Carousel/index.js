// 더보기 및 옵션 버튼들 마우스오버 시 이벤트.
// 이미지 마우스오버 시 이벤트
// 모바일 대응

/* img는 이미지 풀사이즈로 나오게 만드는 빈 이미지, real_img가 진짜. */

import FlowerClass from './FlowerClass/index.js';

export default function Carousel($target) {
  this.setUp = () => {
    this.$state = {
      selected: 0,
      flowerClasses: [
        {
          id: 0,
          name: '롱앤로우 센터피스(2/17~2/21)',
          price: '69,000',
          stores: ['광화문점', '잠실점', '월계점', '구로점'],
          imageUrl:
            'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_web_R0tReO1.jpeg&quot',
        },
        {
          id: 1,
          name: '오아시스 리스(2/21~2/27)',
          price: '79,000',
          stores: ['광화문점', '잠실점', '월계점', '구로점', '송파점', '부산동래점'],
          imageUrl:
            'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
        },
        {
          id: 2,
          name: '클래식 핸드타이드(2/28~3/6)',
          price: '79,000',
          stores: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
          imageUrl:
            'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
        },
      ],
    };
  };

  this.setEvent = () => {
    // 모든 event target에 부여하고, 이벤트 버블링.
    this.$target.addEventListener('click', ({ target }) => {
      if (target.classList.contains('left_button')) {
        this.setState({ selected: (this.$state.selected + 1) % 3 });
      }

      if (target.classList.contains('right_button')) {
        this.setState({ selected: (this.$state.selected + 1) % 3 });
      }
    });
  };

  this.template = () => {
    const { selected, flowerClasses } = this.$state;

    return `
    <div class="inbox">
      <div class="home_contents_head">
        <h3 class="tit">
          <span>꽃과 함께 하는 일상, </span>
          <b>플라워클래스</b>
        </h3>
      </div>
      <div class="products">
        <div class="event_class">
          <a href="/" class="link">
            <img class="img pc" src="https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/main_class_event_w.png" alt="매주 새로운 커리큘럼으로 배우는" />
            <span class="real_img pc" style="background-image: url(${flowerClasses[selected].imageUrl});" />
            <strong class="name">플라워 클래스 자세히 보기</strong>
            <span class="desc">매주 새로운 커리큘럼으로 배우는</span>
          </a>
        </div>
        <ul class="special_class">
          <li class="first_item"></li>
          <li class="second_item"></li>
        </ul>
        <a href="/" class="more_link">더보기</a>
        <button class="left_button" />
        <button class="right_button" />
      </div>
    </div>`;
  };

  this.mounted = () => {
    const { selected, flowerClasses } = this.$state;
    const $firstItem = this.$target.querySelector('.first_item');
    const $secondItem = this.$target.querySelector('.second_item');

    new FlowerClass($firstItem, flowerClasses[(selected + 1) % 3]);

    new FlowerClass($secondItem, flowerClasses[(selected + 2) % 3]);
  };

  this.setState = (newState) => {
    this.$state = { ...this.$state, ...newState };
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    this.mounted();
  };

  this.$target = $target;
  this.setUp();
  this.setEvent();
  this.render();
}
