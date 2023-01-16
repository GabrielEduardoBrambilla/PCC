const main_video = document.querySelector('.main-video video')
const main_video_title = document.querySelector('.main-video .title')
const video_playlist = document.querySelector('.video-playlist .videos')

let videos = document.querySelectorAll('.video')
videos[0].classList.add('active')
videos[0].querySelector('img').src = 'images/pause.svg'

videos.forEach(selected_video => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove('active')
      all_videos.querySelector('img').src = 'images/play.svg'
    }

    selected_video.classList.add('active')
    selected_video.querySelector('img').src = 'images/pause.svg'
  }
})
