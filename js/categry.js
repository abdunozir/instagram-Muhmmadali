let marked__container = document.querySelector('.marked__container');

let markedPosts = '';
// select marked posts
posts.forEach((item) => {
  if (item.wishlist) {
    let islider = 'play';
    if (item.media.length > 1) {
      islider = 'slideshow';
    }

    if (item.media[0].indexOf('.mp4') !== -1) {
      markedPosts += `
    <div class=" post post__video_container" onmouseout="onmouseOut(${item.id})" onmouseover='mymouseOver(${item.id})'>
    <span class="asvideoplay"><i class='bx bx-${islider}'></i></span>
    <video class="post__vid">
            <source src="${item.media[0]}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div onclick="openmodal(${item.id})"  class="post__hover_effect eff${item.id}">
              <span class="hover_effect__play"><span class="post_play"><i class="bx bx-play"></i></span><span class="play_count">${item.seen}</span></span>
      <span class="hover_effect_comment"><span class="postlike_icon"><i class="bx bx-message-rounded"></i></span><span class="comCount">${item.comment_count}</span></span>
    </div>  
      </div>
    `;
    } else {
      markedPosts += `
        <div class="post" onmouseout="onmouseOut(${item.id})" onmouseover='mymouseOver(${item.id})'>
              <img src="${item.media[0]}" class="img-fluid post__img" alt="">
              <div  class="post__hover_effect eff${item.id}" onclick="openmodal(${item.id})">
              <span class="hover_effect__play"><span class="post_play"><i class="bx bx-play"></i></span><span class="play_count">${item.seen}</span></span>
      <span class="hover_effect_comment"><span class="postlike_icon"><i class="bx bx-message-rounded"></i></span><span class="comCount">${item.comment_count}</span></span>
    </div> 
          </div>
        `;
    }
  }
});

function mark(id) {
  console.log(id);
}

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
