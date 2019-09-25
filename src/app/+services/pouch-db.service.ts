import {Injectable} from '@angular/core';
// @ts-ignore
import PouchDB from 'pouchdb';

@Injectable({
    providedIn: 'root'
})
export class PouchDBService {

    localDb: any;
    remoteDb: any;

    constructor() {
        this.localDb = new PouchDB('hirLocal');
        this.remoteDb = new PouchDB('http://li1659-167.members.linode.com:5984/hir');
        const options = {
            live: true,
            retry: true,
            continuous: true
        };
        PouchDB.replicate(this.remoteDb, this.localDb, options).then((data) => {
            console.log('Replicating...');
            console.log(data);
        });
    }
}
