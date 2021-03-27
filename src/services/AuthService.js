import storage from './StorageService';
export const isLoggedIn = () => {
    if(storage.getFromLocal('loggedIn')) {
        console.log('loggedIn')
        return true;
    }else {
        console.log('NO loggedIn')
        return false;
    }
}