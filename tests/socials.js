// const get = require('simple-get');

// const userName = 'WillieLaszloLaubenheimer'



// const linkCustom = 'https://api.linkedin.com/rest/posts?author={encoded_urn}&q=author&count=1&sortBy=LAST_MODIFIED';
// const linkEx = 'https://linkdapi.com/api/v1/profile/overview?username=' + userName;
const linkMeW = 'https://api.linkedin.com/v2/me';
// console.log('Username: ' + userName);


// // get(linkMeW, function (err, res) {
// //   if (err) throw err;
// //   console.log(res.statusCode); // 200
// //   res.pipe(process.stdout);
// // });

// // get.concat(linkMeW, function (err, res, data) {
// //   if (err) throw err;
// //   console.log(res.statusCode); // 200
// //   console.log(data); // Buffer('this is the server response')
// // })

// const opts = {
//   method: 'GET',
//   url: linkMeW,
//   body: {
//     key: 'value'
//   },
//   json: true
// };
// const info = get.concat(opts, function (err, res, data) {
//   if (err) throw err
//   //console.log(res)
//   //console.log(data); // `data` is an object
// }).res;
// console.log(info);

const axios = require('axios');

async function getLinkedInProfile(accessToken) {
    try {
        const response = await axios.get(linkMeW, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0'
            }
        });
        console.log('Profile Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
        throw error;
    }
}
console.log(getLinkedInProfile());
// Usage: getLinkedInProfile('YOUR_OBTAINED_ACCESS_TOKEN');