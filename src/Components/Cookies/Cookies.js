import publicIP from 'react-native-public-ip';

publicIP()
.then(ip => {    
  console.log(ip);
  // '47.122.71.234'
})
.catch(error => {
  console.log(error);
  // 'Unable to get IP address.'
});