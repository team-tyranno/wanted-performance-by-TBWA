export default function FlowerClass($target, $props) {
  this.setUp = () => {
    this.$state = {};
  };

  this.setStoreColor = (store) => {
    switch (store) {
      case '광화문점':
        return 'gwang';
      case '잠실점':
        return 'jam';
      case '월계점':
        return 'wolgye';
      case '구로점':
        return 'guro';
      case '송파점':
        return 'songpa';
      case '부산동래점':
        return 'dongrae';
      default:
        return 'songpa';
    }
  };

  this.setEvent = () => {};

  this.template = () => {
    return `
    <div class="category_product_detail">
      <dl class="detail">
        <dt class="thumbnail">
          <a class="link" href="/" data-offline="false" style="background-image: url(${$props.imageUrl});">
            <img src="https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/main_class_special.png" alt="${
              $props.name
            }">
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
            ${$props.stores
              .map((store) => {
                return `<a href="/" class="store ${this.setStoreColor(store)}" data-offline="true">${store}</a>`;
              })
              .join('')}
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
