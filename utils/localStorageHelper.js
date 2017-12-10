class TempStorage {
    constructor() {
        this.storage = {};
    }

    getItem(key) {
        return this.storage.hasOwnProperty(key) ? this.storage[key] : null;
    }

    setItem(key, value) {
        return this.storage[key] = JSON.stringify(value);
    }

    removeItem (key) {
        if (this.storage.hasOwnProperty(key)) {
            this.storage[key] = '';
        }
    }
}

const tempStorage = new TempStorage();

function getItem(key) {
    key = getKey(key);

    if (localStorage != null) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.log(e);
            return localStorage.getItem(key);
        }
    } else {
        try {
            return JSON.parse(tempStorage.getItem(key));
        } catch (e) {
            console.log(e);
            return tempStorage.getItem(key);
        }
    }
}

function setItem(key, value) {
    key = getKey(key);
    if (localStorage != null) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(e);
            localStorage.clear();
            localStorage.setItem(key, JSON.stringify(value));
        }
    } else {
        tempStorage.setItem(key, value);
    }
}

function removeItem(key) {
    if (localStorage != null) {
        localStorage.removeItem(getKey(key));
    } else {
        tempStorage.removeItem(key);
    }
}

function getKey(key) {
    // var user = dataStoreService.get('user');
    // console.log(user);
    // if (user) return key + ":" + user.id;
    return key + ':user:';
}
[
    {
        name: 'user1',
        password: '123'
    },
    {
        name: 'user2',
        password: '123'
    },
    {
        name: 'user3',
        password: '123'
    }
]