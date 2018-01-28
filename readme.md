*Translator API*

* Thanks
[matheuss](https://github.com/matheuss/google-translate-api)

*I Realte stuff to
[Translation Tool](https://trello.com/c/HPro29Y6/18-translator-tool)

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
 
   `language_from=[string]`

   `language_to=[string]`

   `translate_text=[string]`

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
      url: "/api/v1/translate?language_from=en&language_to=ru&translate_text=junk",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```