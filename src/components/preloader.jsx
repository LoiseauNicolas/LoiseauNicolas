import React, { useState, useEffect }  from 'react';
import $ from 'jquery';



const Preloader = () => {
  useEffect(() => {
    // Update the document title using the browser API
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  });

  return ( <div id="preloader"></div> );
}

export default Preloader;



