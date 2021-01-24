# software_security_web_app_lennert_vanden_Herrewegen

online link = https://bmc.lennertvh.xyz/

# Resources

## private Recources (only from origin: https://www.lennertvh.xyz)

### API :
(public api by using api key)



### Reviews:

path: /reviews
GET

Only when Authenticated on the site
POST, OPTIONS, HEAD

path: reviews/:id
GET

Only when Authenticated on the site
PUT, DELETE, OPTIONS, HEAD

### USERS:

path: /users
Only when Authenticated on the site
POST, OPTIONS, HEAD

path: users/:id
Only when Authenticated on the site
GET

path users/count/:id
Only when Authenticated on the site
GET (check if user exists)

path users/reviews/:id
Only when Authenticated on the site
GET (get reviews by user)

path users/data/:id
Only when Authenticated on the site
GET (download data from user)
