import $ from 'jquery';

export default {

  renderMenu: (meal, callback) => {

    let tempURL = "/menu?q=" + meal;
    console.log('temp: ', tempURL);

    $.get({
      url: tempURL,
      success: (data) => callback(null, data),
      error: (err) => callback(err)
    })
  },




}