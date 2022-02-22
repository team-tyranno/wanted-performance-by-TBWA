export default function BannerItem($target, $props) {
  this.template = () => {
    return `
      <div>
        adf
      </div>`;
  };

  this.setState = (newState) => {
    this.$state = { ...this.$state, ...newState };
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.$target = $target;
  this.render();
}
