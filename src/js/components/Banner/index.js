export default function Banner($target) {
  this.template = () => {
    return `
    <div>
      sdfsadf
    </div>`;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.$target = $target;
  this.render();
}
