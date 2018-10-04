/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Mikhail Slabchenko
 * @license MIT
 * 
  */

 class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }
  
  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    
    const resData = response.json();
    return resData;
  }
  
  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    
    const resData = response.json();
    return resData;
  }

  // Make an HTTP PUT Request
  async delete(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
    const resData = response.json();
    return 'Resource deleted';
    }
}