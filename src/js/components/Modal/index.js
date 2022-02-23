export default function Modal($target) {
  const getCookie = () => {
    if (document.cookie.indexOf('kukka_popup=done') < 0) {
      document.querySelector('#modal').classList.remove('d-none');
    } else {
      document.querySelector('#modal').classList.add('d-none');
    }
  };

  const setCookie = (name, value, expiryDate) => {
    const today = new Date();
    today.setDate(today.getDate() + expiryDate);

    document.cookie = `${name}=${value}; path=/; expires=${today.toGMTString()};`;
  };

  this.setEvent = () => {
    this.$target.addEventListener('click', ({ target }) => {
      if (target.classList.contains('modal-footer-checkbox')) {
        document.querySelector('#modal').classList.add('d-none');
        setCookie('kukka_popup', 'done', 1);
      }

      if (target.classList.contains('modal-footer-button')) {
        document.querySelector('#modal').classList.add('d-none');
      }
    });
  };

  this.template = () => {
    return `
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-6 shadow">
          <a class="modal-body p-0" href="https://www.performancetbwa.com/">
            <img
              alt="Kukka Delivery Delay Notice"
              src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsPopups/11/20220221_%EB%B0%B0%EC%86%A1%EC%95%88%EB%82%B4_G6jZAMi.png"
            />
          </a>
          <div class="modal-footer flex-row border-top-0">
            <label>
              <input class="modal-footer-checkbox form-check-input me-1" type="checkbox" value="" />
              오늘 하루 보지 않기
            </label>
            <button
              type="button"
              class="modal-footer-button btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    `;
  };

  this.mounted = () => {
    getCookie();
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    this.mounted();
  };

  this.$target = $target;
  this.setEvent();
  this.render();
}
