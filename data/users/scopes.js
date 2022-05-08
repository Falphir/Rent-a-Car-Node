module.exports = {
    //USER
    'read-own-reserves': 'read-own-reserves',
    'create-favorite': 'create-favorite',
    'read-own-favorites': 'read-own-favorites',
    'delete-favorite': 'delete-favorite',
    'create-comment': 'create-comment',

    //EDITOR


    //ADMIN
    'read-users': 'read-users',
    'delete-user': 'delete-user',

    //ADMIN EDITOR
    'update-reserve': 'update-reserve',
    'read-reserves': 'read-reserves',
    'delete-reserve': 'delete-reserve',
    'create-car': 'create-car',
    'update-car': 'update-car',
    'read-reserve-client': 'read-reserve-client',
    'delete-car': 'delete-car',

    //ADMIN EDITOR USER
    'create-reserve': 'create-reserve',
    'detail-reserve': 'detail-reserve',
    'verify-logged-in': 'verify-logged-in'
};


/* 
GET /reserve/user/reserves/:userId -> 'read-own-reserves'
POST /reserve/reserves/:roomId -> 'create-reserve'
PUT /reserve/reserves/:reserveId -> 'update-reserve'
GET /reserve/reserves -> 'read-reserves'
GET /reserve/reserves/:reserveId -> 'detail-reserve'
DELETE /reserve/reserves/:reserveId -> 'delete-reserve'
GET /reserve/reserves/:userId -> 'read-reserve-client'
GET /auth/admin/users -> 'read-users'
GET /auth/me -> 'verify-logged-in'

-------------------------------------
GET /hotel/rooms -> SEM SCOPE
GET /hotel/rooms/:roomId -> SEM SCOPE
GET /hotel/rooms/:roomId/tags -> SEM SCOPE
GET /hotel/rooms/:description -> SEM SCOPE

POST /hotel/rooms -> 'create-car'
PUT /hotel/rooms/:roomId -> 'update-room'
DELETE /hotel/rooms/:roomId -> 'delete-car'

---------------------------------------

/auth/user/login *
/auth/user/register *

/auth/editor/login *
/auth/editor/register *

/auth/admin/login *
/auth/admin/register *
*/