export default function FlowerClass($target, $props) {
  this.setUp = () => {
    this.$state = {};
  };

  this.setEvent = () => {
    console.log($props);
    this.$target.addEventListener('hover', ({ target }) => {
      console.log(target);
    });
  };

  this.template = () => {
    return `
    <div class="category_product_detail">
      <dl class="detail">
        <dt class="thumbnail">
          <a class="link" href="/" data-offline="false" style="background-image: url(${$props.imageUrl});">
          <img src="https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/main_class_special.png" alt="${$props.name}">
          <span class="image" style="background-image: url(${$props.imageUrl});"></span>
          <span class="category_product_bdg"></span>
          </a>
        </dt>
        <dd class="summary">
          <a href="/" class="name_2" data-offline="false">${$props.name}</a>
          <span class="discount">
            <span class="price">${$props.price}원</span>
          </span>
          <span class="more"></span>
          <span class="showroom">
          </span>
        </dd>
      </dl>
    </div>`;
  };

  this.mounted = () => {};

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
