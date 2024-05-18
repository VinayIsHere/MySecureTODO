**Sign UP**
1. Public key for that particular user will be remain in the backend. Private key will be in user device location. 

2. During sig up we generate public/private key. Keep public key in db & private key in user system sage area.
   [Note:-> db will be store in user system.]
   
3. During sign up, we ask user to create private pin, this pin would be hashed usign sha 256 encrption & will be stored in db.

4. When user login, we ask user the private pin, then this pin should be hashed & then compare with the hashed pin stored in own db. If they are same login is successfull.
   Note:-> Doubt on this line need to be clear:[check whether we need to query encrpt the hash store in our db, or we need to hash the pin gien by user.]
   
**Login**
1. After user login, we allow user only to create or delete existing notes.

**Create Notes**
1. When user click + sign, a blank page should open where user can write its notes. It should save simulteneously.

2. If user wants to encrypt this note user should click encrypt button

3. When user click encrypt button, we fetch the private key using user pin & also fetch its public key from db & then encrpty it's content & store it in db file or 
   otherwise if user didn't click encrypt button & press back or exit app we store content without encrption[future:-> should give pop-up to ask whether you want to encrypt it or not]. 
   
   ** API **
   
   [Note: To be created]
   **TODO Application API'S**
1. **API**: ```/api/v1/createuser```
   **Http Type**: ```POST```
   **Param** : The parameter of the api request should contains the following information: ```{"username": username, "password": password}```
   **Return**: ```201(created)``` statuscode with message ```{message: "User created"}``` or ```409(conflict)``` statuscode
   **Discriptions**: This api return ```201``` statuscode when user succfully created and store information in local database otherwise it will return ```409``` statuscode. Note:-> password should be store in ```sha 256``` format.
   
2. **API**: ```/api/v1/login```
   **Http Type**: ```GET```
   **Param** : The parameter of the api request should contains the following information: ```{"username": username, "password": password}```
   **Return**: ```200(successfull)``` statuscode or ```401(unauthorize)``` statuscode.
   **Discriptions**: This api will return the ```200``` statuscode when user successfully login otherwise it will return ```401``` unauthorize statuscode.
   
3. **API**: ```/api/v1/setuppin```
   **Http Type**: ```POST```
   **Param** : The parameter of the api request should contains the following information: ```{"username": username, "pin": pin}```
   **Return**: ```201(created)``` statuscode or ```500(internal server error)``` statuscode.
   **Discriptions**: Through this api user will fill up the pin to setup the pin and then in backend public and private encryption key will get generated.
						 and public key should be store on specific application database along with username and private key should be store on local leveldb folder with key value pair example:- ```{username:{pin:private key}}.```

4. **API**: ```/api/v1/pinsetupdone```
   **Http Type**: ```GET```
   **Param** : The parameter of the api request should contains the following information: ```{"username": username}```
   **Return**: should return ```200``` success if api response is right and return json contains following information. ```{"username": username, pinSetupDone: 1or0}```
   **Discriptions**: This API check whether the pin setup for the user has been done or not.