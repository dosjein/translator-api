*Translator API*

* Thanks
[matheuss](https://github.com/matheuss/google-translate-api)

**API Documentation**


**Translate**
----
  Translate text.

* **URL**

  /api/v1/translate

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `language=[string]`

   `language_to=[string]`

   `text=[string]`

* **Data Params**

	none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":1 , "translated_text" : "My English is bad"}`
 
* **Error Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":0 , 'error': 'some reason here'}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/translate?language=eng&language_to=rus&text=junk",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```