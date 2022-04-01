// modal
let modal__content = document.querySelector('.modal__content');
let modal_post = document.querySelector('.modal-post');
let modal_vid_img_sld = document.querySelector('.modal_vid_img_sld');
const modal_media = document.querySelector('.modal_vid_img_sld');
const M_desc = document.querySelector('.M_desc');
const M_like = document.querySelector('.M_likes');
let current_modal_id = 0;
function openmodal(id) {
  current_modal_id = id;
  modal_post.id = id;
  let M_vid = '';
  let M_img = '';
  let M_slider = '';
  let M_slider_img = '';
  let M_slider_vid = '';
  posts.forEach((item) => {
    if (item.id == id) {
      if (item.media.length == 1) {
        console.log('bitta');
        if (item.media[0].indexOf('.mp4') !== -1) {
          M_vid = `
          <video src="${item.media[0]}"  id="${item.id}" autoplay controls>
              <source type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          `;
          modal_media.innerHTML = M_vid;
        } else {
          M_img = `
          <img src="${item.media[0]}" id="${item.id}" alt="">
          `;
          modal_media.innerHTML = M_img;
        }
      } //check is media length == 1
      else {
        item.media.forEach((sliderItem) => {
          if (sliderItem.indexOf('.mp4') !== -1) {
            M_slider_vid += `<div id="${item.id}" class="carousel-item active  carusel_video_onmodal"> <video src="${sliderItem}"  controls>
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video> </div>`;
          } else {
            M_slider_img += `
            <div class="carousel-item " id="${item.id}">
            <img class="d-block img__carusel-2" src="${sliderItem}" alt="">
            </div>
            `;
          }
        });

        M_slider = `
        <div id="carouselExampleControls" class="carousel slide carusel_video_onmodal" data-bs-ride="carousel">
  <div class="carousel-inner h-100">
    
     ${M_slider_vid}
    
    
      ${M_slider_img}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        `;

        modal_media.innerHTML = M_slider;
      }
    }
  });

  modal_post.setAttribute('style', 'display:flex;');
}

function closePostModal() {
  modal_post.setAttribute('style', 'display:none;');
  M_slider_vid = '';
  M_slider_img = '';
  M_slider = '';
  modal_vid_img_sld.innerHTML = '';
  modal_media.innerHTML = '';
}

// ================= move next modal ===================
// move next element
function moveNext() {
  if (current_modal_id == posts.length) {
    modal_vid_img_sld.innerHTML = '';
    modal_media.innerHTML = '';
    current_modal_id = 1;
  } else {
    modal_vid_img_sld.innerHTML = '';
    modal_media.innerHTML = '';
    current_modal_id++;

    openmodal(current_modal_id);
  }
}

function movePre() {
  console.log(current_modal_id);
  if (current_modal_id == 1) {
    modal_vid_img_sld.innerHTML = '';
    modal_media.innerHTML = '';
    current_modal_id = 9;
    openmodal(modal_vid_img_sld);
  } else {
    console.log(current_modal_id);
    modal_vid_img_sld.innerHTML = '';
    modal_media.innerHTML = '';
    current_modal_id--;
    openmodal(modal_vid_img_sld);
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
