import { UploadPost } from 'upload-post';

const client = new UploadPost(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1eUBsYXViZW5oZWltZXIuZXUiLCJleHAiOjQ5Mzg3ODY4OTksImp0aSI6ImQ0N2ZjZDZjLTNiZjctNGJlMi1iYTA3LTIxN2ZhYzYwMmY1OSJ9.f5X7ssUOEOplqIHlkXbW4qZO-i1IKwS0b1RGEcMXJ2s'
);

// Upload a video to multiple platforms
// const response = await client.upload('./video.mp4', {
//   title: 'Check out this awesome video! 🎬',
//   user: 'my-profile',
//   platforms: ['tiktok', 'instagram', 'youtube']
// });

//console.log(response);

// const history = await client.getHistory({
//   user: 'Willie Laszlo Laubenheimer',
//   page: 1,
//   limit: 20,
//   platforms:[linkedin]
// });
// console.log(history.uploads);

// const analytics = await client.getAnalytics('my-profile', {
//   platforms: ['instagram', 'tiktok'],
// });
// console.log(analytics);

//Here we go
const { media } = await client.getMedia({
  user: 'linkedin',
  platforms: ['linkedin']
});
console.log('LOG: ' , media);


// Force the personal LinkedIn profile of an account connected as an org admin:
//await client.getMedia('linkedin', 'my-profile', { pageUrn: 'me' });

// Target a specific LinkedIn organization page:
// await client.getMedia('linkedin', 'my-profile', { pageUrn: '12345' });

//GET https://api.linkedin.com/rest/posts?author={encoded_urn}&q=author&count=1&sortBy=LAST_MODIFIED