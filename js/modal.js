// modal
let modal__content = document.querySelector('.modal__content');
let modal_post = document.querySelector('.modal-post');
let modal = '';
let openedmodalId = undefined;
let addlike = 0;

function openmodal(elId) {
  console.log(elId);
  let el = posts[elId - 1];
  openedmodalId = el.id;
  if (el.media.length > 1) {
    modal = `
    <div class="modal__image">
              <video src="${el.media[0]}" autoplay controls>
                <source type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="modal_texts">
              <div class="modal_desc">
                <div class="w-100 p-1 pl-3 desc_top_title">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <h6>Muhammadi Ali Eshonqulov</h6>
                </div>
                <div class="desc_body">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <div class="desc_context">
                    <h6>Muhammadali Eshonqulov</h6>
                    <p>
                      ${el.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal__bookmark">
                <div class="share_icons">
                  <div class="modal_like">
                    <span><i class="bx bx-heart"></i></span>
                    <span><i class="bx bx-message-rounded-dots"></i></span>
                    <span><i class="bx bxs-share"></i></span>
                  </div>
                  <span onclick='mark((${el.id})'><i  class="bx bx-bookmark"></i></span>
                </div>
                <div class="posted-time">
                  <h6>${el.likes} likes</h6>
                  <span>19 HOURS AGO</span>
                </div>
                <form class="onmodal__form">
                  <span><i class="bx bx-smile"></i></span>
                  <input type="text" placeholder="Add a comment" />
                </form>
              </div>
            </div>
    `;
  } else {
    if (el.media[0].indexOf('.mp4') !== -1) {
      modal = `
    <div class="modal__image">
              <video src="${el.media[0]}" autoplay controls>
                <source type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="modal_texts">
              <div class="modal_desc">
                <div class="w-100 p-1 pl-3 desc_top_title">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <h6>Muhammadi Ali Eshonqulov</h6>
                </div>
                <div class="desc_body">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <div class="desc_context">
                    <h6>Muhammadali Eshonqulov</h6>
                    <p>
                      ${el.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal__bookmark">
                <div class="share_icons">
                  <div class="modal_like">
                    <span><i class="bx bx-heart"></i></span>
                    <span><i class="bx bx-message-rounded-dots"></i></span>
                    <span><i class="bx bxs-share"></i></span>
                  </div>
                  <span onclick='mark(${el.id}) '><i class="bx bx-bookmark"></i></span>
                </div>
                <div class="posted-time">
                  <h6>${el.likes} likes</h6>
                  <span>19 HOURS AGO</span>
                </div>
                <form class="onmodal__form">
                  <span><i class="bx bx-smile"></i></span>
                  <input type="text" placeholder="Add a comment" />
                </form>
              </div>
            </div>
    `;
    } else {
      addlike = el.likes;
      modal = `
    <div class="modal__image">
          <img src="${el.media[0]}" alt="">
            </div>
            <div class="modal_texts">
              <div class="modal_desc">
                <div class="w-100 p-1 pl-3 desc_top_title">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <h6>Muhammadi Ali Eshonqulov</h6>
                </div>
                <div class="desc_body">
                  <span><img src="./videos/Muhammadali.jpg" alt="" /></span>
                  <div class="desc_context">
                    <h6>Muhammadali Eshonqulov</h6>
                    <p>
                      ${el.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal__bookmark">
                <div class="share_icons">
                  <div class="modal_like">
                    <span onclick="likeit(${el.id})" ><i class="bx bx-heart"></i></span>
                    <span><i class="bx bx-message-rounded-dots"></i></span>
                    <span><i class="bx bxs-share"></i></span>
                  </div>
                  <span onclick='mark(${el.id})'><i class="bx bx-bookmark"></i></span>
                </div>
                <div class="posted-time">
                  <h6>${addlike} likes</h6>
                  <span>19 HOURS AGO</span>
                </div>
                <form class="onmodal__form">
                  <span><i class="bx bx-smile"></i></span>
                  <input type="text" placeholder="Add a comment" />
                </form>
              </div>
            </div>
    `;
    }
  }
  modal__content.innerHTML = modal;
  modal_post.setAttribute('style', 'display:flex;');
}

function closePostModal() {
  modal_post.setAttribute('style', 'display:none;');
  modal__content.innerHTML = '';
}

// ================= move next modal ===================
// move next element
function moveNext() {
  if (openedmodalId == posts.length) {
  } else {
    openedmodalId++;
    openmodal(openedmodalId);
  }
}

function movePre() {
  if (openedmodalId == 0) {
    openedmodalId = 0;
  } else {
    openedmodalId--;
    openmodal(openedmodalId);
  }
}

// ============== like it =====================
function likeit(id) {
  posts.forEach((item) => {
    if (item.id == id) {
      addlike += 1;
      console.log(addlike);
      openmodal(id);
    }
  });
}
