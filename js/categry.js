let marked__container = document.querySelector('.marked__container');

let belgilangan = [];
let markedPosts = '';

// when clicked icon
function mark(e) {
  console.log(e);
  add_wishlist(e.path[7].id, e);
  ajratish(e.target);
  ekrangaChiqarish();
}

// ajratilganlarini ekranga chiqarish
function ekrangaChiqarish() {
  markedPosts = '';
  belgilangan.forEach((el) => {
    //  check is slider or not
    let islider = 'play';
    if (el.media.length > 1) {
      islider = 'copy';
    }

    if (el.media[0].indexOf('.mp4') !== -1) {
      markedPosts += `
    <div class=" post1 post__video_container1" onmouseout="onmouseOut(${el.id})" onmouseover='mymouseOver(${el.id})'>
    <span class="asvideoplay"><i class='bx bx-${islider}'></i></span>
    <video class="post__vid1">
            <source src="${el.media[0]}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div onclick="openmodal(${el.id})"  class="post__hover_effect1 eff${el.id}1">
              <span class="hover_effect__play1"><span class="post_play1"><i class="bx bx-play"></i></span><span class="play_count1">${el.seen}</span></span>
      <span class="hover_effect_comment1"><span class="postlike_icon1"><i class="bx bx-message-rounded"></i></span><span class="comCount1">${el.comment_count}</span></span>
    </div>  
      </div>
    `;
    } else {
      markedPosts += `
        <div class="post1" onmouseout="onmouseOut(${el.id})" onmouseover='mymouseOver(${el.id})'>
              <img src="${el.media[0]}" class="img-fluid post__img1" alt="">
              <div  class="post__hover_effect1 eff${el.id}1" onclick="openmodal(${el.id})">
              <span class="hover_effect__play1"><span class="post_play1"><i class="bx bx-play"></i></span><span class="play_count1">${el.seen}</span></span>
      <span class="hover_effect_comment1"><span class="postlike_icon1"><i class="bx bx-message-rounded"></i></span><span class="comCount1">${el.comment_count}</span></span>
    </div> 
          </div>
        `;
    }
  });
  marked__container.innerHTML = markedPosts;
}

//wishlistga qo'shish
function add_wishlist(id, e) {
  posts.forEach((el) => {
    if (el.id == id) {
      if (el.wishlist == true) {
        el.wishlist = false;
        e.target.classList.add('ticked');
      } else {
        el.wishlist = true;
        e.target.classList.remove('ticked');
      }
      console.log(posts);
    }
  });
}

// belgilangan va belgilanmagan arraylarni ajratib olish
function ajratish() {
  belgilangan = posts.filter((item) => {
    return item.wishlist == true;
  });
}

// opening ang closing marked and posts
marked__container.innerHTML = markedPosts;
let posts_container1 = document.querySelector('.posts_container');
function openMarked() {
  posts_container1.setAttribute('style', 'display: none;');
  marked__container.setAttribute('style', 'display:grid;');
}

function openPosted() {
  posts_container1.setAttribute('style', 'display:grid;');
  marked__container.setAttribute('style', 'display:none;');
}

//  when mouse is over a post
function mymouseOver(ell) {
  let effect = document.querySelector('.eff' + ell + '1');
  console.log('askdjna');
  effect.setAttribute('style', 'display:flex;');
}

function onmouseOut(ell) {
  let effect = document.querySelector('.eff' + ell + '1');

  effect.setAttribute('style', 'display:none;');
}
